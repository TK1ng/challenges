// Given an integer int, return true if int is a
// palindrome and false otherwise.

const isPalindrome = (int) => {
    let reverseNum = 0;
    let num = int;

    while (num > 0) {
        // by finding the remainder, the last digit of the integer is revealed
        let digit = num % 10;
        // multiplying the reverseNum variable by 10, adds a 10's place to add the digit to which simulates adding the digit to the end of the reverseNum variable
        reverseNum = reverseNum * 10 + digit;
        num = ~~(num / 10);
    }

    return reverseNum === int;
};