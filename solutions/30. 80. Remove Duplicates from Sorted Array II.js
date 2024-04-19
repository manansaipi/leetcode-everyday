// URL : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let counter = 1; // Counter to track the occurrences of each unique element

    // Iterate through the array
    for (let index = 0; index < nums.length; index++) {
        
        // Check if the current element is the same as the next element
        if (nums[index] === nums[index + 1]) {
            counter++; // Increment counter for each repeated element

            // If the counter exceeds 2, remove the element from the array
            if (counter > 2) {
                nums.splice(index, 1); // Remove the current element
                index--; // Adjust index to recheck the current position after removal
            }
        } else {
            counter = 1; // Reset counter for a new unique element
        }     

    }

    return nums; // Return the array with duplicates removed
};
console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([1,1,1,1,1, 1]));