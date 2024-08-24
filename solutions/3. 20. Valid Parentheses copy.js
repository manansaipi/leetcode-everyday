// URL : https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
//use stackkk
var isValidUsingStack = function (s) {
	var stack = []
	// define all brackets matches
	var match = {
		")" : "(",
		"]" : "[",
		"}" : "{"
	}

	// loop through the array
	for (let index = 0; index < s.length; index++) {
		// if it the first '([{' brackets then push it to array(stackarray)
		if (s[index] == "(" || s[index] == "[" || s[index] == "{") {
			stack.push(s[index])
		
		// if it the second ')]}' brackets then check if it match with the item in the last index of array(stackarray)
		} else {
			// if it match with the item in the last index of array(stackarray) then remove it from array(stackarray)
			if ( stack[stack.length - 1] == match[s[index]]  ) {
				stack.pop()
			} else {
				// return false if it did not match means that not valid
				return false
			}
		}
	}
	// is going to be valid if all the element are successfully removed from the array(stackarray)
	return stack.length === 0;
	
};

console.log(isValidUsingStack("()[]{}"));
console.log(isValidUsingStack("({[]})"));
console.log(isValidUsingStack("(]"));
