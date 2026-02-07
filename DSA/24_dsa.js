// # Date:07/02/2026

// Unique Paths
// Medium
// Topics
// Company Tags
// Hints
// There is an m x n grid where you are allowed to move either down or to the right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that can be taken from the top-left corner of the grid (grid[0][0]) to the bottom-right corner (grid[m - 1][n - 1]).

// You may assume the output will fit in a 32-bit integer.

// Example 1:

// Input: m = 3, n = 6

// Output: 21

var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // first row
    for (let j = 0; j < n; j++) dp[0][j] = 1;
    
    // first column
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};
