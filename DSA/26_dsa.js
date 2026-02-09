// # Date:09/02/2026

// Clone Graph
// Medium
// Topics
// Company Tags
// Hints
// Given a node in a connected undirected graph, return a deep copy of the graph.

// Each node in the graph contains an integer value and a list of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
// The graph is shown in the test cases as an adjacency list. An adjacency list is a mapping of nodes to lists, used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// For simplicity, nodes values are numbered from 1 to n, where n is the total number of nodes in the graph. The index of each node within the adjacency list is the same as the node's value (1-indexed).

// The input node will always be the first node in the graph and have 1 as the value.

// Example 1:



// Input: adjList = [[2],[1,3],[2]]

// Output: [[2],[1,3],[2]]
// Explanation: There are 3 nodes in the graph.
// Node 1: val = 1 and neighbors = [2].
// Node 2: val = 2 and neighbors = [1, 3].
// Node 3: val = 3 and neighbors = [2].


var cloneGraph = function(node) {
    if (node === null) return null;

    const map = new Map();   // original node -> cloned node
    const queue = [];

    // clone first node
    map.set(node, new Node(node.val));
    queue.push(node);

    while (queue.length > 0) {
        const cur = queue.shift();

        for (const nei of cur.neighbors) {

            // clone neighbor if not seen before
            if (!map.has(nei)) {
                map.set(nei, new Node(nei.val));
                queue.push(nei);
            }

            // connect cloned nodes
            map.get(cur).neighbors.push(map.get(nei));
        }
    }

    return map.get(node);
};


