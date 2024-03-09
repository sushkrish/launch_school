let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function equalsNoCase(str1, str2) {
  return (str1.toLowerCase() === str2.toLowerCase());
}

console.log(equalsNoCase(string1, string2));
console.log(equalsNoCase(string2, string3));
console.log(equalsNoCase(string3, string1));
