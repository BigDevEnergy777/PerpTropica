// token.test.js
// Placeholder tests for $TROPIC Token contract
// Uses Hardhat, Mocha, and Chai

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("$TROPIC Token Contract", function () {
  let Token;
  let token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get contract factory
    Token = await ethers.getContractFactory("TropicToken");

    // Get test accounts
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy contract
    token = await Token.deploy();
    await token.deployed();
  });

  it("Should assign total supply to the deployer", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    const totalSupply = await token.totalSupply();
    expect(ownerBalance).to.equal(totalSupply);
  });

  it("Should allow placeholder transfers (currently always true)", async function () {
    const transferAmount = 100;
    const result = await token.transfer(addr1.address, transferAmount);
    expect(result).to.equal(true); // placeholder behavior
  });

  it("Should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("$TROPIC");
    expect(await token.symbol()).to.equal("TROPIC");
  });

  it("Should have total supply of 1,000,000 tokens", async function () {
    expect(await token.totalSupply()).to.equal(1000000 * 10 ** 18);
  });

  // TODO: Add more realistic tests once transfer/mint/burn are implemented
});