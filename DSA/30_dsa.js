// # Date:13/02/2026
// Longest Consecutive Sequence
// Medium
// Topics
// Company Tags
// Hints
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // only start if this is the beginning of a sequence
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};
