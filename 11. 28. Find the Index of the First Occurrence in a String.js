// URL : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// Split the haystack and needle strings into arrays of characters
	let arrayStr = haystack.split("");
	let arrayStr2 = needle.split("");

	// Iterate through each character in the haystack string
	for (let i = 0; i < arrayStr.length; i++) {
		const element = arrayStr[i];
		const result = [];

		// If the current character matches the first character of the needle
		if (element == arrayStr2[0]) {
			// Iterate through the characters in the haystack starting from the current index
			for (let x = i; x < needle.length + i; x++) {
				const checkString = haystack[x];
				// Add each character to the result array
				result.push(checkString);

				// If the result array matches the needle string, return the index where the match started
				if (result.join("") == needle) {
					return i;
				}
			}
		}
	}

	// If the substring is not found, return -1
	return -1;
};
console.log(strStr("sadbutsad", "sad"));
