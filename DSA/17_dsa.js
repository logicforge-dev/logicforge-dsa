// # Date:31/01/2026

// Longest Increasing Subsequence
// Medium
// Company Tags
// Hints
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the relative order of the remaining characters.

// For example, "cat" is a subsequence of "crabt".
// Example 1:

// Input: nums = [9,1,4,2,3,3,7]

// Output: 4
// Explanation: The longest increasing subsequence is [1,2,3,7], which has a length of 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const tails = [];

    for (let num of nums) {
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
};
