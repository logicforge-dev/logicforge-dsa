// #Date:25/01/2026

// Number of One Bits
// Easy
// Company Tags
// Hints
// You are given an unsigned integer n. Return the number of 1 bits in its binary representation.

// You may assume n is a non-negative integer which fits within 32-bits.

// Example 1:

// Input: n = 00000000000000000000000000010111

// Output: 4

var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1); // remove the lowest set bit
        count++;
    }

    return count;
};
