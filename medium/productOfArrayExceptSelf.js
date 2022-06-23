/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
1. Create two arrays one starting from left and starting from the right
2. Multiply those two arrays together to get the product.
3. Return the result array.
*/
var productExceptSelf = function(nums) {
    let left = []
    let right = []
    let result = []
    
    left[0] = 1
    for (let i=1; i< nums.length; i++){
        left[i] = left[i-1] * nums[i-1]
    }
    
    right[nums.length-1] = 1
    for (let i=nums.length-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1]
    }
    
    for(let i=0; i < nums.length; i++){
        result[i] = left[i] * right[i]
    }
    
    return result
};
