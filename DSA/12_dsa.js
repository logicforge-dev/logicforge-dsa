// # Date:26/01/2026

// Counting Bits
// Easy
// Company Tags
// Hints
// Given an integer n, count the number of 1's in the binary representation of every number in the range [0, n].

// Return an array output where output[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 4

// Output: [0,1,1,2,1]

var countBits = function(n) {
    let bits = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }

    return bits;
};
