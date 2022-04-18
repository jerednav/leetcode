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

//DFS
var maxDepth = function(root) {
    if (root == null) {
        return null
    }
    
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
    
};
