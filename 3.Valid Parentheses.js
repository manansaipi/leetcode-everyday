// URL : https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let countOpenParentheses = 0;
	let countOpenBrackets = 0;
	let countOpenCurlyBraces = 0;

	for (let char of s) {
		if (char === "(") {
			countOpenParentheses++;
		} else if (char === "[") {
			countOpenBrackets++;
		} else if (char === "{") {
			countOpenCurlyBraces++;
		} else if (char === ")") {
			if (countOpenParentheses === 0) {
				return false;
			}
			countOpenParentheses--;
		} else if (char === "]") {
			if (countOpenBrackets === 0) {
				return false;
			}
			countOpenBrackets--;
		} else if (char === "}") {
			if (countOpenCurlyBraces === 0) {
				return false;
			}
			countOpenCurlyBraces--;
		}
	}

	return (
		countOpenParentheses === 0 &&
		countOpenBrackets === 0 &&
		countOpenCurlyBraces === 0
	);
};
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
