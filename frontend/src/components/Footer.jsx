const SOCIAL = {
  instagram: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  email: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
    </svg>
  ),
  whatsapp: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  call: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function Footer({ contact }) {
  const socials = contact
    ? [
        { label: 'Instagram', href: contact.instagram, icon: SOCIAL.instagram },
        { label: 'Email', href: `mailto:${contact.email}`, icon: SOCIAL.email },
        { label: 'WhatsApp', href: contact.whatsapp, icon: SOCIAL.whatsapp },
        { label: 'Call', href: `tel:${contact.phoneRaw}`, icon: SOCIAL.call },
      ]
    : [];

  const wordmark = 'ZS TECH'.split('');

  return (
    <footer>
      <div className="wrap foot-top">
        <div className="foot-brand">
          <a className="logo" href="#hero">
            <div className="logo-mark"><span>ZS</span></div>
            <div className="logo-name"><span className="zs">ZS</span>&nbsp;<span className="tech">TECH</span></div>
          </a>
          <p>⚡ Dynamic websites · 📈 Built for growth · 💌 DM for collaborations · 📍 {contact?.cities ?? 'Hyderabad · Mumbai'}</p>
          <div className="foot-social">
            {socials.map((s) => (
              <a key={s.label} className="fs-btn" href={s.href} aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="foot-col">
          <h4>Sitemap</h4>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <a href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>{contact?.email ?? 'zstech103@gmail.com'}</a>
          <a href={`tel:${contact?.phoneRaw ?? '+919869706422'}`}>+91 98697 06442</a>
          <a href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">{contact?.instagramHandle ?? '@zstech10'}</a>
          <span style={{ color: 'var(--dim)' }}>{contact?.cities ?? 'Hyderabad · Mumbai'}</span>
        </div>
      </div>

      <div className="foot-word" aria-hidden="true">
        {wordmark.map((l, i) => <span key={`${l}-${i}`}>{l}</span>)}
      </div>

      <div className="wrap foot-bar">
        <p>© 2026 ZS TECH — WE BUILD WEBSITES THAT WORK.</p>
        <div className="fl">
          <a href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>EMAIL</a>
          <span style={{ color: 'var(--dim)' }}>MADE WITH 💜 + ⚡</span>
        </div>
      </div>
    </footer>
  );
}
