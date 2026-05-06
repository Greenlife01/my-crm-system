const express = require('express');
const path = require('path');
const db = require('./db');
const { sendIntroEmail } = require('./emailService');
const { startScheduler } = require('./scheduler');

const app = express();
const PORT = process.env.PORT || 3000;

const VALID_STATUSES = ['New', 'Contacted', 'Proposal Sent', 'Meeting Booked', 'Closed'];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET all leads
app.get('/api/leads', (req, res) => {
  const leads = db.prepare(`
    SELECT l.*,
      (SELECT json_group_array(json_object('type', type, 'subject', subject, 'preview_url', preview_url, 'sent_at', sent_at))
       FROM email_log WHERE lead_id = l.id ORDER BY sent_at ASC) as email_history
    FROM leads l
    ORDER BY l.created_at DESC
  `).all();

  const parsed = leads.map(l => ({
    ...l,
    email_history: l.email_history ? JSON.parse(l.email_history) : [],
    intro_email_sent: Boolean(l.intro_email_sent),
    followup_email_sent: Boolean(l.followup_email_sent),
  }));

  res.json(parsed);
});

// GET single lead
app.get('/api/leads/:id', (req, res) => {
  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });
  res.json({
    ...lead,
    intro_email_sent: Boolean(lead.intro_email_sent),
    followup_email_sent: Boolean(lead.followup_email_sent),
  });
});

// POST create lead
app.post('/api/leads', async (req, res) => {
  const { name, email, phone, company } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const result = db.prepare(`
    INSERT INTO leads (name, email, phone, company, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, 'New', datetime('now'), datetime('now'))
  `).run(name.trim(), email.trim().toLowerCase(), phone?.trim() || null, company?.trim() || null);

  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(result.lastInsertRowid);

  // Send intro email async — don't block the response
  sendIntroEmail(lead).catch(err => console.error('Intro email error:', err.message));

  res.status(201).json({
    ...lead,
    intro_email_sent: Boolean(lead.intro_email_sent),
    followup_email_sent: Boolean(lead.followup_email_sent),
  });
});

// PATCH update lead status
app.patch('/api/leads/:id/status', (req, res) => {
  const { status } = req.body;

  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `Status must be one of: ${VALID_STATUSES.join(', ')}` });
  }

  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });

  db.prepare(`
    UPDATE leads SET status = ?, updated_at = datetime('now') WHERE id = ?
  `).run(status, req.params.id);

  const updated = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  res.json({
    ...updated,
    intro_email_sent: Boolean(updated.intro_email_sent),
    followup_email_sent: Boolean(updated.followup_email_sent),
  });
});

// PATCH update lead details
app.patch('/api/leads/:id', (req, res) => {
  const { name, email, phone, company } = req.body;
  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });

  db.prepare(`
    UPDATE leads SET
      name = COALESCE(?, name),
      email = COALESCE(?, email),
      phone = COALESCE(?, phone),
      company = COALESCE(?, company),
      updated_at = datetime('now')
    WHERE id = ?
  `).run(name || null, email || null, phone || null, company || null, req.params.id);

  const updated = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  res.json({
    ...updated,
    intro_email_sent: Boolean(updated.intro_email_sent),
    followup_email_sent: Boolean(updated.followup_email_sent),
  });
});

// DELETE lead
app.delete('/api/leads/:id', (req, res) => {
  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });

  db.prepare('DELETE FROM email_log WHERE lead_id = ?').run(req.params.id);
  db.prepare('DELETE FROM leads WHERE id = ?').run(req.params.id);

  res.json({ success: true });
});

// GET dashboard stats
app.get('/api/stats', (req, res) => {
  const total = db.prepare('SELECT COUNT(*) as count FROM leads').get().count;
  const byStatus = db.prepare(`
    SELECT status, COUNT(*) as count FROM leads GROUP BY status
  `).all();
  const emailsSent = db.prepare('SELECT COUNT(*) as count FROM email_log').get().count;
  const recentLeads = db.prepare(`
    SELECT * FROM leads ORDER BY created_at DESC LIMIT 5
  `).all();

  res.json({ total, byStatus, emailsSent, recentLeads });
});

// GET email log for a lead
app.get('/api/leads/:id/emails', (req, res) => {
  const emails = db.prepare(`
    SELECT * FROM email_log WHERE lead_id = ? ORDER BY sent_at DESC
  `).all(req.params.id);
  res.json(emails);
});

app.listen(PORT, () => {
  console.log(`🚀 CRM server running at http://localhost:${PORT}`);
  startScheduler();
});
