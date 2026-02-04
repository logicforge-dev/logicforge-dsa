// # Date:04/02/2026

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
// Explanation:
// 2 + 2 + 5 = 9. We use 2 twice, and 5 once.
// 9 = 9. We use 9 once.


var combinationSum = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i, path, sum + nums[i]); // i (not i+1) because reuse allowed
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
};
