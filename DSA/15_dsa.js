// # Date: 29/01/2026
// Climbing Stairs
// Easy
// Company Tags
// Hints
// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

// Return the number of distinct ways to climb to the top of the staircase.

// Example 1:

// Input: n = 2

// Output: 2

var climbStairs = function(n) {
    if (n <= 2) return n;

    let prev1 = 1; // ways to reach step 1
    let prev2 = 2; // ways to reach step 2

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
};
