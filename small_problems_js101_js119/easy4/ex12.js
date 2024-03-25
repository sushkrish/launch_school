const UTF0 = '0'.charCodeAt(0);

function integerToString(number) {
  let str = '';
  do {
    let digit = number % 10;
    str = String.fromCharCode(UTF0 + digit) + str;
    number = (number - digit) / 10;
  } while (number > 0);

  return str;
}

function signedIntegerToString(number) {
  if (number < 0) {
    return '-' + integerToString(-1 * number);
  } else if (number > 0) {
    return '+' + integerToString(number);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");