/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 1. Create a results array
    let results = []
    
    // 2. build a hash map, where "element: its frequency"
    let map = {}
    nums.forEach(n => map[n] ? map[n] +=1 : map[n] = 1)
    console.log(map)
    
    // 3. sort the map keys array based on the frequency
    let sortedKeys = Object.keys(map).sort((a,b) => map[b] - map[a])
    console.log(sortedKeys)
    
    //4. take first k results
    for(let i=0;i < k; i++){
        results.push(sortedKeys[i])
    }
    
    return results
};
