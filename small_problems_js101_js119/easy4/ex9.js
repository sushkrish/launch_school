const UTF0 = '0'.charCodeAt(0);

function stringToInteger(str) {
  let number = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let digit = str.charCodeAt(idx) - UTF0;
    number = (number * 10) + digit;
  }
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true