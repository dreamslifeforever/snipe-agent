'use client';

import { useEffect, useState, useCallback } from 'react';

interface Trade {
  type: 'BUY' | 'SELL';
  token: string;
  tokenMint: string;
  solAmount: number;
  timestamp: number;
  signature: string;
}

function timeAgo(ts: number): string {
  const diff = Math.floor((Date.now() / 1000 - ts) / 60);
  if (diff < 1) return 'just now';
  if (diff < 60) return `${diff}m ago`;
  const h = Math.floor(diff / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function LiveTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTrades = useCallback(async () => {
    try {
      const res = await fetch('/api/live-trades', { cache: 'no-store' });
      if (!res.ok) throw new Error('fail');
      const data = await res.json();
      if (data.trades?.length > 0) { setTrades(data.trades); setError(false); }
    } catch { setError(true); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    fetchTrades();
    const i = setInterval(fetchTrades, 30000);
    return () => clearInterval(i);
  }, [fetchTrades]);

  return (
    <div className="card">
      <div className="gold-glow" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green)' }} className="animate-pulse-gold" />
          <span className="section-title" style={{ fontSize: '0.85rem', marginBottom: 0 }}>Live Activity</span>
          {error && <span style={{ fontSize: '0.6rem', color: 'var(--red)' }}>retry...</span>}
        </div>
        <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>on-chain</span>
      </div>

      {loading && trades.length === 0 ? (
        <div style={{ padding: '2rem 0', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }} className="animate-pulse-gold">Scanning Solana...</span>
        </div>
      ) : trades.length === 0 ? (
        <div style={{ padding: '2rem 0', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>No recent trades</span>
        </div>
      ) : (
        <div>
          {trades.map((t) => {
            const isBuy = t.type === 'BUY';
            return (
              <div key={t.signature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.65rem 0', borderBottom: '1px solid var(--border-light)' }}>
                <span className="mono" style={{
                  fontSize: '0.6rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', flexShrink: 0,
                  border: `1px solid ${isBuy ? 'var(--green)' : 'var(--red)'}`,
                  color: isBuy ? 'var(--green)' : 'var(--red)',
                  background: isBuy ? 'rgba(45,138,78,0.06)' : 'rgba(192,57,43,0.06)',
                }}>{t.type}</span>

                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {isBuy ? 'bought' : 'sold'}{' '}
                  <strong style={{ color: 'var(--text)', fontWeight: 550 }}>{t.token}</strong>
                  {t.solAmount > 0 && <span> for <span className="mono" style={{ fontWeight: 550, color: 'var(--text)' }}>{t.solAmount.toFixed(4)} SOL</span></span>}
                </span>

                <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', flexShrink: 0 }}>{timeAgo(t.timestamp)}</span>

                <a href={`https://solscan.io/tx/${t.signature}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.6rem', color: 'var(--gold)', flexShrink: 0 }}>tx</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
