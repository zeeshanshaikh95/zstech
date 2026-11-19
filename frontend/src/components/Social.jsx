import Reveal from './Reveal.jsx';

const TILES = [
  { label: 'Reel', className: 't1' },
  { label: '', className: 't2' },
  { label: '', className: 't3' },
  { label: 'Carousel', className: 't4' },
  { label: '', className: 't5' },
  { label: '', className: 't6' },
  { label: 'Story', className: 't7' },
  { label: '', className: 't8' },
  { label: '', className: 't9' },
];

export default function Social({ social }) {
  const items = social?.items ?? [];
  const plan = social?.plan ?? [];

  return (
    <section id="social" className="section">
      <div className="wrap social-grid">
        <div className="social-copy">
          <span className="kicker">Social media</span>
          <h2 className="sec-title">
            Your socials,<br />
            <span className="serif">handled.</span>
          </h2>
          <p className="sec-sub">
            A website gets people to your door. Social keeps you in their feed.
            We plan, create and post the whole thing — so your brand shows up
            every week without you touching it.
          </p>

          <div className="social-list">
            {items.map((item) => (
              <div className="social-item" key={item.num}>
                <span className="n">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary social-cta">
            Get a social plan <span className="arr" aria-hidden="true">→</span>
          </a>
        </div>

        <Reveal className="social-visual">
          <div className="phone" aria-hidden="true">
            <div className="phone-screen">
              <div className="phone-head">
                <span className="phone-av">YB</span>
                <span>
                  <span className="phone-name">@yourbrand</span>
                  <span className="phone-sub">Managed by ZS Tech</span>
                </span>
                <span className="phone-more">•••</span>
              </div>

              <div className="phone-stats">
                <span><b>128</b> posts</span>
                <span><b>4.2k</b> followers</span>
                <span><b>7</b> highlights</span>
              </div>

              <div className="phone-grid">
                {TILES.map((tile) => (
                  <span key={tile.className} className={`tile ${tile.className}`}>
                    {tile.label ? <em>{tile.label}</em> : null}
                  </span>
                ))}
              </div>

              <div className="phone-foot">
                <span className="dot" />
                Next post · Today 6:30 pm
              </div>
            </div>
          </div>

          <div className="plan-card" aria-hidden="true">
            <span className="plan-title">Sample month</span>
            {plan.map((row) => (
              <span className="plan-row" key={row.label}>
                <span>{row.label}</span>
                <b>{row.value}</b>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
