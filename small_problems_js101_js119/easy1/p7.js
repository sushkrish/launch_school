function shortLongShort(str1, str2) {
  let arr = [str1, str2];
  arr.sort((a,b) => a.length - b.length);
  return arr[0] + arr[1] + arr[0];
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"