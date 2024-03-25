function isPalindrome(str) {
  return (str.split('').reverse().join("") === str);
}

function isRealPalindrome(str) {
  //lowercase, remove all non-alpha-numeric characters.
  let alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789';
  str = str.toLowerCase()
    .split('')
    .filter(ch => alphanumerics.includes(ch))
    .join('');
  return isPalindrome(str);
}

console.log(isRealPalindrome('madam') === true);               // true
console.log(isRealPalindrome('Madam') === true);               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);              // true
console.log(isRealPalindrome('356a653') === true);             // true
console.log(isRealPalindrome('123ab321') === false);            // false