import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { id: 'hero', label: 'HOME' },
  { id: 'services', label: 'SERVICES' },
  { id: 'work', label: 'WORK' },
  { id: 'process', label: 'PROCESS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ menuOpen, onMenuChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('hero');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 500 && !menuOpen);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav id="nav" className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="wrap nav-inner">
        <a className="logo" id="logo" href="#hero" aria-label="ZS Tech home" onClick={() => onMenuChange(false)}>
          <div className="logo-mark"><span>ZS</span></div>
          <div className="logo-name"><span className="zs">ZS</span>&nbsp;<span className="tech">TECH</span></div>
        </a>

        <div className="nav-links">
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </div>

        <div className="nav-right">
          <span className="status"><i />Available</span>
          <a href="#contact" className="btn btn-primary magnetic" style={{ padding: '12px 22px', fontSize: '12.5px' }}>
            Let's Talk
          </a>
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            id="burger"
            aria-label="Menu"
            aria-controls="mmenu"
            aria-expanded={menuOpen}
            onClick={() => onMenuChange(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
