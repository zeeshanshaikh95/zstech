import { useEffect, useRef } from 'react';
import ProjectArt from './ProjectArt.jsx';

export default function ProjectModal({ project, onClose, phoneHref }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('lock');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('lock');
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal open" role="dialog" aria-modal="true" aria-label="Project case study">
      <div className="modal-bg" onClick={onClose} />
      <div className="modal-box">
        <button className="modal-close" ref={closeRef} aria-label="Close" onClick={onClose}>✕</button>
        <div className="modal-hero">
          <ProjectArt art={project.art} />
          <span className="mh-tag">{project.tag} · {project.tagline}</span>
        </div>
        <div className="modal-body">
          <h3>{project.name}</h3>
          <p className="mb-sub">{project.summary}</p>

          <div className="mb-sec">
            <h4>What we built</h4>
            <div className="mb-feats">
              {project.features.map((f) => (
                <div className="mb-feat" key={f.title}>
                  <span className="mf-i">{f.icon}</span>
                  <div><b>{f.title}</b><span>{f.detail}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-sec">
            <h4>Outcomes</h4>
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
            <a href={phoneHref} className="btn btn-primary" onClick={onClose}>BUILD MINE LIKE THIS</a>
            <button className="btn btn-ghost" onClick={onClose}>CLOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
