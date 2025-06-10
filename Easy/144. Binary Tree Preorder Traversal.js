// https://leetcode.com/problems/binary-tree-preorder-traversal/?envType=problem-list-v2&envId=tree
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
var preorderTraversal = function(root) {
    if(!root) return []

    let result = []
    function traverse(cNode) {
        result.push(cNode.val)
        if(cNode.left) traverse(cNode.left)
        if(cNode.right) traverse(cNode.right)
    
        return result
    }

    return traverse(root) 
};