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
    function dfs(node){
        if (!node) return true;
        
        //find height of every node
        //add 1 to include the root node
        const left = 1 + dfs(node.left)
        const right = 1 + dfs(node.right)
        
        //if any subtree is not balanced, encrypt Infinity,
        //Infinity is always bigger than any value, so we can bubble up the infinity value all the way to the root
        if (Math.abs(left - right) > 1) return Infinity
        
        return Math.max(left, right)
        
    }
    return dfs(root) == Infinity ? false: true
};
