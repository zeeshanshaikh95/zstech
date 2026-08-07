import Reveal from './Reveal.jsx';
import { useTilt } from '../hooks/useTilt.js';
import { useToast } from '../context/ToastContext.jsx';

const ICONS = {
  code: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  devices: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  growth: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" />
    </svg>
  ),
};

function ServiceCard({ svc, phoneHref, onCall }) {
  const tilt = useTilt();
  return (
    <div className="svc tilt" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      <span className="svc-num">{svc.num}</span>
      <div className="svc-ico">{ICONS[svc.icon] ?? ICONS.code}</div>
      <h3>{svc.title}</h3>
      <p>{svc.description}</p>
      <div className="svc-tags">{svc.tags.map((tag) => <i key={tag}>{tag}</i>)}</div>
      <a href={phoneHref} className="svc-arrow" onClick={onCall}>
        START A PROJECT <span className="ar">→</span>
      </a>
    </div>
  );
}

export default function Services({ services, contact }) {
  const toast = useToast();
  const phoneHref = `tel:${contact?.phoneRaw ?? '+919869706422'}`;
  const onCall = () => toast('📞 Calling +91 98697 06442…');

  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="sec-head reveal up">
          <div>
            <span className="sec-kicker">What we do</span>
            <h2 className="sec-title">SERVICES BUILT TO<br /><span className="gr">GROW YOUR BRAND.</span></h2>
          </div>
          <p className="sec-sub">
            Every project is crafted from scratch — no templates, no shortcuts. Just custom design and code engineered around your goals.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((svc, i) => (
            <Reveal key={svc.id} anim="up" delay={i * 100}>
              <ServiceCard svc={svc} phoneHref={phoneHref} onCall={onCall} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
