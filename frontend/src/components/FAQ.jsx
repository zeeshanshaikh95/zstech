import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', paddingTop: '90px' }}>
      <div className="wrap">
        <div className="sec-head reveal up" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <span className="sec-kicker">Questions</span>
            <h2 className="sec-title">FAQs, <span className="gr">ANSWERED.</span></h2>
          </div>
        </div>

        <div className="faq">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} anim="up" delay={i * 60}>
                <div className={`faq-item ${open ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenIndex(open ? null : i)}>
                    {item.q} <span className="fi">+</span>
                  </button>
                  <div className="faq-a" style={open ? { maxHeight: '240px' } : undefined}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
