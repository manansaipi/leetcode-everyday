// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/?envType=daily-question&envId=2025-05-27
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let num1 = 0;
    let num2 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m >= 1) num1 += i;
    }
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) num2 += i;
    }
    return num1-num2;
};
function differenceOfSums(n, m){
    let num1 = 0, num2 = 0;
    for(let i = 1; i <= n; i++){
        if(i % m === 0) num1 += i;
        else num2 += i;
    }
    return num2 - num1;
}
console.log(differenceOfSums(5, 6));
// Ouput : -6

console.log(differenceOfSums(10, 3));
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
