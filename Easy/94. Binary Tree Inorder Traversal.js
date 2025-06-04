// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }

    let result = []

    function traverse(currentNode) {
        if(currentNode.left) traverse(currentNode.left)
        result.push(currentNode.val)
        if(currentNode.right) traverse(currentNode.right)
    }
    traverse(root)

    return result
};