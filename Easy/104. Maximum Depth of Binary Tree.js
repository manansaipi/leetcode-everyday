// https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=problem-list-v2&envId=tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0

    let maxDepth = 0
    let counter = 0

    function traverse(currentNode) {
        counter+=1
        if(currentNode.left) traverse(currentNode.left)
        if(currentNode.right) traverse(currentNode.right)
        if(maxDepth < counter) maxDepth = counter
        counter-=1
    }

    traverse(root)

    return maxDepth
};