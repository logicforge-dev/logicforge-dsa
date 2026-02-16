// # Date:16/02/2026

// Number of Connected Components in an Undirected Graph
// Medium
// Topics
// Company Tags
// Hints
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [aᵢ, bᵢ] indicates that there is an edge between aᵢ and bᵢ in the graph.

// Return the number of connected components in the graph.

// Example 1:



// Input:
// n = 5, edges = [[0,1],[1,2],[3,4]]

// Output: 2


var countComponents = function(n, edges) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        for (const nei of graph[node]) {
            if (!visited[nei]) {
                dfs(nei);
            }
        }
    }

    let components = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }

    return components;
};
