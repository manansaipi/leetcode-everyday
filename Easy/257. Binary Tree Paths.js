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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];

    let result = [];

    function traverse(node, path) {
        path += node.val;

        // If it's a leaf node, add the path to the result
        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        // Recurse left and right with updated path
        if (node.left) traverse(node.left, path + "->");
        if (node.right) traverse(node.right, path + "->");
    }

    traverse(root, "");
    return result;
};
