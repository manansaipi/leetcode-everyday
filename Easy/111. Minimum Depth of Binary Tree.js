// https://leetcode.com/problems/minimum-depth-of-binary-tree/?envType=problem-list-v2&envId=tree
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
var minDepth = function(root) {
    if(!root) return 0

    let queue = [[root, 1]]

    while(queue.length) {
        let [currentNode, minDepth] = queue.shift()
        
        if(!currentNode.left && !currentNode.right) return minDepth
        
        if(currentNode.left) queue.push([currentNode.left, minDepth + 1])
        if(currentNode.right) queue.push([currentNode.right, minDepth + 1])
        
    }
     
};