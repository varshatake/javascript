console.log(`To check the given string is palindrome or not`);

function isPalindrome(str) {
    let strSplitedCharacters = str.split('');
    let splittedValue = strSplitedCharacters.reverse();
    let answer = splittedValue.join('');
    if (str == answer) {
        console.log(`The string is Palindrome`);
    }
    else{
        console.log(`The string is not Palindrome`);
    }
}
isPalindrome("madam");
console.log(`----------------------`);
isPalindrome('141');
console.log(`----------------------`);
isPalindrome('Sunday');
console.log(`----------------------`);
isPalindrome('mom');
console.log(`----------------------`);
isPalindrome('listen');
console.log(`----------------------`);
isPalindrome('dad');
isPalindrome('nayan');