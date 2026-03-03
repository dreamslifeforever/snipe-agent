export const PROJECT = {
  name: 'SNIPE',
  tagline: 'We snipe. You earn.',
  description: 'AI agent that scans pump.fun, snipes the best tokens, and shares profits with holders.',
  wallet: 'B3BbCpoCgtRTGmneMoS2HXsw9SrpQzcD2ZjmqXgZ48ja',
  treasury: 'meF3nuZG2mHDRstya6aPKZ9gzyD1Eo6edtH6p9PcDc4',
  multisig: '3uTGVZxcVKCn6cFMW9vFykbnUQ1UwCt86noaBvyQhRnQ',
  twitter: 'https://x.com/snipeagentfun',
};

export const HELIUS = 'https://mainnet.helius-rpc.com/?api-key=e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';

export const AGENT_WALLET = '3pKxhk5F23zQz3Qc5F2Y8W7UeGRUwg5CqYyfqkwSK4xE';

export const STATS = {
  totalTrades: 351,
  winRate: 41.2,
  totalPnl: -1.526,
  tokensSniped: 47,
  uptime: '72h',
  avgEntry: '0.07 SOL',
};

export const MEMO_LOGS: { id: string; content: string; signature: string; ts: string }[] = [
  { id: 'S-001', content: 'SNIPE // INIT // Agent deployed. Scanning pump.fun.', signature: '2p3fMAbTLQPhaWdCjr7oWWDvXbZzu4w9cAKzFXWVpqwcW2iNQoR48NLeeQjjW6F1sXB76x7oRT46jwNmdYBJpoF2', ts: '2026-03-03T04:32:56Z' },
  { id: 'S-002', content: 'SNIPE // SCAN // 2,400 new tokens analyzed. 12 passed filters.', signature: '6cnsLeDHpdUoAEokjCB991kygiciTMEtiPyLQfSnpnRvM9Mt1BDPW3sfaYhY8AgdBhhSrzdB94hFhHK61kNwKLP', ts: '2026-03-03T04:33:00Z' },
  { id: 'S-003', content: 'SNIPE // ENTRY // First snipe executed. Token acquired in 1.2s.', signature: 'GcPvLuV49ruwjE8WNbSJ3uP5DCEdFtVP7Kz3ALJFagPNCtJgcBRgq29D5oRmm1j2HeUWo46AWNWQyrR7vW6C13p', ts: '2026-03-03T04:33:05Z' },
  { id: 'S-004', content: 'SNIPE // EXIT // Take-profit hit. Capital returned to vault.', signature: '4DVyYVDSaA7veFRrufXXTi3XufYK2zJDSDqKZFRSXFEPMjUtiFseX2QhqgTGy8GjLAcCYCTjVw4JdwkM1vRFsheT', ts: '2026-03-03T04:33:10Z' },
  { id: 'S-005', content: 'SNIPE // SKIP // 847 tokens rejected. Liquidity too thin.', signature: '48utjVXJ5An35fCwTTwcSvt2JkL7eyJUGNAtB5T7xzTRqJGsFTe7WxEuf6aePJ8uLTuTxpewCtEZ8j8eAsk9Xpnj', ts: '2026-03-03T04:33:15Z' },
  { id: 'S-006', content: 'SNIPE // TREASURY // Fee deposit 0.04 SOL. Distribution queued.', signature: '4cp4f2rBeNpm3mxSc7Z6LiVceC9TRGHmiUHtBijU8PVBh6BTqu6g8kRj5rYTzMaVD2dR7SgJXtk73aFMJ94EzCsJ', ts: '2026-03-03T04:33:20Z' },
  { id: 'S-007', content: 'SNIPE // STATUS // 47 tokens sniped. Win rate 41.2%. Active.', signature: '4xB5CgrG3m31hMd5NaoYwH1mbPPZ1WNFbHh6GdtYXnp95bwDh51dhRdFMST6WrLvyatS8WtBiQ6FeBBscx3rPeuF', ts: '2026-03-03T04:33:25Z' },
  { id: 'S-008', content: 'SNIPE // FILTER // New heuristic deployed. Holder concentration check added.', signature: '5C33zmjSn5Ryx5ofuo1X5gbCdbJRsaUGSq2snXyQzuHXw42Gk8shf9CCsuoRyVZtJSX2eWna3w4fmRRM1QXZg6yA', ts: '2026-03-03T04:33:30Z' },
  { id: 'S-009', content: 'SNIPE // SCAN // Cycle complete. 3,100 tokens scanned. 9 sniped.', signature: '6w2YQNHXJgcgkQc8g7iswMJPdSJcm6DfhK6A1ye8SB7TVEGSSgGxAgTxmc8Gyxdf99psuwahkMTyVqX8v7CkMBC', ts: '2026-03-03T04:33:35Z' },
  { id: 'S-010', content: 'SNIPE // HEARTBEAT // Agent nominal. Next scan cycle in 60s.', signature: '3HxMVTqbrrsmDPWbaNtKwUW1RpM39uc6y7X4owfUWWyoxtdZi9gGCztq5qMupnQ1Ft4gpeMruEqVBdvKrtvFrAkX', ts: '2026-03-03T04:33:40Z' },
];

export const COUNCIL = [
  { name: 'Vault-A', address: '6siCYGoGqurDBzdPCxp4rdUZvVDZx3q2kEVYemRQrE6z' },
  { name: 'Vault-B', address: '32pgLtqBg2dS3RQbrmUgJ4ts9neCxW2d51kdsc123i63' },
  { name: 'Vault-C', address: '7LXfz7g3H7Jrg1BdyV5jwm6dotbyPCxVFNUdTUfkpVC7' },
];
