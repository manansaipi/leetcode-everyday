// URL : https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// bruteforce(not recomended)
var containsDuplicate = function(nums) {
    for (let x = 0; x < nums.length; x++) {
        const first = nums[x];
        for (let y = x+1; y < nums.length; y++) {
            const compareItem = nums[y];
            if(first == compareItem){
                return true;
            }
        }
        
    }
    return false;
};

//sorting
var containsDuplicate = function(nums) {
    let sortingNUms = nums.sort();
    let length = nums.length;
    for (let x = 0; x < length; x++) {
        if(nums[x] == nums[x+1]){
        return true;
        }
        
        
    }
    return false;
};
console.log(containsDuplicate([1, 2, ]));