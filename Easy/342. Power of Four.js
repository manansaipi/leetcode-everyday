// https://leetcode.com/problems/power-of-four/?envType=daily-question&envId=2025-08-15
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // Powers of 4 must be positive
  if (n <= 0) return false;
  // Base case: 4^0 = 1
  if (n === 1) return true;
  // If not divisible by 4, it can't be a power of 4
  if (n % 4 !== 0) return false;
  // Recursive step
  return isPowerOfFour(n / 4);
};
