const THEMES = {
  gbp: {
    bg: '#3b1226',
    accent: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.18)',
    url: 'glowbyparveen.store',
    mark: 'GP',
    title: 'Natural beauty, handcrafted.',
    cta: 'Shop products',
  },
  hh: {
    bg: '#0c3322',
    accent: '#4ade80',
    glow: 'rgba(74, 222, 128, 0.16)',
    url: 'health-harvest.in',
    mark: 'HH',
    title: 'Eat well. Feel better.',
    cta: 'Book a consult',
  },
  ep: {
    bg: '#1b1436',
    accent: '#c084fc',
    glow: 'rgba(168, 85, 247, 0.18)',
    url: 'yourname.dev',
    mark: 'ZS',
    title: 'Your work, worth seeing.',
    cta: 'View profile',
  },
  ba: {
    bg: '#082a3f',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.18)',
    url: 'blossomac.in',
    mark: 'BA',
    title: 'Cool air, on demand.',
    cta: 'Book service',
  },
};

export function projectTheme(id) {
  return THEMES[id] ?? THEMES.ep;
}

export default function ProjectArt({ project }) {
  const theme = projectTheme(project.id);
  const tagline = project.tagline ?? project.tag ?? '';

  return (
    <div
      className="preview"
      style={{ '--pv-bg': theme.bg, '--pv-accent': theme.accent }}
      aria-hidden="true"
    >
      <div className="pv-bar">
        <i /><i /><i />
        <span className="pv-url">{theme.url}</span>
      </div>
      <div className="pv-body">
        <div className="pv-nav">
          <span className="pv-logo">{theme.mark}</span>
          <span className="pv-links"><i /><i /><i /></span>
          <span className="pv-cta">{theme.cta}</span>
        </div>
        <div className="pv-head">
          <span className="pv-kicker">{tagline}</span>
          <span className="pv-title">{theme.title}</span>
          <span className="pv-sub"><i /><i /></span>
          <span className="pv-btn">{theme.cta}</span>
        </div>
        <div className="pv-row"><i /><i /><i /></div>
      </div>
    </div>
  );
}
