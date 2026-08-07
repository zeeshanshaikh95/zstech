import { useEffect, useRef, useState } from 'react';

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);
  const notified = useRef(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 9) + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
      }
      setPercent(p);
      if (p === 100 && !notified.current) {
        notified.current = true;
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 900);
        }, 350);
      }
    }, 110);
    return () => clearInterval(interval);
  }, [onDone]);

  useEffect(() => {
    document.body.classList.add('lock');
    return () => document.body.classList.remove('lock');
  }, []);

  return (
    <div id="preloader" className={done ? 'done' : ''} aria-hidden="true">
      <div className="pl-logo">
        <div className="pl-mark"><span>ZS</span></div>
        <div className="pl-text">Z<b>S</b> TECH</div>
      </div>
      <div className="pl-bar"><i style={{ width: `${percent}%` }} /></div>
      <div className="pl-pct">{percent}%</div>
      <div className="pl-sub">We Build Websites That Work</div>
    </div>
  );
}
