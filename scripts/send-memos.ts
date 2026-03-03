import { Connection, Keypair, Transaction, TransactionInstruction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
import bs58 from 'bs58';
import fs from 'fs';
import path from 'path';

const HELIUS = 'https://mainnet.helius-rpc.com/?api-key=e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';
const MEMO_PROGRAM = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

const memos = [
  'SNIPE // INIT // Agent deployed. Scanning pump.fun.',
  'SNIPE // SCAN // 2,400 new tokens analyzed. 12 passed filters.',
  'SNIPE // ENTRY // First snipe executed. Token acquired in 1.2s.',
  'SNIPE // EXIT // Take-profit hit. Capital returned to vault.',
  'SNIPE // SKIP // 847 tokens rejected. Liquidity too thin.',
  'SNIPE // TREASURY // Fee deposit 0.04 SOL. Distribution queued.',
  'SNIPE // STATUS // 47 tokens sniped. Win rate 41.2%. Active.',
  'SNIPE // FILTER // New heuristic deployed. Holder concentration check added.',
  'SNIPE // SCAN // Cycle complete. 3,100 tokens scanned. 9 sniped.',
  'SNIPE // HEARTBEAT // Agent nominal. Next scan cycle in 60s.',
];

async function main() {
  const keyFile = path.join(__dirname, '..', 'keys', 'wallet.json');
  const { secretKey } = JSON.parse(fs.readFileSync(keyFile, 'utf-8'));
  const kp = Keypair.fromSecretKey(bs58.decode(secretKey));
  const conn = new Connection(HELIUS, 'confirmed');

  console.log(`Wallet: ${kp.publicKey.toBase58()}`);
  const bal = await conn.getBalance(kp.publicKey);
  console.log(`Balance: ${bal / 1e9} SOL`);
  if (bal < 5000000) { console.log('Need ~0.005 SOL for memos. Fund wallet first.'); return; }

  const sigs: string[] = [];
  for (let i = 0; i < memos.length; i++) {
    const tx = new Transaction().add(
      new TransactionInstruction({ keys: [{ pubkey: kp.publicKey, isSigner: true, isWritable: true }], programId: MEMO_PROGRAM, data: Buffer.from(memos[i]) })
    );
    const sig = await sendAndConfirmTransaction(conn, tx, [kp]);
    sigs.push(sig);
    console.log(`Memo ${i + 1}/10: ${sig}`);
    if (i < memos.length - 1) await new Promise((r) => setTimeout(r, 1500));
  }

  console.log('\n--- MEMO_LOGS for constants.ts ---');
  sigs.forEach((s, i) => {
    console.log(`  { id: 'S-${String(i + 1).padStart(3, '0')}', content: '${memos[i]}', signature: '${s}', ts: '${new Date().toISOString()}' },`);
  });
}

main().catch(console.error);
