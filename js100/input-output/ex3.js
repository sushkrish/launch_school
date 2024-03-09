let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));
let addVals = [10, 20, 30, 40];
console.log(`You are ${age} years old.`);
for (val in addVals){
  let time = addVals[val];
  console.log(`In ${time} years, you will be ${time + age} years old.`);
}
