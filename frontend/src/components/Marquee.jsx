function Row({ items, className = '' }) {
  const first = items.map((item, i) => (
    <div className="mq-item" key={`${item}-${i}`}>
      <span className={item === 'WEBSITES' ? 'gr' : ''}>{item}</span>
      <span className="star">✦</span>
    </div>
  ));
  const second = items.map((item, i) => (
    <div className="mq-item" key={`${item}-copy-${i}`}>
      <span className={item === 'WEBSITES' ? 'gr' : ''}>{item}</span>
      <span className="star">✦</span>
    </div>
  ));
  return (
    <div className={`marquee ${className}`}>
      <div className="mq-track">{first}{second}</div>
    </div>
  );
}

export default function Marquee({ items, altItems }) {
  return (
    <>
      <Row items={items} />
      <Row items={altItems} className="alt" />
    </>
  );
}
