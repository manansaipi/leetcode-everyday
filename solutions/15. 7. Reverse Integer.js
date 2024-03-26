// URL : https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let resArr = [];
	// Convert the number to a string
	let numStr = x.toString();

	// Reverse the string
	let splitStr = numStr.split("");

	// Handle negative numbers
	if (splitStr[0] == "-") {
		resArr.push("-");
		splitStr.shift(); // Remove the negative sign
	}

	let reversedStr = splitStr.reverse();
	let combinedArray = resArr.concat(reversedStr);
	let reversedNum = parseFloat(combinedArray.join(""));

	// Check if the reversed number is within the 32-bit signed integer range
	if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
		return 0; // Return 0 if the reversed number overflows
	}

	return reversedNum;
};
console.log(reverse(-456));
