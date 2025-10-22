import React from 'react';
import LiveChart from './components/LiveChart';
import WalletConnect from './components/WalletConnect';
import TokenStats from './components/TokenStats';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/logo.png" alt="PerpTropica Logo" width="150"/>
        <h1>PerpTropica 🌴</h1>
        <p>Simulate perpetual trades and earn $TROPIC</p>
      </header>

      <main>
        <WalletConnect />
        <LiveChart />
        <TokenStats />
      </main>

      <footer>
        <p>© 2025 PerpTropica. Coming soon: staking, leaderboard, and more!</p>
      </footer>
    </div>
  );
}

export default App;