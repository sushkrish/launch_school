function isPalindrome(str) {
  return (str.split('').reverse().join("") === str);
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543) === true);        // true
console.log(isPalindromicNumber(123210) === false);       // false
console.log(isPalindromicNumber(22) === true);           // true
console.log(isPalindromicNumber(5) === true);            // true