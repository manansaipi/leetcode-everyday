// URL : https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Initialize an empty array to store the result
    let result = [];

    // Loop through each element of nums1
    for (let i = 0; i < nums1.length; i++) {
        const element1 = nums1[i];
        
        // Loop through each element of nums2
        for (let y = 0; y < nums2.length; y++) {
            const element2 = nums2[y];
            
            // If elements are equal and not already in result, add to result
            if (element1 === element2) {
                if (!result.includes(element1)) {
                    result.push(element1);
                }
                // Break inner loop to avoid duplicate entries
                break;
            }
        }
    }
    
    // Return the resulting array
    return result;
};
console.log(intersection([1,2,2,1], [2,2]));