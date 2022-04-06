/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    
    while (left < right) {
        let curSum = numbers[left] + numbers[right]
        
        if (curSum === target) {
            return [left + 1, right+1]
        } else if (curSum > target) {
            right--;
        } else {
            left++;
        }
    }
};
