// # Date:05/02/2026

// House Robber II
// Medium
// Company Tags
// Hints
// You are given an integer array nums where nums[i] represents the amount of money the ith house has. The houses are arranged in a circle, i.e. the first house and the last house are neighbors.

// You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.

// Return the maximum amount of money you can rob without alerting the police.

// Example 1:

// Input: nums = [3,4,3]

// Output: 4


var rob = function(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    function robLinear(arr) {
        let prev2 = 0; // dp[i-2]
        let prev1 = 0; // dp[i-1]

        for (let num of arr) {
            let curr = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }

    const case1 = robLinear(nums.slice(0, n - 1));
    const case2 = robLinear(nums.slice(1));

    return Math.max(case1, case2);
};

