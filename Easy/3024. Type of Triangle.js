// https://leetcode.com/problems/type-of-triangle/?envType=daily-question&envId=2025-05-28
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a,b,c] = nums;

    if(a+b <= c || a+c <=b || b+c<= a) return 'none';
    if(a === b && a === c) return 'equilateral';
    if(a === b || a === c || b === c) return 'isosceles'

    return 'scalene'
};
console.log(triangleType([8,4,4]));
// Output: "none"

console.log(triangleType([3, 3, 3]));
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

console.log(triangleType([3, 4, 5]));
// Output: "scalene"
// Explanation:
// nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
// nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
// nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3.
// Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
// As all the sides are of different lengths, it will form a scalene triangle.
