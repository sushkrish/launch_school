function isDoubleNumber(number) {
  let str = String(number);
  if (str.length % 2 !== 0) return false;
  return str.slice(0,str.length / 2) === str.slice(str.length / 2);
}

function twice(number) {
  return isDoubleNumber(number) ? number : number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676