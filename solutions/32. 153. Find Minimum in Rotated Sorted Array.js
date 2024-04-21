// URL : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let counter = 0  ;
    let result;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > nums[index+1]) {
            result = nums[index+1]
            counter ++
        }
        
    }
    
    return counter > 0 ? result : nums[0]
};

console.log(findMin([3,4,5,1,2]));

// many solutions are used binary search for this problem
