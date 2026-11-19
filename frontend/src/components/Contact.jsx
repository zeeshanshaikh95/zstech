import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { useToast } from '../context/ToastContext.jsx';

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact({ contact }) {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const phoneRaw = contact?.phoneRaw ?? '+919869706422';
  const phone = contact?.phone ?? '+91 98697 06442';
  const email = contact?.email ?? 'zstech103@gmail.com';
  const whatsapp = `https://wa.me/${phoneRaw.replace(/\D/g, '')}`;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const mail = form.email.trim();
    const message = form.message.trim();

    if (!name || !mail || !message) {
      toast('Please fill in your name, email and message.');
      return;
    }

    const text = `Hi ZS Tech, I'm ${name} (${mail}).\n\n${message}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    toast('Opening WhatsApp — just hit send.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="kicker">Get in touch</span>
              <h2 className="sec-title">
                Let&apos;s build something<br />
                <span className="serif">worth visiting.</span>
              </h2>
              <p>
                Tell us about your project and we will reply within 24 hours
                with ideas, a timeline and a fixed price. No pressure, no
                jargon.
              </p>

              <div className="contact-list">
                <a className="contact-row" href={`mailto:${email}`}>
                  <MailIcon /><span className="lbl">Email</span>{email}
                </a>
                <a className="contact-row" href={`tel:${phoneRaw}`}>
                  <PhoneIcon /><span className="lbl">Phone</span>{phone}
                </a>
                <a className="contact-row" href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon /><span className="lbl">Instagram</span>{contact?.instagramHandle ?? '@zstech10'}
                </a>
                <span className="contact-row">
                  <PinIcon /><span className="lbl">Based in</span>{contact?.cities ?? 'Hyderabad · Mumbai'}
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" placeholder="Zeeshan Shaikh" autoComplete="name"
                  value={form.name} onChange={set('name')} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@business.com" autoComplete="email"
                  value={form.email} onChange={set('email')} required />
              </div>
              <div className="field">
                <label htmlFor="message">What do you need?</label>
                <textarea id="message" name="message" placeholder="A website for my business, live before December…"
                  value={form.message} onChange={set('message')} required />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message <span className="arr" aria-hidden="true">→</span>
              </button>
              <p className="form-note">
                Opens WhatsApp with your message ready to send — nothing gets lost.
                Prefer email? Write to <a href={`mailto:${email}`}>{email}</a>.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
