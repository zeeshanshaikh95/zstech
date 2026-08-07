import Reveal from './Reveal.jsx';

export default function Process({ steps }) {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <div className="sec-head reveal up">
          <div>
            <span className="sec-kicker">How it works</span>
            <h2 className="sec-title">FROM IDEA TO<br /><span className="gr">LAUNCH IN 4 STEPS.</span></h2>
          </div>
          <p className="sec-sub">
            A transparent process — you always know what's happening, what's next, and when it ships.
          </p>
        </div>

        <div className="proc">
          {steps.map((step, i) => (
            <Reveal key={step.num} anim="up" delay={i * 100}>
              <div className="proc-step">
                <div className="proc-num"><em>{step.num}</em></div>
                <span className="ps-kick">{step.kick}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
