import { useEffect, useRef, useState } from 'react';

export default function ScrollProgress() {
  const [show, setShow] = useState(false);
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const CIRC = 2 * Math.PI * 23;

  useEffect(() => {
    const bar = barRef.current;
    const ring = ringRef.current;
    let raf = 0;

    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      // drive the DOM directly — no React re-renders per scroll tick
      bar.style.width = `${p * 100}%`;
      ring.style.strokeDasharray = CIRC;
      ring.style.strokeDashoffset = CIRC - p * CIRC;
      setShow(window.scrollY > 600);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [CIRC]);

  return (
    <>
      <div id="scrollbar" ref={barRef} aria-hidden="true" />
      <button
        id="toTop"
        className={show ? 'show' : ''}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 52 52" aria-hidden="true">
          <defs>
            <linearGradient id="ttg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <circle ref={ringRef} cx="26" cy="26" r="23" />
        </svg>
        <span className="arr">↑</span>
      </button>
    </>
  );
}
