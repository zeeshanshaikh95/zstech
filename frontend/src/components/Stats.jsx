import Reveal from './Reveal.jsx';
import { useCounter } from '../hooks/useCounter.js';

function StatItem({ stat, delay }) {
  const { ref, display } = useCounter(stat.value, stat.suffix);
  return (
    <Reveal anim="up" delay={delay}>
      <div className="stat">
        <span className="sn"><span ref={ref}>{display}</span></span>
        <div className="sl">{stat.label}</div>
      </div>
    </Reveal>
  );
}

export default function Stats({ stats }) {
  return (
    <section id="stats">
      <div className="wrap stats-grid">
        {stats.map((stat, i) => <StatItem key={stat.label} stat={stat} delay={i * 80} />)}
      </div>
    </section>
  );
}
