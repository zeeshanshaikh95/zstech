const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m20 6-11 11-5-5" />
  </svg>
);

const Arrow = () => (
  <span className="arr" aria-hidden="true">→</span>
);

const CODE = [
  <div key="1"><span className="t-c">{'// zstech.config.ts'}</span></div>,
  <div key="2"><span className="t-k">export const</span> project <span className="t-p">=</span> {'{'}</div>,
  <div key="3">{'  '}client<span className="t-p">:</span> <span className="t-s">"your-brand"</span><span className="t-p">,</span></div>,
  <div key="4">{'  '}stack<span className="t-p">:</span> [<span className="t-s">"react"</span><span className="t-p">,</span> <span className="t-s">"vite"</span><span className="t-p">,</span> <span className="t-s">"css"</span>]<span className="t-p">,</span></div>,
  <div key="5">{'  '}goals<span className="t-p">:</span> [<span className="t-s">"fast"</span><span className="t-p">,</span> <span className="t-s">"beautiful"</span><span className="t-p">,</span> <span className="t-s">"seo"</span>]<span className="t-p">,</span></div>,
  <div key="6">{'}'}<span className="t-p">;</span></div>,
  <div key="7">&nbsp;</div>,
  <div key="8"><span className="t-k">export async function</span> <span className="t-f">launch</span><span className="t-p">()</span> {'{'}</div>,
  <div key="9">{'  '}<span className="t-k">await</span> <span className="t-f">design</span><span className="t-p">(</span>project<span className="t-p">);</span>{'      '}<span className="t-c">// no templates</span></div>,
  <div key="10">{'  '}<span className="t-k">await</span> <span className="t-f">build</span><span className="t-p">({'{'}</span> quality<span className="t-p">:</span> <span className="t-n">100</span> <span className="t-p">{'}'});</span></div>,
  <div key="11">{'  '}<span className="t-k">return</span> <span className="t-s">"websites that work"</span><span className="t-p">;</span></div>,
  <div key="12">{'}'}</div>,
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="dot" aria-hidden="true" />
            Available for new projects
          </span>

          <h1 className="hero-title">
            Websites that<br />
            <span className="serif">actually work.</span>
          </h1>

          <p className="hero-sub">
            We design and build fast, custom websites for small businesses — and
            run the social media that keeps them growing. No templates, no bloat.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a project <Arrow />
            </a>
            <a href="#work" className="btn btn-ghost">
              See our work
            </a>
          </div>

          <ul className="hero-points">
            <li><Check /> No templates</li>
            <li><Check /> 2–4 week delivery</li>
            <li><Check /> Support after launch</li>
          </ul>
        </div>

        <div className="code" role="img" aria-label="Code sample showing a ZS Tech project configuration">
          <div className="code-glow" aria-hidden="true" />
          <div className="code-bar">
            <span className="code-dot" aria-hidden="true" />
            <span className="code-dot" aria-hidden="true" />
            <span className="code-dot" aria-hidden="true" />
            <span className="code-file">zstech.config.ts</span>
            <span className="code-branch">main</span>
          </div>
          <div className="code-body" aria-hidden="true">
            <div className="code-lines">
              {CODE.map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="code-src">{CODE}</div>
          </div>
          <div className="code-foot">
            <span className="ok" aria-hidden="true" />
            <b>Build passed</b>
            <span className="sep" aria-hidden="true" />
            <span>1.2s</span>
            <span className="sep" aria-hidden="true" />
            <span>Lighthouse 100</span>
          </div>
        </div>
      </div>
    </section>
  );
}
