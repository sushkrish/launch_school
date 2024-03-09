let age = 20;
let addVals = [10, 20, 30, 40];
console.log(`You are ${age} years old.`);
for (val in addVals){
  let time = addVals[val];
  console.log(`In ${time} years, you will be ${time + age} years old.`);
}
