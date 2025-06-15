// https://leetcode.com/problems/invert-binary-tree/description/?envType=problem-list-v2&envId=tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root
   
    const right = invertTree(root.right)
    const left = invertTree(root.left)

    root.left = right
    root.right = left
    return root
    
};