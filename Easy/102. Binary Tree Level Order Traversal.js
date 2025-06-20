// https://leetcode.com/problems/binary-tree-level-order-traversal/?envType=problem-list-v2&envId=breadth-first-search
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result  = []
    if(!root) return result

    let queue = [root]
    result.push([root.val])
    while(queue.length) {
        let arr = []
        let cNode = queue.shift()

        if(cNode.left) {
            arr.push(cNode.left.val)
            queue.push(cNode.left)
        }
        if(cNode.right) {
            arr.push(cNode.right.val)
            queue.push(cNode.right)
        }
        if(arr.length>0) result.push(arr)
    }
    return result

    
};