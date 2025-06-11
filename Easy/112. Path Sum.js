// https://leetcode.com/problems/path-sum/?envType=problem-list-v2&envId=tree
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    
    let result = false
    let sum = 0
    function traverse(cNode) {
        sum += cNode.val
        if(cNode.left) traverse(cNode.left)
        if(cNode.right) traverse(cNode.right)

        if(!result && !cNode.left && !cNode.right) {
            if(sum == targetSum) result = true
        }

        sum -= cNode.val

    }

    traverse(root)
    return result
};