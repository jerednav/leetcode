/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1; 
    
    while (left < right) {
        //if current char is a space, bring pointer up one or down one to a valid character
        while (!isValidChar(s.charAt(left))) {
            left++
        }
         while (!isValidChar(s.charAt(right))) {
            right--
        }
        
        if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
            return false
        }
        
        left++;
        right--;
    }
    return true;
};
    
    let isValidChar = function(char){
        let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        return validChars.indexOf(char.toLowerCase()) > -1;
    }
        //In javascript, if character is not in string, indexOf will return -1
