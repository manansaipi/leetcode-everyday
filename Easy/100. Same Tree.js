// https://leetcode.com/problems/same-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    let queue = [p];
    let queue2 = [q];

    while(queue.length && queue2.length) {
        currentNode = queue.shift()
        currentNode2 = queue2.shift()

        if( currentNode.val !== currentNode2.val) {
            return false
        }

        if(currentNode.left && currentNode2.left) {
            queue2.push(currentNode2.left)
            queue.push(currentNode.left)
            
            if(currentNode.left.val !== currentNode2.left.val ) {
                return false
            }
        } else if(currentNode.left || currentNode2.left) {
            return false
        }
        if(currentNode.right && currentNode2.right) {
            queue.push(currentNode.right)
            queue2.push(currentNode2.right)

            if(currentNode.right.val !== currentNode2.right.val ) {
                return false
            }
        }  else if(currentNode.right || currentNode2.right) {
            return false
        }
    }
    return true
};