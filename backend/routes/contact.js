import { Router } from 'express';

const router = Router();

// In-memory store — swap for a real database (MongoDB/Postgres) in production.
const submissions = [];

/**
 * POST /api/contact
 * Body: { name, email, message }
 */
router.post('/', (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'All fields are required (name, email, message).',
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please provide a valid email address.' });
  }

  const entry = {
    id: submissions.length + 1,
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 2000),
    receivedAt: new Date().toISOString(),
  };

  submissions.push(entry);

  // TODO: wire up email delivery (Nodemailer / Resend / SendGrid) here.
  console.log(`[contact] New inquiry #${entry.id} from ${entry.name} <${entry.email}>`);

  res.status(201).json({ ok: true, id: entry.id, receivedAt: entry.receivedAt });
});

export default router;
