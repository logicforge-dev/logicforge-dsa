// # Date:03/02/2025

// Combination Sum
// Medium
// Company Tags
// Hints
// You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.

// The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Example 1:

// Input:
// nums = [2,5,6,9]
// target = 9

// Output: [[2,2,5],[9]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
    const result = [];

    function backtrack(start, remain, path) {
        if (remain === 0) {
            result.push([...path]);
            return;
        }

        if (remain < 0) return;

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i, remain - nums[i], path); // i (not i+1) because reuse allowed
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};

