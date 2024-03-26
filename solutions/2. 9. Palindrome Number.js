// URL : https://leetcode.com/problems/palindrome-number/description/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	var firstValueArray = Array.from(x.toString());
	var resultValueArray = [];
	for (var counter = firstValueArray.length; counter > 0; counter--) {
		resultValueArray.push(firstValueArray[counter - 1]);
	}

	var resultValue = parseInt(resultValueArray.join(""));
	if (x == resultValue) {
		return true;
	}
	return false;
};

console.log(isPalindrome(-121));
