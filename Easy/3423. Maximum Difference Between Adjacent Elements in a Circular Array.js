// https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/?envType=daily-question&envId=2025-06-12
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = 0;

    let checkIndex = nums.length-1
    for(let i = 0; i < nums.length; i++) {
        const checkMax = Math.abs(nums[i] - nums[checkIndex])
        console.log(nums[i], nums[checkIndex],  checkMax)

        if(checkMax > max) max = checkMax

        if(i==0) {
            checkIndex = 0
        } else {
            checkIndex++
        }
        
    }
    return max
};