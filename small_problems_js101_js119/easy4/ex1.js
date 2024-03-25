let rls = require('readline-sync');

//get inputs in an array
let ordinals = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
let numbers = [];
for (let ord of ordinals) {
  console.log(`==> enter the ${ord} number`);
  numbers.push(Number(rls.question()));
}
//pick last input
let lastInput = numbers.pop();
//output if last is in the rest of the array.
if (numbers.includes(lastInput)) {
  console.log(`The number ${lastInput} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastInput} does not appear in ${numbers}.`);
}