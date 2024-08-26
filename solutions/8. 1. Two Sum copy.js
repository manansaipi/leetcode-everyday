// URL : https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// just brute forcing checking the item one by one. (not the best solution)
var twoSum = function (nums, target) {
	var result = []

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];

		for (let y = i + 1; y < nums.length; y++) {
			const secondElement = nums[y];

			if (element + secondElement == target) {
				result.push(i)
				result.push(y)

				return result
			}
			
		}


	}
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
