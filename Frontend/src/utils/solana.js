// solana.js
// Utility functions for interacting with the Solana blockchain
// Placeholder implementation – to be completed with real logic

import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// ------------------------
// CONFIG
// ------------------------
const NETWORK = 'devnet'; // change to 'mainnet-beta' when ready
const CONNECTION = new Connection(clusterApiUrl(NETWORK), 'confirmed');

export { CONNECTION, NETWORK };

// ------------------------
// WALLET PLACEHOLDERS
// ------------------------
export async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      console.log('Connected wallet:', resp.publicKey.toString());
      return resp.publicKey;
    } catch (err) {
      console.error('Wallet connection rejected', err);
    }
  } else {
    alert('Phantom wallet not found. Please install it!');
  }
}

// ------------------------
// GET BALANCE (PLACEHOLDER)
// ------------------------
export async function getBalance(publicKey) {
  try {
    const balance = await CONNECTION.getBalance(new PublicKey(publicKey));
    console.log(`Balance for ${publicKey}: ${balance / 1e9} SOL`);
    return balance / 1e9; // convert lamports to SOL
  } catch (err) {
    console.error('Failed to get balance:', err);
    return 0;
  }
}

// ------------------------
// SEND TRANSACTION PLACEHOLDER
// ------------------------
export async function sendTransaction(transaction, wallet) {
  // TODO: Implement transaction sending logic
  console.log('Transaction would be sent here:', transaction);
  alert('sendTransaction is not implemented yet!');
}

// ------------------------
// UTILITY FUNCTIONS
// ------------------------
export function formatAddress(address) {
  if (!address) return '';
  return address.slice(0, 4) + '...' + address.slice(-4);
}