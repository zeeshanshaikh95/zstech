import { useEffect } from 'react';
import { useToast } from '../context/ToastContext.jsx';

const COLORS = ['#8b5cf6', '#38bdf8', '#a855f7', '#4ade80', '#fbbf24', '#ec4899'];

function burst() {
  for (let i = 0; i < 42; i += 1) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.setAttribute('aria-hidden', 'true');
    s.style.background = COLORS[i % COLORS.length];
    s.style.left = `${window.innerWidth / 2 + Math.random() * 40 - 20}px`;
    s.style.top = `${window.innerHeight / 2 + Math.random() * 30 - 15}px`;
    s.style.setProperty('--bx', `${Math.random() * 440 - 220}px`);
    s.style.setProperty('--by', `${Math.random() * 440 - 220}px`);
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}

export function useEasterEggs() {
  const toast = useToast();

  useEffect(() => {
    let clicks = 0;
    let clickTimer;

    const onLogoClick = (e) => {
      if (!e.target.closest('#logo')) return;
      clicks += 1;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => (clicks = 0), 1500);
      if (clicks === 5) {
        clicks = 0;
        toast('🎉 You found the easter egg!');
        burst();
      }
    };

    const onKey = (e) => {
      if (e.key.toLowerCase() !== 'z') return;
      const app = document.getElementById('app');
      const on = app.classList.toggle('hue-shift');
      toast(on ? '🌈 Rainbow mode ON' : '🌑 Back to dark mode');
    };

    document.addEventListener('click', onLogoClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onLogoClick);
      window.removeEventListener('keydown', onKey);
      clearTimeout(clickTimer);
    };
  }, [toast]);
}
