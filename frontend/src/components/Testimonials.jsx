import Reveal from './Reveal.jsx';

function Card({ t }) {
  return (
    <div className="tst">
      <div className="qt">”</div>
      <p>{t.text}</p>
      <div className="tst-who">
        <div className="tw-av" style={{ background: t.gradient }}>{t.initials}</div>
        <div>
          <div className="tw-name">{t.name}</div>
          <div className="tw-role">{t.role}</div>
          <div className="tw-stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ testimonials }) {
  const first = testimonials.map((t) => <Card key={t.name} t={t} />);
  const second = testimonials.map((t) => <Card key={`${t.name}-copy`} t={t} />);
  return (
    <section className="section" style={{ paddingBottom: '60px' }}>
      <div className="wrap">
        <div className="sec-head reveal up">
          <div>
            <span className="sec-kicker">Client love</span>
            <h2 className="sec-title">TRUSTED BY<br /><span className="gr">REAL BUSINESSES.</span></h2>
          </div>
        </div>
      </div>
      <div className="tst-wrap" style={{ overflow: 'hidden' }}>
        <div className="tst-track">{first}{second}</div>
      </div>
    </section>
  );
}
