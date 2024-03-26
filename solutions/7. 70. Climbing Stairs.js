// URL = https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n === 1) return 1;
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

console.log(climbStairs(3));