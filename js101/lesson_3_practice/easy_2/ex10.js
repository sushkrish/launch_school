let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let t1 = statement1.split('').filter(c => c === 't').length;
let t2 = statement2.split('').filter(c => c === 't').length;
console.log(t1);
console.log(t2);