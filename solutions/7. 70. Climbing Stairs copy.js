// URL = https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */

// Explanation : https://www.youtube.com/watch?v=Y0lT9Fck7qI&t=11m47s
function climbStairs(n) {
    var one = 1;
    var two = 1;

    for (let index = 0; index < n-1; index++) {
        var temp = one;
        one = one + two;
        two = temp
    }

    return one
}



console.log(climbStairs(9));
console.log(climbStairs(2));
console.log(climbStairs(1));
console.log(climbStairs(0));