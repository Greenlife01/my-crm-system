const nodemailer = require('nodemailer');
const db = require('./db');

let transporter = null;
let testAccountInfo = null;

async function getTransporter() {
  if (transporter) return transporter;

  // Use env SMTP settings if provided, otherwise create an Ethereal test account
  if (process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    const testAccount = await nodemailer.createTestAccount();
    testAccountInfo = testAccount;
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log('📧 Using Ethereal test email account:', testAccount.user);
    console.log('   View sent emails at: https://ethereal.email');
  }

  return transporter;
}

async function sendEmail(to, subject, html) {
  const transport = await getTransporter();
  const from = process.env.SMTP_FROM || '"CRM System" <crm@example.com>';

  const info = await transport.sendMail({ from, to, subject, html });
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`📬 Preview email: ${previewUrl}`);
  }
  return { messageId: info.messageId, previewUrl };
}

async function sendIntroEmail(lead) {
  const subject = `Welcome, ${lead.name}! We'd love to connect`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Hello ${lead.name}!</h2>
      <p>Thank you for your interest. We're excited to connect with you${lead.company ? ` and the team at <strong>${lead.company}</strong>` : ''}.</p>
      <p>We'd love to learn more about your needs and explore how we can help you achieve your goals.</p>
      <p>Feel free to reply to this email or give us a call. We look forward to speaking with you soon!</p>
      <br>
      <p style="color: #6b7280; font-size: 14px;">Best regards,<br>The CRM Team</p>
    </div>
  `;

  try {
    const result = await sendEmail(lead.email, subject, html);

    db.prepare(`
      UPDATE leads SET intro_email_sent = 1, updated_at = datetime('now') WHERE id = ?
    `).run(lead.id);

    db.prepare(`
      INSERT INTO email_log (lead_id, type, subject, preview_url) VALUES (?, 'intro', ?, ?)
    `).run(lead.id, subject, result.previewUrl || null);

    console.log(`✅ Intro email sent to ${lead.email}`);
    return result;
  } catch (err) {
    console.error(`❌ Failed to send intro email to ${lead.email}:`, err.message);
    throw err;
  }
}

async function sendFollowUpEmail(lead) {
  const subject = `Following up — ${lead.name}, any questions?`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Hi ${lead.name},</h2>
      <p>I wanted to follow up on my previous email and see if you had any questions or if there's anything I can help with.</p>
      ${lead.company ? `<p>We've been working with companies like <strong>${lead.company}</strong> to drive meaningful results, and I'd love to show you what we can do.</p>` : ''}
      <p>Would you be open to a quick 15-minute call this week? I'm happy to work around your schedule.</p>
      <br>
      <p style="color: #6b7280; font-size: 14px;">Best regards,<br>The CRM Team</p>
    </div>
  `;

  try {
    const result = await sendEmail(lead.email, subject, html);

    db.prepare(`
      UPDATE leads SET followup_email_sent = 1, updated_at = datetime('now') WHERE id = ?
    `).run(lead.id);

    db.prepare(`
      INSERT INTO email_log (lead_id, type, subject, preview_url) VALUES (?, 'followup', ?, ?)
    `).run(lead.id, subject, result.previewUrl || null);

    console.log(`✅ Follow-up email sent to ${lead.email}`);
    return result;
  } catch (err) {
    console.error(`❌ Failed to send follow-up email to ${lead.email}:`, err.message);
    throw err;
  }
}

module.exports = { sendIntroEmail, sendFollowUpEmail };
