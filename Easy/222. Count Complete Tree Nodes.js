// https://leetcode.com/problems/count-complete-tree-nodes/submissions/1663918053/?envType=problem-list-v2&envId=tree
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
var countNodes = function(root) {
    function traverse(cNode) {
        if(!cNode) return 0
        console.log(cNode)
        const leftCount = traverse(cNode.left)
        const rightCount = traverse(cNode.right)
        return leftCount + rightCount + 1
        
    }

    return traverse(root)
};