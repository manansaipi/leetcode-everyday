//https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/?envType=daily-question&envId=2025-05-23

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 * COME BACK LATER
 */ 
var maximumValueSum = function(nums, k, edges) {
    let maxNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        maxNumber+= nums[i]
    }


    for (let i = 0; i < edges.length; i++) {
        tempArr = [...nums]
        tempArr[edges[i][0]] = tempArr[edges[i][0]] ^ k
        tempArr[edges[i][1]] = tempArr[edges[i][1]] ^ k

        let comparedValue = 0

        for (let i = 0; i < tempArr.length; i++) {
            comparedValue += tempArr[i]
        }

        if (comparedValue>maxNumber) {
            maxNumber = comparedValue
        }
    }
    
    return maxNumber
};

var maximumValueSum = function(nums, k, edges) {
    let sum = 0;
    let smallestGain = 2 * k + 1;
    let smallestLoss = 2 * k + 1;
    let gainCount = 0;

    for (let num of nums) {
        let gain = (num ^ k) - num;
        if (gain > 0) {
            smallestGain = Math.min(smallestGain, gain);
            sum += num + gain;
            gainCount++;
        } else {
            smallestLoss = Math.min(smallestLoss, -gain);
            sum += num;
        }
    }

    if (gainCount % 2 === 1) {
        sum -= Math.min(smallestGain, smallestLoss);
    }

    return sum;
};


console.log(maximumValueSum([1,2,1], 3, [[0,1],[0,2]]))
// expexted : 6
console.log(maximumValueSum([24,78,1,97,44], 6, [[0,2],[1,2],[4,2],[3,4]]))
// expexted : 260
console.log(maximumValueSum([78,43,92,97,95,94], 6, [[1,2],[3,0],[4,0],[0,1],[1,5]]))
// expexted : 507
