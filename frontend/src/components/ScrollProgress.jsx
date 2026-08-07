import { useEffect, useRef, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const ringRef = useRef(null);
  const CIRC = 2 * Math.PI * 23;

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setProgress(p);
      setShow(window.scrollY > 600);
      if (ringRef.current) {
        ringRef.current.style.strokeDasharray = CIRC;
        ringRef.current.style.strokeDashoffset = CIRC - p * CIRC;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [CIRC]);

  return (
    <>
      <div id="scrollbar" aria-hidden="true" style={{ width: `${progress * 100}%` }} />
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
