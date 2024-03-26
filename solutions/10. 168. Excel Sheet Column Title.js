// URL : https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	let result = "";

	while (columnNumber > 0) {
		// Adjust columnNumber since it starts from 1 instead of 0
		columnNumber--;

		// Get the remainder when divided by 26
		let remainder = columnNumber % 26;

		// Convert the remainder to corresponding character
		result = String.fromCharCode(65 + remainder) + result;

		// Update columnNumber for the next iteration
		columnNumber = Math.floor(columnNumber / 26);
	}

	return result;
};
console.log(convertToTitle(701));
