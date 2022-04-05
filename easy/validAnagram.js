/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if (s.length !== t.length) {
       return false
   }
    
     let letterCount = {}
    
    //add letters to map
    for (let letter of s) {
        if (letterCount[letter] === undefined) {
            letterCount[letter] = 1
        } else {
            letterCount[letter]++
        }
    }
    
  //remove letters to map, if it doesnt exist, its not a anagram
    for (let letter of t) {
        if (letterCount[letter] === undefined) {
            return false
        }
        
        if (letterCount[letter] < 1) {
            return false
        }
        
        letterCount[letter]--;
    }
    
    return true
    
};
