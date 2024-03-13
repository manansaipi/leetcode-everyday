// URL : https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
//use stackkk
var isValidUsingStack = function (s) {
	const stack = [];
	const pairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let char of s) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		} else {
			if (stack.length === 0 || stack.pop() !== pairs[char]) {
				return false;
			}
		}
	}

	return stack.length === 0;
};
//use RegularExpression
var isValidUsingRegularExpression = function (s) {
	const regex = /(\(\)|\[\]|\{\})/;
	while (s.match(regex)) {
		s = s.replace(regex, "");
	}
	return s.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("({[]})"));
