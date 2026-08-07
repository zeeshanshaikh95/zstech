import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      // stop the loop once the ring settles on the cursor — restarts on the next move
      if (Math.abs(mx - rx) < 0.5 && Math.abs(my - ry) < 0.5) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const t = e.target.closest('a,button,.work-card,input,textarea,.faq-q,.tst,.cta-row');
      const vc = e.target.closest('.work-card');
      document.body.classList.toggle('cur-hover', !!t);
      document.body.classList.toggle('cur-view', !!vc);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cur-label">VIEW</span>
      </div>
    </>
  );
}
