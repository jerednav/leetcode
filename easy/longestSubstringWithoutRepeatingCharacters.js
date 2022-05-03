/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //Create Set to now allow duplicates
    let charSet = new Set()
    //begin is the start of the array
    let begin = 0
    //max is the highest count of repeating characters
    let max = 0
    
    //for loop, to iterate through array
    for (i = 0; i < s.length; i++){
        //You will know its a repeating character, if the character is already in the Set
        while (charSet.has(s[i])){
            //delete the beginning number
            charSet.delete(s[begin])
            begin = begin + 1
        }
        //add unique characters to Set
        charSet.add(s[i])
        //need to add +1 because index starts at 0
        max = Math.max(max, i - begin + 1)
    }
    return max
};
