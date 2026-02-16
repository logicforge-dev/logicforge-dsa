// # Date:17/02/2026

// Insert Interval Medium Topics Company Tags Hints You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i] represents the start and the end time of the ith interval. intervals is initially sorted in ascending order by start_i. You are given another interval newInterval = [start, end]. Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i and also intervals still does not have any overlapping intervals. You may merge the overlapping intervals if needed. Return intervals after adding newInterval. Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping. Example 1: Input: intervals = [[1,3],[4,6]], newInterval = [2,5] Output: [[1,6]]

var insert = function(intervals, newInterval) {
    const res = [];
    let [start, end] = newInterval;
    let i = 0;

    // 1. intervals completely before newInterval
    while (i < intervals.length && intervals[i][1] < start) {
        res.push(intervals[i]);
        i++;
    }

    // 2. merge all overlapping intervals
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }

    res.push([start, end]);

    // 3. intervals completely after newInterval
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};

  
