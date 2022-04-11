/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    bracket = { '{' : '}', '[' : ']', '(' : ')'}
    
    for (let char of s) {
        if (bracket[char]) {
            //if char is an opening bracket
            stack.push(bracket[char])
        } else if(stack.length > 0 && stack[stack.length - 1] === char){
            //char is a closing backet and top of stack matches
            stack.pop()
        } else {
            //char is a closing bracket and top of the stack doesn't match
            return false
        }
    }
    return stack.length === 0
};
