// URL : https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let result = [];
	for (let i = 0; i < numRows; i++) {
		let array = [];
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				array.push(1);
			} else {
				array.push(result[i - 1][j - 1] + result[i - 1][j]);
			}
		}
		result.push(array);
	}
	return result;
};

console.log(generate(5));
