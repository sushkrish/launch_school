console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32


function catAge(humanYears) {
  if (humanYears === 0) return 0;
  if (humanYears === 1) return 15;
  if (humanYears == 2){
    return 9 + catAge(humanYears - 1);
  }
  return 4 + catAge(humanYears - 1);
}
