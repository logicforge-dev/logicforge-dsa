// # Date:06/02/2026

// Decode Ways
// Medium
// Topics
// Company Tags
// Hints
// A string consisting of uppercase english characters can be encoded to a number using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode a message, digits must be grouped and then mapped back into letters using the reverse of the mapping above. There may be multiple ways to decode a message. For example, "1012" can be mapped into:

// "JAB" with the grouping (10 1 2)
// "JL" with the grouping (10 12)
// The grouping (1 01 2) is invalid because 01 cannot be mapped into a letter since it contains a leading zero.

// Given a string s containing only digits, return the number of ways to decode it. You can assume that the answer fits in a 32-bit integer.

// Example 1:

// Input: s = "12"

// Output: 2

// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).


  var numDecodings = function(s) {
    if (s.length === 0 || s[0] === '0') return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;   // empty string
    dp[1] = 1;   // first char is guaranteed not '0' here

    for (let i = 2; i <= n; i++) {

        // one digit
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }

        // two digits
        const two = parseInt(s.substring(i - 2, i));
        if (two >= 10 && two <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};
