import { useEffect } from 'react';
import { NAV_LINKS } from './Navbar.jsx';

export default function MobileDrawer({ open, onClose, contact }) {
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) onClose();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onClose]);

  return (
    <>
      <div
        className={`drawer-backdrop ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`drawer ${open ? 'open' : ''}`}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <div className="drawer-head">
          <a className="brand" href="#hero" onClick={onClose}>
            <span className="brand-mark" aria-hidden="true">ZS</span>
            <span className="brand-name">ZS <span>Tech</span></span>
          </a>
          <button type="button" className="drawer-close" aria-label="Close menu" onClick={onClose}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="drawer-links" aria-label="Main">
          {NAV_LINKS.map(({ id, label }, i) => (
            <a key={id} href={`#${id}`} onClick={onClose}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="drawer-foot">
          <a className="btn btn-primary" href="#contact" onClick={onClose}>
            Start a project
          </a>
          <div className="drawer-contact">
            <a href={`mailto:${contact?.email ?? 'zstech103@gmail.com'}`}>{contact?.email ?? 'zstech103@gmail.com'}</a>
            <a href={`tel:${contact?.phoneRaw ?? '+919869706422'}`}>{contact?.phone ?? '+91 98697 06442'}</a>
            <span>{contact?.cities ?? 'Hyderabad · Mumbai'}</span>
          </div>
        </div>
      </div>
    </>
  );
}
