import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { postContact } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';

const MAIL_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
  </svg>
);
const PHONE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IG_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact({ contact }) {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const phoneHref = `tel:${contact?.phoneRaw ?? '+919869706422'}`;
  const tel = () => toast('📞 Calling +91 98697 06442…');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast('Please fill in all fields');
      return;
    }
    setSending(true);
    const res = await postContact(form);
    setSending(false);
    if (res.ok) {
      toast(res.offline ? 'Message noted — API offline, but we got it! ✉️' : 'Message sent! We\'ll reply within 24h ✉️');
      setForm({ name: '', email: '', message: '' });
    } else {
      toast(res.error ?? 'Something went wrong — try again');
    }
  };

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="section" style={{ paddingTop: '60px' }}>
      <div className="wrap">
        <Reveal anim="zoom">
          <div className="cta-banner">
            <div className="cta-grid">
              <div>
                <span className="sec-kicker">Get in touch</span>
                <h2 className="cta-title">LET'S BUILD SOMETHING<br /><span className="gr">AMAZING TOGETHER.</span></h2>
                <p className="cta-sub">
                  Have a project in mind? Tell us about it — we'll reply within 24 hours with ideas, timelines and a plan.
                  Or slide into our DMs, we're friendly. 💌
                </p>
                <div className="cta-actions">
                  <a href={phoneHref} className="btn btn-primary btn-lg magnetic" onClick={tel}>START A PROJECT <span className="ico">📞</span></a>
                  <a href={contact?.whatsapp ?? 'https://wa.me/919869706422'} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg magnetic">WHATSAPP US</a>
                </div>

                <form className="contact-form" onSubmit={onSubmit}>
                  <input name="name" placeholder="Your name" value={form.name} onChange={set('name')} />
                  <input name="email" type="email" placeholder="Your email" value={form.email} onChange={set('email')} />
                  <textarea name="message" placeholder="Tell us about your project…" value={form.message} onChange={set('message')} />
                  <button type="submit" className="btn btn-primary magnetic" disabled={sending}>
                    {sending ? 'SENDING…' : 'SEND MESSAGE ✈'}
                  </button>
                </form>
              </div>

              <div className="cta-contact">
                <a className="cta-row" href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>
                  <span className="cr-ico">{MAIL_ICON}</span>
                  <span><span className="cr-l">Email</span><span className="cr-v">{contact?.email ?? 'zstech103@gmail.com'}</span></span>
                  <span className="cr-go">→</span>
                </a>
                <a className="cta-row" href={phoneHref}>
                  <span className="cr-ico">{PHONE_ICON}</span>
                  <span><span className="cr-l">Phone</span><span className="cr-v">+91 98697 06442</span></span>
                  <span className="cr-go">→</span>
                </a>
                <a className="cta-row" href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">
                  <span className="cr-ico">{IG_ICON}</span>
                  <span><span className="cr-l">Instagram</span><span className="cr-v">{contact?.instagramHandle ?? '@zstech10'}</span></span>
                  <span className="cr-go">→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
