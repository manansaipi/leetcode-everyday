// URL : https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// do not know what is wrong with this solution :(
var merge = function (nums1, m, nums2, n) {
	nums1 = nums1.slice(0, m);
	nums2 = nums2.slice(0, n);
	nums1 = nums1.concat(nums2);
	//return nums1.sort();
};

//accepted soutions
var merge = function (nums1, m, nums2, n) {
	let y = 0;
	for (x = m; x < nums1.length; x++) {
		nums1[x] = nums2[y];
		y++;
	}
	nums1.sort((a, b) => a - b);
	//return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
