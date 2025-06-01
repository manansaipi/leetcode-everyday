// https://leetcode.com/problems/find-missing-and-repeated-values/?envType=daily-question&envId=2025-06-01
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const total = grid.length * grid[0].length;
    const myMap = new Map();

    for (let i = 1; i <= total; i++) {
        myMap.set(i, 0); // initialize each key with 0
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            myMap.set(grid[i][j], myMap.get(grid[i][j]) + 1)   
        }
    }

    let repeated = -1
    let missing = -1

    for(const [key,  val] of myMap) {
        if(val > 1) repeated = key
        if(val == 0) missing = key
    }

    return [repeated, missing]
    
};

console.log(findMissingAndRepeatedValues([[1,3,9,7],[16,4,13,15],[2,14,5,11],[14,6,10,8]]))
// [14,12]

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].