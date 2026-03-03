import { STATS } from '@/lib/constants';
import LiveTrades from '@/components/LiveTrades';

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div className="gold-glow" />
      <div className="stat-label" style={{ marginBottom: '0.5rem' }}>{label}</div>
      <div className="stat-value" style={accent ? { color: 'var(--gold)' } : undefined}>{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title" style={{ fontSize: '1.4rem' }}>Dashboard</h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>Real-time agent performance and trade log.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Stat label="Total Trades" value={STATS.totalTrades.toString()} />
        <Stat label="Win Rate" value={`${STATS.winRate}%`} accent />
        <Stat label="Tokens Sniped" value={STATS.tokensSniped.toString()} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Stat label="Avg Entry" value={STATS.avgEntry} />
        <Stat label="Uptime" value={STATS.uptime} />
        <Stat label="Status" value="Active" accent />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <LiveTrades />
      </div>

      <div className="card">
        <div className="gold-glow" />
        <div className="section-title" style={{ fontSize: '0.85rem' }}>Agent</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '0.75rem' }}>
          <div>
            <div className="stat-label" style={{ marginBottom: '2px' }}>Identifier</div>
            <span className="mono" style={{ fontSize: '0.7rem' }}>SNIPE-01</span>
          </div>
          <div>
            <div className="stat-label" style={{ marginBottom: '2px' }}>Type</div>
            <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>Autonomous Sniper</span>
          </div>
          <div>
            <div className="stat-label" style={{ marginBottom: '2px' }}>Target</div>
            <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>pump.fun Launches</span>
          </div>
          <div>
            <div className="stat-label" style={{ marginBottom: '2px' }}>Strategy</div>
            <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>Early Entry, Fast Exit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
