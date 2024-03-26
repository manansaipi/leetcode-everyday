// URL :https://leetcode.com/problems/length-of-last-word/submissions/1210668632/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	// Split the input string by space to create an array of words
	let strArr = s.split(" ");

	// Get the index of the last non-empty word
	let lastIndex = strArr.length - 1;
	let lastWord = strArr[lastIndex];
	while (lastWord == "") {
		lastIndex--;
		lastWord = strArr[lastIndex];
	}

	// Calculate and return the length of the last non-empty word
	return lastWord.length;
};
console.log(lengthOfLastWord("Hello World   "));
