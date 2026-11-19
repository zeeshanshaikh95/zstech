import Reveal from './Reveal.jsx';

export default function Testimonials({ testimonials }) {
  return (
    <section className="section" aria-label="Client testimonials">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <span className="kicker">Client love</span>
            <h2 className="sec-title">
              Trusted by real<br />
              <span className="serif">businesses.</span>
            </h2>
          </div>
          <p className="sec-sub">
            Local businesses, real results. Here is what it is like to work
            with us.
          </p>
        </Reveal>

        <div className="tst-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="tst">
                <blockquote>
                  <p>{t.text}</p>
                </blockquote>
                <figcaption className="tst-who">
                  <span className="tw-av" style={{ background: t.gradient }} aria-hidden="true">
                    {t.initials}
                  </span>
                  <span>
                    <span className="tw-name">{t.name}</span>
                    <span className="tw-role" style={{ display: 'block' }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
