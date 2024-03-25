const UTF0 = '0'.charCodeAt(0);

function stringToInteger(str) {
  let number = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let digit = str.charCodeAt(idx) - UTF0;
    number = (number * 10) + digit;
  }
  return number;
}

function stringToSignedInteger(number) {
  switch (number[0]) {
    case '+':
      return stringToInteger(number.slice(1));
    case '-':
      return -1 * stringToInteger(number.slice(1));
    default:
      return stringToInteger(number);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true