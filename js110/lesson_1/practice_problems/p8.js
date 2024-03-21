let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};

flintstones.forEach((el, idx) => flintstonesObj[el] = idx);
console.log(flintstonesObj);