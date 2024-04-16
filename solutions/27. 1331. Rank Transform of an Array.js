// URL : https://leetcode.com/problems/rank-transform-of-an-array/description/
/**
 * @param {number[]} arr
 * @return {number[]}
 */

//Time Limit Exceeded
var arrayRankTransform = function (arr) {
	// Initialize variables
	let result = [];
	let array = [];
	let rank = 1;

	// Iterate through the input array
	for (let i = 0; i < arr.length; i++) {
		// Iterate through the input array again to compare each element with others
		for (let y = 0; y < arr.length; y++) {
			// Check if the current element is greater than others and not already included
			if (i != y && arr[i] > arr[y] && !array.includes(arr[y])) {
				rank++; // Increment rank if the condition is met
			}
			array.push(arr[y]); // Push the element to the temporary array
		}
		result.push(rank); // Push the rank of the current element to the result array
		rank = 1; // Reset rank for the next element
		array = []; // Clear the temporary array for the next iteration
	}

	return result; // Return the array of ranks
};

var arrayRankTransform = function (arr) {
	// Create a sorted copy of the input array
	let sortedArr = [...arr].sort((a, b) => a - b);

	// Create a map to store unique values and their ranks
	let rankMap = {};
	let rank = 1;

	// Assign ranks to unique values in the sorted array
	for (let num of sortedArr) {
		if (!(num in rankMap)) {
			rankMap[num] = rank++;
		}
	}

	// Map ranks to the original array
	return arr.map((num) => rankMap[num]);
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
