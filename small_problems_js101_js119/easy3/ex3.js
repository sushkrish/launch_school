function stringy(length) {
  let numbers = [];
  for (let idx = 0; idx < length; idx++) {
    let val = (idx % 2 === 0) ? 1 : 0;
    numbers.push(val);
  }
  return numbers.join("");
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"