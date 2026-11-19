const ICONS = {
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  email: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  ),
  whatsapp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  call: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function Footer({ contact }) {
  const socials = [
    { label: 'Instagram', href: contact?.instagram ?? 'https://instagram.com/zstech10', icon: ICONS.instagram },
    { label: 'Email', href: `mailto:${contact?.email ?? 'zstech103@gmail.com'}`, icon: ICONS.email },
    { label: 'WhatsApp', href: contact?.whatsapp ?? 'https://wa.me/919869706422', icon: ICONS.whatsapp },
    { label: 'Call', href: `tel:${contact?.phoneRaw ?? '+919869706422'}`, icon: ICONS.call },
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#hero">
              <span className="brand-mark" aria-hidden="true">ZS</span>
              <span className="brand-name">ZS <span>Tech</span></span>
            </a>
            <p>
              We build websites that work — custom design, clean code and
              support long after launch.
            </p>
            <div className="foot-social">
              {socials.map((s) => (
                <a key={s.label} className="fs-btn" href={s.href} aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="foot-col" aria-label="Footer">
            <h3>Explore</h3>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#social">Social</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="foot-col">
            <h3>Contact</h3>
            <a href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>{contact?.email ?? 'zstech103@gmail.com'}</a>
            <a href={`tel:${contact?.phoneRaw ?? '+919869706422'}`}>{contact?.phone ?? '+91 98697 06442'}</a>
            <a href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">
              {contact?.instagramHandle ?? '@zstech10'}
            </a>
            <span>{contact?.cities ?? 'Hyderabad · Mumbai'}</span>
          </div>
        </div>

        <div className="foot-bar">
          <p>© {new Date().getFullYear()} ZS Tech. All rights reserved.</p>
          <div className="fl">
            <a href={contact?.instagram ?? 'https://instagram.com/zstech10'} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>Email</a>
            <a href="#hero">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
