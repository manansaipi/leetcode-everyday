// https://leetcode.com/problems/find-center-of-star-graph/description/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const graph = new Map();
    let maxDegree = 0;
    let centerNode = -1;

    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    for (const [node, neighbors] of graph.entries()) {
        if (neighbors.length > maxDegree) {
            maxDegree = neighbors.length;
            centerNode = node;
        }
    }

    return centerNode;
};


// better approach
// const findCenter = edges => {
//     let c1 = edges[0][0];
//     let c2 = edges[0][1];

//     let C1 = 0;
//     let C2 = 0;

//     for (const c of edges) {
//         if (c[0] === c1) C1++;
//         if (c[1] === c1) C1++;

//         if (c[0] === c2) C2++;
//         if (c[1] === c2) C2++;
//     }

//     return C1 < C2 ? c2 : c1;
// };

// var findCenter = function(edges) {
//     const count = new Map();

//     for (const [u, v] of edges) {
//         count.set(u, (count.get(u) || 0) + 1);
//         count.set(v, (count.get(v) || 0) + 1);
//     }

//     for (const [node, freq] of count.entries()) {
//         if (freq === edges.length) {
//             return node;
//         }
//     }

//     return -1;
// };


// or even better 
// var findCenter = function(edges) {
//     return edges[0][0] == edges[1][0] ? edges[0][0] : edges[0][0] == edges[1][1] ? edges[1][1] : edges[0][1]
// };
// var findCenter = function(edges) {
//     // Compare the first two edges
//     if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
//         return edges[0][0];
//     }
//     return edges[0][1];
// };


console.log('findCenter', findCenter([[1,2],[2,3],[4,2]]))
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

console.log('findCenter', findCenter([[1,2],[5,1],[1,3],[1,4]]))
// Output: 1
