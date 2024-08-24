// URL : https://leetcode.com/problems/palindrome-number/description/
/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function (x) {
	// convert to array
	var arrayInt = Array.from(x.toString());
	
	// loop through the array and take the first and last value 
	for (let i = 0, j = arrayInt.length - 1; i < j; i++, j--) {
		// if it not match the nreturn false mean there are not palindrome
		if(arrayInt[i] !== arrayInt[j]){
			return false
		}
	}
	// if it success to check it is palindrome or not, then return true
	return true

};

// other approach
// var isPalindrome = function(x) {
//     const str = x.toString();
//     for(let i = 0; i < Math.floor(str.length /2); i++) {
//       const left = str[i];
//       const right = str[str.length -1 - i];
//       if(left !== right) {
//         return false;
//       }
//     }

//     return true;
// };


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
