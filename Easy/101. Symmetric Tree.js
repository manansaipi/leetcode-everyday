// https://leetcode.com/problems/symmetric-tree/description/?envType=problem-list-v2&envId=tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// this solution will failed on test case 195 / 200 testcases passed
// [1,2,2,2,null,2]
// output false
// [ 2, 2 ]
// [ 2, 2 ]
//       1
//      / \
//     2   2
//    /    /
//   2    2

var isSymmetric = function (root) {
    if (root == null) return true;

    let reverse = false;
    let rootVal = root.val;

    let result1 = [];
    let result2 = [];

    function traverse(currentNode) {
        if (reverse) {
            if (currentNode.right) traverse(currentNode.right);
            result1.push(currentNode.val);
            if (currentNode.left) traverse(currentNode.left);
        } else {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.val == rootVal) {
                reverse = true;
            } else {
                result2.push(currentNode.val);
            }
            if (currentNode.right) traverse(currentNode.right);
        }
    }

    traverse(root);

    console.log(JSON.stringify(result1) === JSON.stringify(result2)); // true if symmetric
    console.log(result1); // e.g. [3, 2, 4]
    console.log(result2); // e.g. [3, 2, 4]

    return JSON.stringify(result1) === JSON.stringify(result2);
};

var isSymmetric = function (root) {
    if (root == null) return true;

    let reverse = false;
    let rootVal = root.val;

    let result1 = [];
    let result2 = [];

    function traverse(currentNode) {
        if (reverse) {
            if (currentNode.right) traverse(currentNode.right);
            result1.push(currentNode.val);
            if (currentNode.left) traverse(currentNode.left);
        } else {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.val == rootVal) {
                reverse = true;
            } else {
                result2.push(currentNode.val);
            }
            if (currentNode.right) traverse(currentNode.right);
        }
    }

    traverse(root);

    console.log(JSON.stringify(result1) === JSON.stringify(result2)); // true if symmetric
    console.log(result1); // e.g. [3, 2, 4]
    console.log(result2); // e.g. [3, 2, 4]

    return JSON.stringify(result1) === JSON.stringify(result2);
};

// this is the right answer
var isSymmetric = function (root) {
    if (root == null) return true;

    let reverse = false;
    let rootVal = root.val;

    let result1 = [];
    let result2 = [];

    function traverse(currentNode, array, isReverse) {
        if (currentNode == null) {
            array.push(null);
            return;
        }

        if (isReverse) {
            traverse(currentNode.right, array, isReverse);
            traverse(currentNode.left, array, isReverse);
        } else {
            traverse(currentNode.left, array, isReverse);
            traverse(currentNode.right, array, isReverse);
        }

        array.push(currentNode.val);
    }

    traverse(root.left, result1, true);
    traverse(root.right, result2, false);

    console.log(JSON.stringify(result1) === JSON.stringify(result2)); // true if symmetric
    console.log(result1); // e.g. [3, 2, 4]
    console.log(result2); // e.g. [3, 2, 4]

    return JSON.stringify(result1) === JSON.stringify(result2);
};
