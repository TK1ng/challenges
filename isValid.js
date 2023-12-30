// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
    let charStack = [];
    const charMap = { "(": ")", "{": "}", "[": "]" };

    for (char of s) {
        if (charMap[char]) {
            //if true, the char is an opening bracket.
            charStack.push(charMap[char]);
        } else if (charStack.length > 0 && charStack[charStack.length - 1] === char) {
            //char is a closing bracket
            charStack.pop()
        } else {
            return false
        }
    }

    return charStack.length === 0;
};