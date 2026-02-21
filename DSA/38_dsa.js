// # Date:21/02/2026

// Meeting Rooms II
// Medium
// Topics
// Company Tags
// Hints
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of rooms required to schedule all meetings without any conflicts.

// Note: (0,8),(8,10) is NOT considered a conflict at 8.

// Example 1:

// Input: intervals = [(0,40),(5,10),(15,20)]

// Output: 2
// Explanation:
// day1: (0,40)
// day2: (5,10),(15,20)


class MinHeap {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    pop() {
        if (this.data.length === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return top;
    }

    bubbleUp(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.data[p] <= this.data[i]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }

    bubbleDown(i) {
        const n = this.data.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;

            if (l < n && this.data[l] < this.data[smallest]) smallest = l;
            if (r < n && this.data[r] < this.data[smallest]) smallest = r;

            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    const heap = new MinHeap();

    for (const [start, end] of intervals) {

        // reuse a room if possible
        if (heap.size() > 0 && heap.peek() <= start) {
            heap.pop();
        }

        // occupy a room
        heap.push(end);
    }

    return heap.size();
};
