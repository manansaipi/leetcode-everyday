// https://leetcode.com/problems/binary-tree-postorder-traversal/description/?envType=problem-list-v2&envId=tree
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
var postorderTraversal = function(root) {
    if(!root) return []
    let result = []

    function traverse (cNode) {
        if(cNode.left) traverse(cNode.left)
        if(cNode.right) traverse(cNode.right)
        result.push(cNode.val)
    }   
    traverse(root)

    return result
};