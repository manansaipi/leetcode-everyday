// URL : https://leetcode.com/problems/chunk-array/
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    // Initialize an empty array to store individual chunks.
    let storage = [];
    // Initialize an empty array to store the final result.
    let result = [];
    
    // Iterate through the input array.
    for (let i = 0; i < arr.length; i++) {
        // Iterate through the current chunk.
        for (let j = i, k = 0; k < size && j < arr.length; j++, k++) {
            // Push each element of the current chunk to the storage array.
            storage.push(arr[j]);
            // Update the outer loop index to skip already processed elements.
            i = j;
        }
        // Push the current chunk (stored in the storage array) to the result array.
        result.push(storage);
        // Reset the storage array for the next chunk.
        storage = [];
    }
    
    // Return the final array containing all the chunks.
    return result;
};
console.log(chunk([1,2,3,4,5], 5));