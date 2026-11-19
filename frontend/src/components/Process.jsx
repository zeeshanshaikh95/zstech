import Reveal from './Reveal.jsx';

export default function Process({ steps }) {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <span className="kicker">How it works</span>
            <h2 className="sec-title">
              From first call<br />
              to <span className="serif">live.</span>
            </h2>
          </div>
          <p className="sec-sub">
            A clear four-step process. You always know what is happening,
            what comes next, and when it ships.
          </p>
        </Reveal>

        <div className="proc-grid">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 70}>
              <div className="step">
                <span className="step-num">{step.num} — {step.kick}</span>
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
