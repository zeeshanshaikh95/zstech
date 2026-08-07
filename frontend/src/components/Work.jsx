import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ProjectArt from './ProjectArt.jsx';
import ProjectModal from './ProjectModal.jsx';
import { useTilt } from '../hooks/useTilt.js';

function WorkCard({ project, onOpen }) {
  const tilt = useTilt(9);
  return (
    <Reveal anim="up" delay={project.delay ?? 0}>
      <article
        className="work-card tilt"
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        tabIndex="0"
        role="button"
        aria-label={`Open ${project.name} case study`}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen(project);
          }
        }}
      >
        <div className="wc-media">
          <ProjectArt art={project.art} />
          <div className="wc-overlay">
            <span className="wco-tag">Case Study</span>
            <span className="wco-arrow">→</span>
          </div>
        </div>
        <div className="wc-body">
          <div className="wc-top">
            <span className="wc-cat">{project.tag}</span>
            <span className="wc-year">{project.year}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="wc-links">
            <a href="#work" onClick={(e) => { e.preventDefault(); onOpen(project); }}>CASE STUDY →</a>
            <a className="dis">LIVE SOON</a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work({ projects, contact }) {
  const [active, setActive] = useState(null);
  const phoneHref = `tel:${contact?.phoneRaw ?? '+919869706422'}`;

  return (
    <section id="work" className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-head reveal up">
          <div>
            <span className="sec-kicker">Selected work</span>
            <h2 className="sec-title">PROJECTS THAT<br /><span className="gr">DELIVER REAL LEADS.</span></h2>
          </div>
          <p className="sec-sub">Real client work, shipped for real businesses. Tap a card for the full case study.</p>
        </div>

        <div className="work-grid">
          {projects.map((project, i) => (
            <WorkCard key={project.id} project={{ ...project, delay: i * 120 }} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} phoneHref={phoneHref} />
    </section>
  );
}
