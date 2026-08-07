import { useEffect, useState } from 'react';

export function useTypewriter(words) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return;
    }
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const word = words[wi] ?? '';
      setText(word.slice(0, ci));

      if (!deleting && ci < word.length) {
        ci += 1;
        timeout = setTimeout(tick, 55);
      } else if (!deleting) {
        deleting = true;
        timeout = setTimeout(tick, 1900);
      } else if (ci > 0) {
        ci -= 1;
        timeout = setTimeout(tick, 26);
      } else {
        deleting = false;
        wi = (wi + 1) % words.length;
        timeout = setTimeout(tick, 350);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, [words]);

  return text;
}
