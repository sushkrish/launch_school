let numbers = [1, 2, 3, 4, 5];
let numbersReversed = numbers.toReversed();
let numbersReversed2 = numbers.toSorted((a,b) => b - a);
let numbersReversed3 = [];
numbers.forEach((num) => {
  numbersReversed3 = [num].concat(numbersReversed3);
});
console.log(numbersReversed, numbersReversed2, numbersReversed3);