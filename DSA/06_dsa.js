// #Date:20/02/2026

// Maximum Product Subarray
// Medium
// Company Tags
// Hints
// Given an integer array nums, find a subarray that has the largest product within the array and return it.

// A subarray is a contiguous non-empty sequence of elements within an array.

// You can assume the output will fit into a 32-bit integer.

// Example 1:

// Input: nums = [1,2,-3,4]

// Output: 4


var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // If current number is negative, swap max and min
        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(curr, maxProd * curr);
        minProd = Math.min(curr, minProd * curr);

        result = Math.max(result, maxProd);
    }

    return result;
};
