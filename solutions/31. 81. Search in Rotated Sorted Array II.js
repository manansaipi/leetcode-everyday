// UR; : https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // Initialize a counter to count occurrences of the target element.
    let counter = 0;

    // Loop through the array to check each element.
    for (let index = 0; index < nums.length; index++) {
        // If the current element matches the target, increment the counter.
        if (nums[index] == target) {
            counter++;
        }
    }
    
    // Return true if the counter is greater than 0 (target element found), otherwise false.
    return (counter > 0);
};
console.log(search([2,5,6,0,0,1,2], 0));

// many solutions are used binary search for this problem
