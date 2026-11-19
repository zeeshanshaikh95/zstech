const CLIENTS = ['Glow by Parveen', 'Health Harvest', 'Blossom AC Services', 'Employee Portfolios'];

export default function Clients() {
  return (
    <section className="clients" aria-label="Selected clients">
      <div className="wrap clients-inner">
        <span className="clients-label">Trusted by</span>
        <ul className="clients-list">
          {CLIENTS.map((name) => <li key={name}>{name}</li>)}
        </ul>
        <span className="clients-note">15+ projects delivered</span>
      </div>
    </section>
  );
}
