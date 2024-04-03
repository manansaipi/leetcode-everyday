//URL : https://leetcode.com/problems/add-to-array-form-of-integer/description/
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

// error when handling large number
var addToArrayForm = function (num, k) {
	const concatenated = num.join("");
	const intValue = parseInt(concatenated);
	return (intValue + k).toString().split("");
};

var addToArrayForm = function (num, k) {
	// Iterate through the array from right to left
	for (let i = num.length - 1; i >= 0; i--) {
		// Add the current digit of num with k and store the sum
		let sum = num[i] + k;
		// Store the last digit of the sum in the current position of num
		num[i] = sum % 10;
		// Update k with the carry
		k = Math.floor(sum / 10);
	}

	// Handle remaining carry
	while (k > 0) {
		// Prepend the last digit of k to num
		num.unshift(k % 10);
		// Update k with the remaining carry
		k = Math.floor(k / 10);
	}

	// Return the updated num array
	return num;
};

var addToArrayForm = (nums, k) =>
	(BigInt(nums.join("")) + BigInt(k)).toString().split("");

console.log(addToArrayForm([9, 9, 9, 9], 1));

// ERROR WHEN ALL NUMS ARE 9
// var addToArrayForm = function (num, k) {
// 	let intArray = k.toString().split("");
// 	let numLength = num.length;
// 	for (let i = intArray.length - 1; i >= 0; i--) {
// 		num[numLength - 1] += parseInt(intArray[i]);
// 		if (num[numLength - 1] >= 10) {
// 			let numArray = num[numLength - 1].toString().split("");

// 			num[numLength - 1] = numArray[numArray.length - 1];
// 			if (i != 0) {
// 				intArray[i - 1] =
// 					parseInt(intArray[i - 1]) +
// 					parseInt(numArray[numArray.length - 2]);
// 			} else {
// 				num.unshift(1);
// 			}
// 		}
// 		numLength--;
// 	}
// 	return num;
// };
