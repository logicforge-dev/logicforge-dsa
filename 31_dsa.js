// # Date:14/02/2026

// Alien Dictionary
// Hard
// Topics
// Company Tags
// Hints
// There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.

// You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically based on the rules of this new language.

// Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return any of them.

// A string a is lexicographically smaller than a string b if either of the following is true:

// The first letter where they differ is smaller in a than in b.
// a is a prefix of b and a.length < b.length.
// Example 1:

// Input: ["z","o"]

// Output: "zo"
// Explanation:
// From "z" and "o", we know 'z' < 'o', so return "zo".


/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const graph = new Map();
    const indeg = new Map();

    // Initialize all characters
    for (const w of words) {
        for (const ch of w) {
            if (!graph.has(ch)) graph.set(ch, new Set());
            if (!indeg.has(ch)) indeg.set(ch, 0);
        }
    }

    // Build edges
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];

        // Invalid case: prefix
        if (w1.length > w2.length && w1.startsWith(w2)) {
            return "";
        }

        const len = Math.min(w1.length, w2.length);

        for (let j = 0; j < len; j++) {
            if (w1[j] !== w2[j]) {
                if (!graph.get(w1[j]).has(w2[j])) {
                    graph.get(w1[j]).add(w2[j]);
                    indeg.set(w2[j], indeg.get(w2[j]) + 1);
                }
                break; // only first different char matters
            }
        }
    }

    // Kahn's algorithm
    const queue = [];
    for (const [ch, d] of indeg.entries()) {
        if (d === 0) queue.push(ch);
    }

    let res = "";

    while (queue.length) {
        const cur = queue.shift();
        res += cur;

        for (const nei of graph.get(cur)) {
            indeg.set(nei, indeg.get(nei) - 1);
            if (indeg.get(nei) === 0) {
                queue.push(nei);
            }
        }
    }

    // If cycle exists
    return res.length === indeg.size ? res : "";
};


