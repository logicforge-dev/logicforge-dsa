// # Date:15/02/2026

// Graph Valid Tree
// Medium
// Topics
// Company Tags
// Hints
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// Example 1:

// Input:
// n = 5
// edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

// Output:
// true


var validTree = function(n, edges) {
    // A tree must have exactly n - 1 edges
    if (edges.length !== n - 1) return false;

    const parent = Array(n).fill(0).map((_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(a, b) {
        const pa = find(a);
        const pb = find(b);

        // cycle detected
        if (pa === pb) return false;

        parent[pa] = pb;
        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) return false;
    }

    return true;
};
