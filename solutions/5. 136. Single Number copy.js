// URL : https://leetcode.com/problems/single-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// define variable to count all element in the arrau
	var counter = {}
	// loop through the element inside the array
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];

		// check if the element is inside the counter
		if (element in counter) {
			// if element already inside the counter then increment it by 1.
			counter[element]++
		}else {
			// if the element is not yet in the counter, then set the new with 1.
			counter[element] = 1;
		}
	}
	// loop through the counter variable to find the number that only have 1 item. 
	for(var num in counter){
		// if only it onlyhave one item, then return it
		if (counter[num] == 1) {
			return num;
		}
	}
};

console.log(singleNumber([1, 2, 2, 3, 3, 3, 1, 1, 4]));
console.log(singleNumber([4, 1, 2, 1, 2]));

// other soulution that is faster
var singleNumber = function (nums) {

};
