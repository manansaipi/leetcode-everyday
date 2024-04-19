// URL : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Initialize an empty array to store the result.
    let result = [];
    // Initialize a counter to keep track of the occurrences of the target value.
    let counter = 0;
    
    // Iterate through the array to find the target value.
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the target value, update the result and counter.
        if (nums[i] == target) {
            // If there are more than one occurrence of the target, remove the previous occurrence from the result.
            if (counter > 1) {
                result.pop();
            }
            // Add the index of the current occurrence to the result.
            result.push(i);
            // Increment the counter.
            counter++;
        }
    }
    
    // If the target value was found at least once.
    if (counter > 0) {
        // If there are multiple occurrences, return the result.
        if (counter > 1) {
            return result;
        } 
        // If there is only one occurrence, add its index again to the result and return.
        else {
            result.push(result[0]);
            return result;
        }
    }
    // If the target value was not found, return [-1, -1].
    return [-1, -1];
};


console.log(searchRange([5,7,7,8,10], 8));