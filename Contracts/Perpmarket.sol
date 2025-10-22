// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title PerpTropica Market Simulator
 * @dev Placeholder for perpetual trading logic on Solana.
 */
contract PerpMarket {
    struct Position {
        address trader;
        uint256 size;
        bool isLong;
        uint256 entryPrice;
    }

    Position[] public positions;

    // TODO: Implement trade logic
    function openPosition(uint256 size, bool isLong) public {
        // Placeholder
        positions.push(Position(msg.sender, size, isLong, 100));
    }

    // TODO: Implement closePosition, pnl calculations, funding rates
}