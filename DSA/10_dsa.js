// # Date:24/01/2026

// Container With Most Water
// Medium
// Company Tags
// Hints
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        // Move the pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
