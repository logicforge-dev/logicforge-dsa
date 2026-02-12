// # Date: 12/02/2026

// Number of Islands
// Medium
// Topics
// Company Tags
// Hints
// Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.

// An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

// Example 1:

// Input: grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(r, c) {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === "0"
        ) return;

        // mark as visited
        grid[r][c] = "0";

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
};

