import { NextResponse } from 'next/server';
import { AGENT_WALLET } from '@/lib/constants';

const HELIUS_KEY = 'e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';
const HELIUS_RPC = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_KEY}`;
const HELIUS_API = `https://api.helius.xyz/v0`;
const SOL_MINT = 'So11111111111111111111111111111111111111112';

interface TokenTransfer {
  fromUserAccount: string;
  toUserAccount: string;
  tokenAmount: number;
  mint: string;
}

interface HeliusTx {
  signature: string;
  timestamp: number;
  type: string;
  source: string;
  tokenTransfers: TokenTransfer[];
}

export interface LiveTrade {
  type: 'BUY' | 'SELL';
  token: string;
  tokenMint: string;
  solAmount: number;
  timestamp: number;
  signature: string;
}

const tokenNameCache: Record<string, string> = {};

async function resolveTokenNames(mints: string[]): Promise<void> {
  const unknown = mints.filter((m) => !tokenNameCache[m]);
  if (unknown.length === 0) return;
  try {
    const res = await fetch(HELIUS_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'getAssetBatch', params: { ids: unknown } }),
    });
    const data = await res.json();
    for (const asset of data.result || []) {
      const meta = asset?.content?.metadata;
      tokenNameCache[asset.id] = meta?.symbol || meta?.name || asset?.id?.slice(0, 6);
    }
  } catch {
    for (const m of unknown) tokenNameCache[m] = m.slice(0, 6);
  }
}

function parseTrade(tx: HeliusTx): LiveTrade | null {
  const transfers = tx.tokenTransfers || [];
  if (transfers.length === 0) return null;
  let gotSol = 0, sentSol = 0, tokenMint = '';
  for (const t of transfers) {
    if (t.mint === SOL_MINT) {
      if (t.toUserAccount === AGENT_WALLET) gotSol += t.tokenAmount;
      if (t.fromUserAccount === AGENT_WALLET) sentSol += t.tokenAmount;
    } else if (!tokenMint) tokenMint = t.mint;
  }
  if (!tokenMint) return null;
  const isBuy = sentSol > gotSol;
  return {
    type: isBuy ? 'BUY' : 'SELL',
    token: tokenNameCache[tokenMint] || tokenMint.slice(0, 6),
    tokenMint,
    solAmount: Math.round((isBuy ? sentSol : gotSol) * 10000) / 10000,
    timestamp: tx.timestamp,
    signature: tx.signature,
  };
}

export async function GET() {
  try {
    const res = await fetch(`${HELIUS_API}/addresses/${AGENT_WALLET}/transactions?api-key=${HELIUS_KEY}&limit=15&type=SWAP`);
    if (!res.ok) throw new Error('Helius error');
    const txs: HeliusTx[] = await res.json();
    const allMints = new Set<string>();
    for (const tx of txs) for (const t of tx.tokenTransfers || []) if (t.mint !== SOL_MINT) allMints.add(t.mint);
    await resolveTokenNames([...allMints]);
    const trades: LiveTrade[] = [];
    for (const tx of txs) { const tr = parseTrade(tx); if (tr) trades.push(tr); }
    trades.sort((a, b) => b.timestamp - a.timestamp);
    return NextResponse.json({ trades: trades.slice(0, 10), total: trades.length });
  } catch (err) {
    return NextResponse.json({ trades: [], total: 0, error: String(err) }, { status: 500 });
  }
}
