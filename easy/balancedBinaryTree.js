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
    let res = true
    const dfs = (root) => {
        if (!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        if (left - right > 1 || right - left > 1) {
            res = false
        }
        return Math.max(left, right) + 1
        
    }
    dfs(root)
    return res
};

//OR 


var isBalanced = function(root) {
    function dfs(node){
        if (!node) return true;
        
        //find height of every node
        //add 1 to include the root node
        const left = 1 + dfs(node.left)
        const right = 1 + dfs(node.right)
        
        //if any subtree is not balanced, encrypt Infinity,
        //Infinity is always bigger than any value, so we can bubble up the infinity value all the way to the root
        //if the value is greater than 2, then it can NOT be balanced
        if (Math.abs(left - right) > 1) return Infinity
        
        return Math.max(left, right)
        
    }
    return dfs(root) == Infinity ? false: true
};
