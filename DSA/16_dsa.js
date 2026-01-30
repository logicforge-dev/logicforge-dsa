// # Date:30/01/2026

// Coin Change
// Medium
// Company Tags
// Hints
// You are given an integer array coins representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer amount representing a target amount of money.

// Return the fewest number of coins that you need to make up the exact target amount. If it is impossible to make up the amount, return -1.

// You may assume that you have an unlimited number of each coin.

// Example 1:

// Input: coins = [1,5,10], amount = 12

// Output: 3
// Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};


