// # Date:27/01/2026

// Missing Number
// Easy
// Company Tags
// Hints
// Given an array nums containing n integers in the range [0, n] without any duplicates, return the single number in the range that is missing from nums.

// Follow-up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Example 1:

// Input: nums = [1,2,3]

// Output: 0
// Explanation: Since there are 3 numbers, the range is [0,3]. The missing number is 0 since it does not appear in nums.

function missingNumber(nums) {
    let xor = 0;
    const n = nums.length;

    // XOR numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    // XOR all elements in nums
    for (const num of nums) {
        xor ^= num;
    }

    return xor;
}

