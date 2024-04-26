// URL : https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let container = 0; // Variable to hold the sum of even integers divisible by 3
    let counter = 0;   // Variable to count the number of even integers divisible by 3
    
    // Loop through the array
    for (let index = 0; index < nums.length; index++) {
        const current = nums[index]; // Get the current number
        
        // Check if the current number is even and divisible by 3
        if (current % 3 === 0 && current % 2 === 0) {
            container += current; // Add the current number to the sum
            counter++;           // Increment the counter
        }
    }
    
    // Check if there are any numbers satisfying the condition
    // If yes, return the average value; if not, return 0
    return counter > 0 ? Math.floor(container / counter) : 0;
};
console.log(averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51]));