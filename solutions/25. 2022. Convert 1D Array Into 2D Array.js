// URL : https://leetcode.com/problems/convert-1d-array-into-2d-array/
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
	let result = []; // Initialize the resulting 2D array
	let counter = 0; // Initialize a counter to track the position in the original array

	// Check if the dimensions are compatible with the length of the original array
	if (m * n === original.length) {
		// Iterate over rows
		for (let i = 0; i < m; i++) {
			let current = []; // Initialize an array to hold elements for the current row
			// Iterate over columns
			for (let j = 0; j < n; j++) {
				// Push the current element from the original array into the current row
				current.push(original[counter]);
				counter++; // Move to the next element in the original array
			}
			// Push the current row into the resulting 2D array
			result.push(current);
		}
		// Return the constructed 2D array
		return result;
	} else {
		// Return an empty array if dimensions are not compatible with the length of the original array
		return [];
	}
};

console.log(construct2DArray([2], 1, 1));
