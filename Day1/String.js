let str = "madam";

// Reverse the string
let reversedStr = str.split("").reverse().join("");

// Check if reversed string is palindrome
let isPalindrome = reversedStr === reversedStr.split("").reverse().join("");

// Print results
console.log("Original String:", str);
console.log("Reversed String:", reversedStr);
console.log("Is Reversed String a Palindrome?", isPalindrome);