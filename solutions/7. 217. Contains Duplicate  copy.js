// URL : https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// bruteforce(not recomended)
var containsDuplicateBF = function(nums) {

    if (nums.length == 1) return false

    for (let i = 0; i < nums.length - 1; i++) {
        const first = nums[i];
        for (let y = i + 1; y < nums.length; y++) {
            const second = nums[y];
            if (first == second) {
                return true
            }
        }
    }
    return false
};
console.log(containsDuplicateBF([1]));
console.log(containsDuplicateBF([1, 1]));
console.log(containsDuplicateBF([1,2,3,1]));

//sorting
var containsDuplicateSort = function(nums) {
    
};

// use HashSet
var containsDuplicateHS = function(nums){
    
    var storage = new Set() // {}

    // loop through the elemet  in the array
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        // check if value already exist
        if (storage.has(element)) {
            // return true if it
            return true
        }
        // // add the value if not exist yet
        storage.add(element)
    }
    // return false if the array not contain duplcate
    return false
}

console.log(containsDuplicateHS([1]));
console.log(containsDuplicateHS([1, 1]));
console.log(containsDuplicateHS([1,2,3,1]));


