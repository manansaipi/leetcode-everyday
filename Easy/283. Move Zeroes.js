// https://leetcode.com/problems/move-zeroes/?envType=problem-list-v2&envId=array
// 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insretedPos = 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
           nums[insretedPos] = nums[i]
           insretedPos++ 
        }        
    } 

    for (let i = insretedPos; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));
