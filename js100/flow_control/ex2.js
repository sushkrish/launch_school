function even0r0dd(num){
  console.log((num % 2) ? 'odd' : 'even') 
}

rlSync = require('readline-sync');
let num = Number(rlSync.question('enter a number: '));
even0r0dd(num);
