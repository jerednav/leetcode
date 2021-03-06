// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

 

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
1. Create hashmap
2. Loop through each string based on the sorted values
3. If string, 

var groupAnagrams = function(strs) {
    let result = {}
    
    for(let str of strs){
        let sortedStr = str.split('').sort().join('')
        
        !result[sortedStr] ? result[sortedStr] = [str] : result[sortedStr].push(str)
    }
    //return the values of the objects, which are the collection of strings.
    return Object.values(result)
    
};
