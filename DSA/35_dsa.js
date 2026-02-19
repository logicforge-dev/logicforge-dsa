// # Date:19/02/2026
// Merge Intervals
// Medium
// Topics
// Company Tags
// Hints
// Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// You may return the answer in any order.

// Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.

// Example 1:

// Input: intervals = [[1,3],[1,5],[6,7]]

// Output: [[1,5],[6,7]]

var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // 1. Sort by start
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const last = result[result.length - 1];

        // 2. Overlap
        if (start <= last[1]) {
            last[1] = Math.max(last[1], end);
        } else {
            result.push([start, end]);
        }
    }

    return result;
};
