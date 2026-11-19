export default function Stats({ stats }) {
  return (
    <section id="stats" className="section--soft" aria-label="By the numbers">
      <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="reveal" key={stat.label}>
              <div className="stat">
                <span className="sn">{stat.value}{stat.suffix}</span>
                <span className="sl">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
