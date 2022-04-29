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
    if(!p && !q) return true
    //if p & q are null, they are the technically the same, so return TRUE
    
    if(!p || !q || p.val !== q.val) return false
    //if one of p/q is null, and the other one is not, return FALSE
    //if both trees are non-empty and have a value(p.val & q.val), return FALSE
    
    return isSameTree(p.left,q.left) 
    //check to see if p left and q left are the same
    && isSameTree(p.right,q.right)
    //check to see if p right and q right are the same
    
    //because of the &&, if both are true, then the function will return TRUE
};
