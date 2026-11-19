import { useCallback, useState } from 'react';
import Reveal from './Reveal.jsx';
import ProjectArt, { projectTheme } from './ProjectArt.jsx';
import ProjectModal from './ProjectModal.jsx';

function WorkCard({ project, onOpen, delay }) {
  const theme = projectTheme(project.id);

  return (
    <Reveal delay={delay}>
      <article className="card work-card">
        <div
          className="work-media"
          style={{ background: `radial-gradient(120% 100% at 50% 0%, ${theme.glow}, transparent 72%)` }}
        >
          <ProjectArt project={project} />
        </div>
        <div className="work-body">
          <div className="work-meta">
            <span className="cat">{project.tag}</span>
            <span className="wm-right">
              {project.url ? <span className="live"><i />Live</span> : null}
              <span>{project.year}</span>
            </span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span className="textlink">
            View case study <span className="arr" aria-hidden="true">→</span>
          </span>
        </div>
        <button
          type="button"
          className="work-open"
          aria-label={`View ${project.name} case study`}
          onClick={() => onOpen(project)}
        />
      </article>
    </Reveal>
  );
}

export default function Work({ projects, contact }) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="work" className="section section--soft">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <span className="kicker">Selected work</span>
            <h2 className="sec-title">
              Real projects,<br />
              <span className="serif">real results.</span>
            </h2>
          </div>
          <p className="sec-sub">
            Four recent builds for local businesses. Open any card for the
            full case study.
          </p>
        </Reveal>

        <div className="work-grid">
          {projects.map((project, i) => (
            <WorkCard
              key={project.id}
              project={project}
              onOpen={setActive}
              delay={i * 70}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={close} contact={contact} />
    </section>
  );
}
