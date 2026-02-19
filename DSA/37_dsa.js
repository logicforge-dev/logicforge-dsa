// # Date:20/02/2026

// Meeting Rooms
// Easy
// Topics
// Company Tags
// Hints
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Note: (0,8),(8,10) is not considered a conflict at 8

// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false
// Explanation:

// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict

var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true;

    // sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        const prevEnd = intervals[i - 1][1];
        const currStart = intervals[i][0];

        // conflict
        if (currStart < prevEnd) {
            return false;
        }
    }

    return true;
};

