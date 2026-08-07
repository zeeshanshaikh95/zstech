import { useEffect } from 'react';
import { useToast } from '../context/ToastContext.jsx';

const LINKS = [
  { id: 'hero', num: '01', label: 'HOME' },
  { id: 'services', num: '02', label: 'SERVICES' },
  { id: 'work', num: '03', label: 'WORK' },
  { id: 'process', num: '04', label: 'PROCESS' },
  { id: 'contact', num: '05', label: 'CONTACT' },
];

const ICONS = {
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

export default function MobileDrawer({ open, onClose, contact }) {
  const toast = useToast();

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) onClose(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onClose]);

  const tel = () => {
    toast('📞 Calling +91 98697 06442…');
    onClose();
  };

  const socials = contact
    ? [
        { label: 'Instagram', href: contact.instagram, icon: ICONS.instagram },
        { label: 'Email', href: `mailto:${contact.email}`, icon: ICONS.email },
        { label: 'WhatsApp', href: contact.whatsapp, icon: ICONS.whatsapp },
        { label: 'Call', href: `tel:${contact.phoneRaw}`, icon: ICONS.call },
      ]
    : [];

  return (
    <>
      <div className={`mm-backdrop ${open ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div id="mmenu" className={open ? 'open' : ''} aria-label="Menu">
        <div className="mm-head">
          <div className="mm-logo">
            <div className="logo-mark"><span>ZS</span></div>
            <span className="mm-logo-t">ZSTECH</span>
          </div>
          <button className="mm-close" id="mmClose" aria-label="Close menu" onClick={onClose}>✕</button>
        </div>

        <nav className="mm-links">
          {LINKS.map(({ id, num, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              style={{ transitionDelay: open ? `${0.04 + i * 0.05}s` : '0s' }}
              onClick={onClose}
            >
              <span className="n">{num}</span><span className="mm-w">{label}</span>
            </a>
          ))}
        </nav>

        <div className="mm-foot">
          <a className="mm-cta" href={`tel:${contact?.phoneRaw ?? '+919869706422'}`} onClick={tel}>
            📞 START A PROJECT
          </a>
          <div className="mm-social">
            {socials.map((s) => (
              <a key={s.label} className="fs-btn" href={s.href} aria-label={s.label} onClick={() => toast(`Opening ${s.label}…`)}>
                {s.icon}
              </a>
            ))}
          </div>
          <p>
            {contact?.instagramHandle ?? '@zstech10'} · {contact?.cities ?? 'Hyderabad · Mumbai'}
            <br />Made with 💜 + ⚡ by ZS TECH
          </p>
        </div>
      </div>
    </>
  );
}
