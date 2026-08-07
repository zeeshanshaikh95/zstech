import { useEffect, useRef } from 'react';
import ThreeBackground from './ThreeBackground.jsx';
import { useTypewriter } from '../hooks/useTypewriter.js';
import { useToast } from '../context/ToastContext.jsx';

function Mockups() {
  return (
    <div className="mock-inner">
        <div className="laptop">
          <div className="lap-screen">
            <div className="ls-top">
              <span className="ls-logo">Z<b>S</b>&nbsp;TECH</span>
              <span className="ls-nav">
                <span>HOME</span><span>SERVICES</span><span>WORK</span><span>ABOUT</span>
                <span className="pill">CONTACT</span>
              </span>
            </div>
            <div className="ls-body">
              <div className="ls-txt">
                <div className="ls-tag">● DIGITAL SOLUTIONS</div>
                <div className="ls-h1">EXPERIENCES THAT<br /><span className="gr">DRIVE RESULTS.</span></div>
                <div className="ls-p">We build sleek, high-performing websites that help your business stand out and scale.</div>
                <div className="ls-btns"><span className="ls-btn">LET'S BUILD YOURS</span><span className="ls-btn o">VIEW WORK</span></div>
              </div>
              <svg className="ls-wave" viewBox="0 0 150 90" fill="none">
                <path d="M0 70 C 30 20, 60 90, 90 50 S 130 10, 150 40" stroke="url(#wg)" strokeWidth="3" strokeLinecap="round" opacity=".9" />
                <path d="M0 85 C 35 45, 65 100, 95 70 S 135 35, 150 60" stroke="url(#wg)" strokeWidth="2" strokeLinecap="round" opacity=".5" />
                <defs>
                  <linearGradient id="wg" x1="0" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="lap-base" />
        </div>

        <div className="phone">
          <div className="ph-body">
            <div className="ph-notch" />
            <div className="ph-head"><div className="ph-av">Z</div><span className="ph-un">zstech10</span></div>
            <div className="ph-card">
              <div className="pc-l">Performance</div>
              <div className="pc-v">99% Uptime</div>
              <div className="ph-chart"><i /><i /><i /><i /><i /></div>
            </div>
            <div className="ph-h1">BOLD IDEAS.<br />POWERFUL<br />WEBSITES.</div>
            <div className="ph-btn">START A PROJECT</div>
          </div>
        </div>

        <div className="chip chip-1"><span className="ci">⚡</span> Fast Load Times</div>
        <div className="chip chip-2"><span className="ci">📈</span> SEO Optimized</div>
        <div className="chip chip-3"><span className="ci">🖥️</span> Fully Responsive</div>
    </div>
  );
}

export default function Hero({ words, contact }) {
  const typed = useTypewriter(words);
  const copyRef = useRef(null);
  const stageRef = useRef(null);
  const hintRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const y = window.scrollY;
      if (y < hero.offsetHeight) {
        if (copyRef.current) {
          copyRef.current.style.transform = `translateY(${y * 0.18}px)`;
          copyRef.current.style.opacity = `${Math.max(0, 1 - (y / hero.offsetHeight) * 1.2)}`;
        }
        if (stageRef.current) stageRef.current.style.transform = `translateY(${y * 0.1}px)`;
        if (hintRef.current) hintRef.current.style.opacity = `${Math.max(0, 1 - y / 220)}`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tel = () => toast('📞 Calling +91 98697 06442…');
  const phoneHref = `tel:${contact?.phoneRaw ?? '+919869706422'}`;

  return (
    <section id="hero">
      <div className="aurora aur-a" />
      <div className="aurora aur-b" />
      <div className="aurora aur-c" />
      <ThreeBackground />

      <div className="wrap hero-inner">
        <div className="hero-copy" ref={copyRef}>
          <span className="badge"><span className="blink" /><span>Digital Solutions · Est. Hyderabad</span></span>
          <h1 className="hero-title">
            WE BUILD<br />
            <span className="gr">WEBSITES</span><br />
            THAT <span className="outline">WORK.</span>
          </h1>
          <div className="hero-typer">→ we craft <span className="type">{typed}</span><span className="caret" /></div>
          <p className="hero-sub">
            Modern designs. Powerful performance. <b>Built for growth.</b> From idea to launch — we turn your
            brand into a digital experience that converts.
          </p>
          <div className="hero-cta">
            <a href={phoneHref} className="btn btn-primary btn-lg magnetic" onClick={tel}>LET'S BUILD YOURS <span className="ico">→</span></a>
            <a href="#work" className="btn btn-ghost btn-lg magnetic">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              VIEW WORK
            </a>
          </div>
          <div className="hero-meta">
            <div className="hm-item"><span className="n">99%</span><span className="l">Uptime</span></div>
            <div className="hm-item"><span className="n">20+</span><span className="l">Projects</span></div>
            <div className="hm-item"><span className="n">15+</span><span className="l">Clients</span></div>
            <div className="hm-item"><span className="n">2</span><span className="l">Cities</span></div>
          </div>
        </div>

        <div className="mock-stage" ref={stageRef}>
          <Mockups />
        </div>
      </div>

      <div className="scroll-hint" ref={hintRef}>
        <span className="sh-t">Scroll</span><span className="sh-line" />
      </div>
    </section>
  );
}
