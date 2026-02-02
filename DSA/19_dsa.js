// # Date:02/02/2026

// Word Break
// Medium
// Company Tags
// Hints
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.

// You are allowed to reuse words in the dictionary an unlimited number of times. You may assume all dictionary words are unique.

// Example 1:

// Input: s = "neetcode", wordDict = ["neet","code"]

// Output: true
// Explanation: Return true because "neetcode" can be split into "neet" and "code".

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const wordSet = new Set(wordDict);

    const dp = new Array(n + 1).fill(false);
    dp[0] = true;   // empty string is always breakable

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }

