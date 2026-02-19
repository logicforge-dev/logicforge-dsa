// # Date:19/02/2026

// Non-overlapping Intervals
// Medium
// Topics
// Company Tags
// Hints
// Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note: Intervals are non-overlapping even if they have a common point. For example, [1, 3] and [2, 4] are overlapping, but [1, 2] and [2, 3] are non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,4],[1,4]]

// Output: 1
// Explanation: After [1,4] is removed, the rest of the intervals are non-overlapping.


var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        // overlapping
        if (start < lastEnd) {
            count++;   // remove this interval
        } else {
            lastEnd = end;
        }
    }

    return count;
};
