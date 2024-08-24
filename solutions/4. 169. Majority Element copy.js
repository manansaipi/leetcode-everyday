// URL : https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

	// define variable to count all element in the arrau
	var counter = {}
	// set maxCount to 0 and increment as if the element in the array apear multiple time 
	var maxCount = 0
	// set the majority as 0 first
	var majority = 0

	// loop through the element inside the array
	for(var num of nums){
		// check if the element is inside the counter
		if (num in counter) {
			// if element already inside the counter then increment it by 1.
			counter[num]++
		} else {
			// if the element is not yet in the counter, then set the new with 1.
			counter[num] = 1
		}
		// check if the count of element is more than maxCount
		if (counter[num] > maxCount) {
			// if element more than max count, then set max count to the count of the element 
			maxCount = counter[num]
			// and also update the majority of the element with the current num
			majority = num
		}
	}
	// return the majority
	return majority
};

console.log(majorityElement([6, 2, 2]));
console.log(majorityElement([3,2,3]));
console.log(majorityElement([6,5,5]));
