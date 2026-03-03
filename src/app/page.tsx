export default function Home() {
  return (
    <div style={{ maxWidth: '820px' }}>
      {/* Hero */}
      <section style={{ marginBottom: '4rem' }}>
        <h1 className="font-serif" style={{ fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: '1rem' }}>
          We snipe.<br />
          <span style={{ color: 'var(--gold)' }}>You earn.</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: '520px' }}>
          AI agent that continuously scans every new token launch on pump.fun,
          analyzes them in milliseconds, and snipes the best ones. Profits are
          distributed to $SNIPE holders.
        </p>
      </section>

      <div className="gold-line" style={{ marginBottom: '3rem' }} />

      {/* How it works */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="section-title">How it works</div>
        <div className="section-sub">Three steps. Fully autonomous.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { step: '01', title: 'Scan', desc: 'Agent monitors every new pump.fun launch in real-time. Analyzes liquidity, holder distribution, volume, and social signals.' },
            { step: '02', title: 'Snipe', desc: 'When a token passes all filters, the agent buys within seconds. Fast entry. Calculated risk. No emotion.' },
            { step: '03', title: 'Earn', desc: 'Profits from successful trades are distributed to $SNIPE holders proportional to their weight.' },
          ].map((s) => (
            <div key={s.step} className="card card-gold">
              <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                {s.step}
              </span>
              <div className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {s.title}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" style={{ marginBottom: '3rem' }} />

      {/* Weight formula */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="section-title">Distribution</div>
        <div className="section-sub">The longer you hold, the more you earn.</div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div className="gold-glow" />
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.04em' }}>
              weight = % supply held &times; hours held
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center' }}>
          <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>Holder A</div>
            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
              1% supply &times; 2h
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Weight</div>
            <div className="stat-value">2</div>
          </div>

          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>vs</div>

          <div className="card card-gold" style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>Holder B</div>
            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
              1% supply &times; 48h
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Weight</div>
            <div className="stat-value" style={{ color: 'var(--gold)' }}>48</div>
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '1rem' }}>
          Same bag, but Holder B earns <strong style={{ color: 'var(--gold-dark)' }}>24&times;</strong> more.
        </p>
      </section>

      <div className="gold-line" style={{ marginBottom: '3rem' }} />

      {/* Flywheel */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="section-title">The Flywheel</div>
        <div className="section-sub">20% of all profits buy back $SNIPE.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {[
            { icon: '01', label: 'New tokens launch on pump.fun' },
            { icon: '02', label: 'Agent snipes the best ones' },
            { icon: '03', label: 'Profits generated' },
            { icon: '04', label: '$SNIPE bought back' },
          ].map((s) => (
            <div key={s.icon} className="card" style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
              <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>
                {s.icon}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '1rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            More volume → more profits → more $SNIPE bought → repeat
          </span>
        </div>
      </section>

      <div className="gold-line" style={{ marginBottom: '3rem' }} />

      {/* Distributions */}
      <section style={{ marginBottom: '3rem' }}>
        <div className="section-title">Recent Distributions</div>
        <div className="section-sub">Every payout, fully transparent and on-chain.</div>

        <div className="card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div className="gold-glow" />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            First distributions will appear here once trading begins.
            Every payout will be fully verifiable on-chain.
          </span>
        </div>
      </section>
    </div>
  );
}
