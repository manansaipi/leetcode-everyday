// URL : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let counter = 0;  // Counter to track if there is a decreasing sequence
    let result;       // Variable to store the minimum element
    
    // Loop through the array to find the minimum element
    for (let index = 0; index < nums.length; index++) {
        // If the current element is greater than the next element
        if (nums[index] > nums[index+1]) {  
            // Update the result to the next element
            result = nums[index+1];         
            // Increment the counter to indicate a decreasing sequence
            counter++;                      
        }
    }
    
    // If there was a decreasing sequence, return the result, otherwise return the first element
    return counter > 0 ? result : nums[0];
};

console.log(findMin([3,4,5,1,2]));

// many solutions are used binary search for this problem
