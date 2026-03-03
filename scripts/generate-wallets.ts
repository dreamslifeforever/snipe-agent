import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import fs from 'fs';
import path from 'path';

const wallets = ['wallet', 'treasury', 'council-a', 'council-b', 'council-c'];

for (const name of wallets) {
  const kp = Keypair.generate();
  const pub = kp.publicKey.toBase58();
  const priv = bs58.encode(kp.secretKey);
  const file = path.join(__dirname, '..', 'keys', `${name}.json`);
  fs.writeFileSync(file, JSON.stringify({ publicKey: pub, secretKey: priv }, null, 2));
  console.log(`${name}: ${pub}`);
}
