import React from 'react';

function WalletConnect() {
  const connectWallet = () => {
    alert("Wallet connect coming soon!");
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Solana Wallet</button>
    </div>
  );
}

export default WalletConnect;