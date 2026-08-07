export default function ProjectArt({ art }) {
  if (art === 'art-hh') {
    return (
      <div className="wm-art art-hh">
        <div className="sun" />
        <svg className="leaf" viewBox="0 0 170 170" fill="none">
          <path d="M85 10C85 10 60 55 85 90C110 55 85 10 85 10Z" fill="#16a34a" opacity=".8" />
          <path d="M85 90C85 90 130 70 150 85C135 120 85 105 85 90Z" fill="#22c55e" opacity=".7" />
          <path d="M85 90C85 90 40 70 20 85C35 120 85 105 85 90Z" fill="#15803d" opacity=".7" />
          <circle cx="85" cy="85" r="7" fill="#86efac" />
        </svg>
        <div className="hh-card"><div className="hl">🥗 30-Day Plan</div><div className="hp">Balanced meals, real results</div></div>
        <svg className="bowl" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="52" r="30" fill="#16a34a" opacity=".85" />
          <circle cx="60" cy="52" r="30" fill="none" stroke="#86efac" strokeWidth="2" opacity=".7" />
          <path d="M22 58 C22 88 40 100 60 100 C80 100 98 88 98 58" fill="#0f5132" />
          <path d="M30 58 C30 82 44 92 60 92" stroke="#86efac" strokeWidth="2" fill="none" opacity=".6" />
          <circle cx="50" cy="48" r="5" fill="#f87171" /><circle cx="70" cy="46" r="6" fill="#fbbf24" />
        </svg>
        <span className="hh-tag">health-harvest</span>
      </div>
    );
  }

  if (art === 'art-ep') {
    return (
      <div className="wm-art art-ep">
        <div className="ep-grid" />
        <div className="ep-card">
          <div className="ep-av">ZS</div>
          <div className="ep-name">Shaikh Zeeshan</div>
          <div className="ep-role">FULL-STACK DEVELOPER</div>
          <div className="ep-bar"><i /></div>
          <div className="ep-bar"><i /></div>
          <div className="ep-bar"><i /></div>
        </div>
        <span className="ep-tag">portfolio-system</span>
      </div>
    );
  }

  return (
    <div className="wm-art art-ba">
      <div className="ba-rings" />
      <svg className="ba-snow" viewBox="0 0 110 110" fill="none">
        <path d="M55 8 L55 102 M8 55 L102 55 M21 21 L89 89 M89 21 L21 89" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        <path d="M55 8 L62 20 L55 32 L48 20 Z M55 78 L62 90 L55 102 L48 90 Z M8 55 L20 62 L32 55 L20 48 Z M78 55 L90 62 L102 55 L90 48 Z" fill="#7dd3fc" opacity=".9" />
        <circle cx="55" cy="55" r="8" fill="#e0f2fe" />
      </svg>
      <svg className="ba-unit" viewBox="0 0 130 90" fill="none">
        <rect x="10" y="8" width="110" height="40" rx="10" fill="#0e7490" />
        <rect x="10" y="8" width="110" height="40" rx="10" stroke="#67e8f9" strokeWidth="2" />
        <line x1="30" y1="18" x2="100" y2="18" stroke="#a5f3fc" strokeWidth="2" opacity=".7" />
        <line x1="30" y1="28" x2="85" y2="28" stroke="#a5f3fc" strokeWidth="2" opacity=".5" />
        <line x1="30" y1="38" x2="70" y2="38" stroke="#a5f3fc" strokeWidth="2" opacity=".3" />
        <rect x="20" y="48" width="12" height="30" rx="3" fill="#0c4a6e" />
        <rect x="98" y="48" width="12" height="30" rx="3" fill="#0c4a6e" />
      </svg>
      <div className="ba-card"><div className="bl">❄ 24/7 Support</div><div className="bp">Same-day service available</div></div>
      <span className="ba-tag">blossom-ac-services</span>
    </div>
  );
}
