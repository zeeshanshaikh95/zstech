import { useEffect, useState } from 'react';

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ menuOpen, onToggle, onClose }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#hero" aria-label="ZS Tech — home" onClick={onClose}>
          <span className="brand-mark" aria-hidden="true">ZS</span>
          <span className="brand-name">ZS <span>Tech</span></span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
          <button
            type="button"
            className={`burger ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={onToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
