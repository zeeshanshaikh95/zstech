import Reveal from './Reveal.jsx';

const ICONS = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  social: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="19" r="2.6" />
      <path d="m8.4 10.8 7.2-4.2M8.4 13.2l7.2 4.2" />
    </svg>
  ),
  devices: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="14" height="12" rx="2" />
      <path d="M6 20h6" />
      <path d="M9 16v4" />
      <rect x="17" y="9" width="5" height="11" rx="1.4" />
    </svg>
  ),
  growth: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="15 7 21 7 21 13" />
    </svg>
  ),
};

export default function Services({ services }) {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <span className="kicker">What we do</span>
            <h2 className="sec-title">
              Everything your brand<br />
              needs <span className="serif">online.</span>
            </h2>
          </div>
          <p className="sec-sub">
            Custom websites, social media management and the strategy that
            connects them — all built around your brand, never a template.
          </p>
        </Reveal>

        <div className="svc-grid">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 70}>
              <article className="card svc">
                <div className="svc-top">
                  <span className="svc-ico">{ICONS[svc.icon] ?? ICONS.code}</span>
                  <span className="svc-num">{svc.num}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-tags">
                  {svc.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href="#contact" className="textlink">
                  Start a project <span className="arr" aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
