// #Date:19/01/2026

// Maximum Subarray Medium Company Tags Hints Given an array of integers nums, find the subarray with the largest sum and return the sum.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [2,-3,4,-2,2,1,-1,4]

// Output: 8


var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Either take current number alone OR extend previous subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
