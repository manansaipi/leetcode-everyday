// URL : https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = 0;

    // Combine the arrays
    const combinedArray = nums1.concat(nums2);
    
    // Sort the combined array
    combinedArray.sort((a, b) => a - b);
    
    // Check if the combined array has odd or even length
    if (combinedArray.length % 2 != 0) {
         // If odd length, median is the middle element
         result = combinedArray[Math.floor(combinedArray.length / 2)];
    } else {
        // If even length, median is the average of the two middle elements
        let firstValue = combinedArray[combinedArray.length / 2 - 1];
        let secondValue = combinedArray[combinedArray.length / 2];
        result = (firstValue + secondValue) / 2;
    }
    
    return result;
};
console.log(findMedianSortedArrays([1,3], [2,4]));