import { PROJECT, MEMO_LOGS, COUNCIL } from '@/lib/constants';

export default function CorePage() {
  return (
    <div style={{ maxWidth: '820px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title" style={{ fontSize: '1.4rem' }}>Core</h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>On-chain infrastructure and governance.</p>
      </div>

      {/* Addresses */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="gold-glow" />
        <div className="section-title" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Addresses</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { label: 'Wallet', value: PROJECT.wallet || 'Generating...' },
            { label: 'Treasury', value: PROJECT.treasury || 'Generating...' },
            { label: 'Multisig', value: PROJECT.multisig || 'Generating...' },
          ].map((a) => (
            <div key={a.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="stat-label">{a.label}</span>
              <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                {a.value.length > 20 ? `${a.value.slice(0, 8)}...${a.value.slice(-6)}` : a.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Council */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="gold-glow" />
        <div className="section-title" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Council (2/3 Multisig)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {COUNCIL.map((c) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>{c.name}</span>
              <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                {c.address ? `${c.address.slice(0, 8)}...${c.address.slice(-4)}` : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Memos */}
      <div className="card">
        <div className="gold-glow" />
        <div className="section-title" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Memo Log</div>
        {MEMO_LOGS.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Memos will appear here after deployment.</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {MEMO_LOGS.map((m) => (
              <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ flex: 1 }}>
                  <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 600 }}>{m.id}</span>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>{m.content}</p>
                </div>
                {m.signature && (
                  <a href={`https://solscan.io/tx/${m.signature}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.6rem', color: 'var(--gold)', flexShrink: 0, marginLeft: '1rem' }}>tx</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
