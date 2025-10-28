# 🌴 PerpTropica — The World’s First Fee-Free Perp DEX 🌴

> **Trade freely. Live tropically.**
>
> PerpTropica is the **first-ever decentralized exchange for meme coins and perpetual futures with *zero fees.***  
> All trading costs are fully covered by our native token, **$TROPIC**, which is airdropped weekly into user wallets — giving every trader up to **15 free trades** per week.

---

## 🏝️ What is PerpTropica?

PerpTropica is a next-generation **DeFi trading platform** that merges meme culture with serious perpetual futures trading — built for the degens who hate fees and love freedom.

Here’s what makes it revolutionary:

- 💸 **Zero trading fees** — ever.  
- 🪂 **$TROPIC airdrops** fund your trades weekly.  
- 🔁 **15 free trades per wallet, per week.**  
- ⚡ **Decentralized perpetuals** for meme coins and blue chips.  
- 🌐 **Non-custodial**, transparent, and built on smart contracts.

---

## 💰 How Zero Fees Work

PerpTropica replaces traditional DEX fees with an innovative **airdrop reimbursement system** powered by the `$TROPIC` token.

1. Each week, active traders receive **$TROPIC airdropped** into dedicated *fee wallets*.  
2. These wallets are **locked smart wallets** — only used to cover gas and platform fees.  
3. Each wallet gets **up to 15 free trades per week**.  
4. The `FeeReimburser` contract tracks and pays all network costs automatically.  
5. Any unused trade credits **reset weekly** or can roll forward (depending on governance).

You trade → $TROPIC pays the fees → You keep 100% of your gains.  
Welcome to **fee-free finance.**

---

## ⚙️ Platform Architecture

### **On-Chain Components**
- **`PerpEngine`** — Core perpetual futures logic (margin, funding, liquidation).  
- **`AirdropManager`** — Handles weekly airdrops & fee credit tracking.  
- **`FeeReimburser`** — Pays gas & fee reimbursements using $TROPIC.  
- **`TropicToken`** — Solana SPL token powering all ecosystem rewards & coverage.  
- **`Oracle`** — Secure price feed via Chainlink or TWAP.  

### **Off-Chain Components**
- **Relayer Service** — Executes fee-free meta transactions.  
- **Airdrop Scheduler** — Allocates and sends weekly $TROPIC rewards.  
- **Analytics API** — Tracks usage, airdrop stats, and weekly caps.

### **Frontend**
- Wallet connect (MetaMask, WalletConnect, Phantom).  
- Live charts, perpetual positions, and open interest tracking.  
- Weekly trade counter (“🌴 6/15 free trades remaining”).  
- Dashboard for upcoming airdrops and trade stats.

---

## 🧩 Smart Contract Flow

```text
User places trade → Relayer executes → FeeReimburser reimburses relayer in $TROPIC
                    ↳ AirdropManager tracks free trade usage
                    ↳ If wallet still has credits → Trade = FREE
```

Example airdrop logic (simplified):

```solidity
mapping(address => uint8) public tradesUsed;
uint8 public maxFreeTrades = 15;

function markTrade(address user) external onlyRelayer {
    require(tradesUsed[user] < maxFreeTrades, "No free trades left");
    tradesUsed[user]++;
}
```

---

## 🚀 Token Utility — $TROPIC

| Feature | Description |
|----------|--------------|
| **Symbol** | `$TROPIC` |
| **Type** | SPL Token Utility |
| **Use Case** | Pays trading fees, fuels relayer reimbursements, powers governance |
| **Distribution** | Weekly airdrops to eligible wallets |
| **Max Supply** | Fixed or dynamically governed |
| **Deflationary Mechanics** | Burn % of unclaimed airdrops to stabilize supply |

---

## 🗺️ Roadmap

| Phase | Milestone | Status |
|--------|------------|--------|
| **M0** | Research, tokenomics, and architecture spec | ✅ |
| **M1** | Core smart contracts (TropicToken, AirdropManager, PerpEngine) | ✅ |
| **M2** | Relayer + backend infra | ✅ |
| **M3** | Frontend MVP + testnet launch | 🔧 In progress |
| **M4** | Security audits + bug bounty | ⏳ Planned |
| **M5** | Mainnet launch + $TROPIC airdrop event | 🚀 Coming soon |

---

## 🧠 Tech Stack

**Smart Contracts:** Solidity, OpenZeppelin, Hardhat  
**Frontend:** React, TypeScript, Tailwind, Web3Modal  
**Backend:** Node.js, Express, PostgreSQL  
**CI/CD:** GitHub Actions  
**Oracles:** Chainlink / Pyth  
**Network Targets:** Solana (optional expansion), Ethereum, Base, Blast, or Arbitrum

---

## 🧪 Development Setup

### Requirements
- Node.js ≥ 20
- Hardhat or Foundry
- MetaMask test wallet

### Install
```bash
git clone https://github.com/PerpTropica/perptropica.git
cd perptropica
npm install
```

### Run tests
```bash
npx hardhat test
```

### Deploy (local)
```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

## 🔐 Security

- Smart contracts undergo multiple audits prior to mainnet release.  
- Strict relayer whitelisting and non-reentrancy enforced.  
- Bug bounty program pre-launch.  
- Admin controls secured by multisig and timelocks.

---

## 👥 Governance & DAO Vision

$TROPIC holders will govern:
- Weekly airdrop emission rates  
- Number of free trades per wallet  
- Fee coverage mechanics  
- Treasury allocations & burns  

Long-term vision: **PerpTropica DAO** managing emissions and partnerships fully on-chain.

---

## 🧭 Repo Structure

```
/ (root)
├─ contracts/          # Solidity contracts
│  ├─ TropicToken.sol
│  ├─ AirdropManager.sol
│  ├─ PerpEngine.sol
│  ├─ FeeReimburser.sol
├─ backend/            # Relayer + scheduler code
├─ frontend/           # React app
├─ scripts/            # Deploy scripts
├─ tests/              # Unit tests
├─ .github/workflows/  # CI/CD pipelines
└─ README.md
```

---

## 🤝 Contributing

We welcome open-source contributions!

1. Fork this repo  
2. Create a new branch (`feature/my-feature`)  
3. Commit your changes  
4. Submit a pull request  

Labels like `good first issue` and `help wanted` mark easy entry points.

---

## ⚠️ Disclaimer

PerpTropica is a decentralized experimental project.  
Use at your own risk. Smart contracts are provided **as-is** with no guarantees.  
Always trade responsibly and verify addresses before sending funds.

---

## 🌴 Join the Tropics

💬 **Twitter:** [@PerpTropica](https://x.com/perptropica?s=21)  
🌐 **Website:** [http://bit.ly/PerpTropica-io_Demo]  
🪂 **Token:** `$TROPIC`  
🧠 **Docs:** Coming soon 

> _“Trade freely, live tropically.”_  
> — The PerpTropica Team

