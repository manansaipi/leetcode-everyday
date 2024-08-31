// URL :https://leetcode.com/problems/length-of-last-word/submissions/1210668632/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	// if only 1 letter
	if (s.length==1 && s[0] != " ") return 1
	
	// define variable
	var startFindingSpace = false;
	var counter = 0

	// loop through the element start from behind
	for (let index = s.length-1; index >= 0; index--) {
		const element = s[index];

		// if element is a letter then make startFindingSpace to true and start counting the length 
		if (element != " ")  {
			startFindingSpace= true
			counter++
		}

		// if find a space and startFinding already true then return the counter
		if (startFindingSpace && element == " ") {
			return counter
		}
		
	}
	// return the counter as default
	return counter
};
//console.log(lengthOfLastWord("Hello World   "));
console.log(lengthOfLastWord("a "));
