// https://leetcode.com/problems/zero-array-transformation-iii/description/?envType=daily-question&envId=2025-05-22
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    // Group queries by start time using lodash _.groupBy or custom implementation
    const g = _.groupBy(queries, x => x[0]);

    // Max priority queue for query end times
    const h = new MaxPriorityQueue();

    // Difference array for workload
    const d = new Int32Array(nums.length + 1);

    let o = 0; // assigned workload count
    let j = 0; // unused here but kept from original

    // Recursive function to assign queries until workload meets requirement
    const assign = (x, i) => {
        if (o >= x) return true; // done for current time

        if (h.isEmpty() || h.front() < i) return false; // no valid queries

        o++;
        d[h.front() + 1]--;
        h.pop();

        return assign(x, i);
    };

    // Iterate over each time slot in nums
    for (let i = 0; i < nums.length; i++) {
        o += d[i]; // update current workload from difference array

        // Push all queries starting at i into max-heap
        if (g[i]) {
            g[i].forEach(y => h.enqueue(y[1]));
        }

        // Assign queries greedily to satisfy nums[i]
        if (!assign(nums[i], i)) {
            return -1; // impossible to fulfill
        }
    }

    // Return the number of unused queries in the heap
    return h.size();
};

console.log(maxRemoval([2,0,2], [[0,2],[0,2],[1,1]]))
// expected output : 1
console.log(maxRemoval([0,1,0], [[0,0],[0,0],[0,2],[2,2]]))
// expected output : 3
console.log(maxRemoval([1,2], [[1,1],[0,0],[1,1],[1,1],[0,1],[0,0]]))
// expected output : 4
console.log(maxRemoval([1,3], [[1,1],[0,1],[1,1],[0,1]]))
// expected output : 1
console.log(maxRemoval([0,3], [[0,1],[0,0],[0,1],[0,1],[0,0]]))
// expected output : 2
console.log(maxRemoval([1,1,1,1], [[1,3],[0,2],[1,3],[1,2]]))
// expected output : 2
console.log(maxRemoval([1,2,3,4], [[0,3]]))
// expected output : -1