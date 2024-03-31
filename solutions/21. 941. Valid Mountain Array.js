// URL : https://leetcode.com/problems/valid-mountain-array/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // Counter to track the number of decreasing sequences found
    let counter = 0;

    // If the array has less than 3 elements, it cannot form a valid mountain
    if (arr.length < 3) return false;

    // Loop through the array to check for mountain pattern
    for (let i = 0; i < arr.length; i++) {
        // If the first element is greater than the second element, it's not a valid mountain
        if (arr[0] > arr[1]) return false;

        // If two consecutive elements are equal, it's not a valid mountain
        if (arr[i] === arr[i + 1]) return false;

        // If the current element is greater than the next element, 
        // it might mark the start of the decreasing sequence
        if (arr[i] > arr[i + 1]) {
            // Loop through the rest of the array to ensure it's strictly decreasing
            for (let y = i; y < arr.length; y++) {
                // If any element in the decreasing sequence is not strictly decreasing, 
                // it's not a valid mountain
                if (arr[y] <= arr[y + 1]) {
                    return false;
                }
            }
            // Increment the counter as a decreasing sequence is found
            counter++;
        }
    }
    // If at least one decreasing sequence is found, return true
    return counter !== 0;
};

console.log(validMountainArray([0,3,2,1]));