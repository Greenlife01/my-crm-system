const cron = require('node-cron');
const db = require('./db');
const { sendFollowUpEmail } = require('./emailService');

// Number of days after creation to send the follow-up email
const FOLLOWUP_DAYS = parseInt(process.env.FOLLOWUP_DAYS || '3');

async function processFollowUps() {
  const leads = db.prepare(`
    SELECT * FROM leads
    WHERE followup_email_sent = 0
      AND intro_email_sent = 1
      AND status NOT IN ('Closed')
      AND datetime(created_at, '+' || ? || ' days') <= datetime('now')
  `).all(FOLLOWUP_DAYS);

  if (leads.length === 0) return;

  console.log(`🔄 Scheduler: ${leads.length} lead(s) due for follow-up email`);

  for (const lead of leads) {
    try {
      await sendFollowUpEmail(lead);
    } catch {
      // Individual failures are logged inside sendFollowUpEmail
    }
  }
}

function startScheduler() {
  console.log(`⏰ Follow-up email scheduler started (checks every hour, sends after ${FOLLOWUP_DAYS} day(s))`);

  // Run immediately on startup to catch any missed follow-ups
  processFollowUps();

  // Then run every hour
  cron.schedule('0 * * * *', processFollowUps);
}

module.exports = { startScheduler, processFollowUps };
