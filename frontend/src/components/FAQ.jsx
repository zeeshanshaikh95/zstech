import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function FAQ({ faq, contact }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section--soft" aria-label="Frequently asked questions">
      <div className="wrap faq-layout">
        <Reveal className="faq-aside">
          <span className="kicker">Questions</span>
          <h2 className="sec-title">
            Good to<br />
            <span className="serif">know.</span>
          </h2>
          <p>
            Still unsure about something? Send a message — we usually reply
            the same day.
          </p>
          <a href={`https://wa.me/${(contact?.phoneRaw ?? '+919869706422').replace(/\D/g, '')}`}
            className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            Ask on WhatsApp
          </a>
        </Reveal>

        <Reveal className="faq-list">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {item.q}
                  <span className="faq-ic" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
