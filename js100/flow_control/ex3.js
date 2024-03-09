function even0r0dd(num){
  if (Number.isInteger(num)) { 
    console.log((num % 2) ? 'odd' : 'even');
  } else {
    console.log(`${num} is not an integer.`);
    return
  }
}

rlSync = require('readline-sync');
let num = Number(rlSync.question('enter a number: '));
even0r0dd(num);
