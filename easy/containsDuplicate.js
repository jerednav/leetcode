/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
var containsDuplicate = function(nums) {
  //create new set
    const set = new Set()
    
  //loop through array, if the set has n, return true, if not add n to the map
    for(let n of nums) {
        if (set.has(n)) {
            return true
        } else {
            set.add(n)
        }
    }
    return false
};
