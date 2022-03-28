var isValid = function(s) {
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingBrackets = {')': '(',']' : '[','}' : '{'};
    const stack = [];
    for(const char of s) {
        if(openingBrackets.includes(char)){
            stack.push(char);
        }else if(closingBrackets.includes(char)){
            if(stack.length === 0){
                return false;
            }
            if(stack[stack.length - 1] === matchingBrackets[char]){
                console.log(stack)
                console.log('this is stack', stack[stack.length-1])
                console.log('this is bracket', matchingBrackets[char])
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};