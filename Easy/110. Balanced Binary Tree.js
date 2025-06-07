// https://leetcode.com/problems/balanced-binary-tree/description/
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
var isBalanced = function(root) {

    function check(cNode) {
        if(!cNode) return [true, 0]

        const [leftBalanced, leftHeight] = check(cNode.left)
        const [rightBalanced, rightHeight] = check(cNode.right)

        const isBalanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1
        const height = 1 + Math.max(leftHeight, rightHeight)

        return [isBalanced, height]
    }

    return check(root)[0]
};