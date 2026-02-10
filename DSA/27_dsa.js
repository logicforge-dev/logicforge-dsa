// # Date:10/02/2026

// Course Schedule
// Medium
// Topics
// Company Tags
// Hints
// You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.

// The pair [0, 1], indicates that must take course 1 before taking course 0.

// There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.

// Return true if it is possible to finish all courses, otherwise return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[0,1]]

// Output: true
// Explanation: First take course 1 (no prerequisites) and then take course 0.

var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
    }

    const state = new Array(numCourses).fill(0); // 0=unvisited,1=visiting,2=done

    function dfs(course) {
        if (state[course] === 1) return false; // cycle
        if (state[course] === 2) return true;  // already processed

        state
