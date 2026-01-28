// # Date: 28/01/2026

// Reverse Bits
// Easy
// Company Tags
// Hints
// Given a 32-bit unsigned integer n, reverse the bits of the binary representation of n and return the result.

// Example 1:

// Input: n = 00000000000000000000000000010101

// Output:    2818572288 (10101000000000000000000000000000)
// Explanation: Reversing 00000000000000000000000000010101, which represents the unsigned integer 21, gives us 10101000000000000000000000000000 which represents the unsigned integer 2818572288.


var reverseBits = function(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1; // unsigned right shift
    }

    return result >>> 0; // ensure unsigned 32-bit result
};
