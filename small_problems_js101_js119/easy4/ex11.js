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

let tests = [];
tests[0] = (integerToString(4321) === "4321");
tests[1] = (integerToString(0) === "0");
tests[2] = (integerToString(5000) === "5000");
tests[3] = (integerToString(1234567890) === "1234567890");
console.log(tests);