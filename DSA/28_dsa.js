// # Date:11/02/2026

// Pacific Atlantic Water Flow
// Medium
// Topics
// Company Tags
// Hints
// You are given a rectangular island heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The islands borders the Pacific Ocean from the top and left sides, and borders the Atlantic Ocean from the bottom and right sides.

// Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with height equal or lower. Water can also flow into the ocean from cells adjacent to the ocean.

// Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans. Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell. You may return the answer in any order.

// Example 1:



// Input: heights = [
//   [4,2,7,3,4],
//   [7,4,6,4,7],
//   [6,3,5,3,6]
// ]

// Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]

var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    function dfs(r, c, visited) {
        visited[r][c] = true;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr < 0 || nr >= m || nc < 0 || nc >= n ||
                visited[nr][nc] ||
                heights[nr][nc] < heights[r][c]
            ) continue;

            dfs(nr, nc, visited);
        }
    }

    // Pacific: top row and left column
    for (let c = 0; c < n; c++) dfs(0, c, pacific);
    for (let r = 0; r < m; r++) dfs(r, 0, pacific);

    // Atlantic: bottom row and right column
    for (let c = 0; c < n; c++) dfs(m - 1, c, atlantic);
    for (let r = 0; r < m; r++) dfs(r, n - 1, atlantic);

    const result = [];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};



  
