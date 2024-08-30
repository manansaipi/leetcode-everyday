// URL : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// loop through the haystack string index to check if the element matched with first letter of needle  
	for (let index = 0; index < haystack.length; index++) {
		const element = haystack[index];

		// check if the element matches with first letter of needle  
		if (needle[0] == element) {
			// Check if the needle matches a portion of the haystack
			// starting from the given index and end with length of needle
			if (needle ==  haystack.split('').slice(index, index + needle.length).join('')) {
			//if (needle === haystack.slice(index, index + needle.length)) {
			// return current inddex if it matches
				return index;
			}
		}
	}
	// return -1 if did not find any matches value
	return -1
	
};
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("hello", "ll"));
