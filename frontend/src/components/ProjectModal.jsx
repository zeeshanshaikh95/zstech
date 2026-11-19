import { useEffect, useRef } from 'react';
import { projectTheme } from './ProjectArt.jsx';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export default function ProjectModal({ project, onClose, contact }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('lock');

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('lock');
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const theme = projectTheme(project.id);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <div className="modal-bg" onClick={onClose} />
      <div className="modal-box">
        <button ref={closeRef} type="button" className="modal-close" aria-label="Close case study" onClick={onClose}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div
          className="modal-banner"
          style={{
            background: `linear-gradient(155deg, ${theme.bg} 0%, #0b0b10 88%)`,
            '--pv-accent': theme.accent,
          }}
        >
          <span className="mb-kick">{project.tagline}</span>
          <span className="mb-name" id="case-title">{project.name}</span>
          <span className="mb-url">{theme.url}</span>
        </div>

        <div className="modal-body">
          <p className="mb-sub">{project.summary}</p>

          <div className="mb-sec">
            <h3>What we built</h3>
            <div className="mb-feats">
              {project.features.map((f) => (
                <div className="mb-feat" key={f.title}>
                  <span className="mf-i" aria-hidden="true"><CheckIcon /></span>
                  <div>
                    <b>{f.title}</b>
                    <span>{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-sec">
            <h3>Outcomes</h3>
            <div className="mb-out">
              {project.outcomes.map(([metric, label]) => (
                <div className="mo" key={label}>
                  <div className="mn">{metric}</div>
                  <div className="ml">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-cta">
            <a href="#contact" className="btn btn-primary" onClick={onClose}>
              Build mine like this
            </a>
            <a href={contact?.whatsapp ?? 'https://wa.me/919869706422'} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Ask a question
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
