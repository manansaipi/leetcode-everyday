// https://leetcode.com/problems/sum-of-left-leaves/submissions/1667718424/?envType=problem-list-v2&envId=tree
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
var sumOfLeftLeaves = function(root) {
    let result = 0

    function traverse(cNode, branch){
        if(cNode.left) traverse(cNode.left, "left")
        if(cNode.right) traverse(cNode.right, "right")
        if(!cNode.left && !cNode.right && branch == "left") {
            result += cNode.val
        }
    }
    traverse(root, null)
    return result
};