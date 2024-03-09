function numberRange(num) {
  if (!Number.isInteger(num)){
    console.log(`${num} is not an integer.`);
    return ;
  }

  if (num <= 0) 
    console.log(num + ' is less than 0');
  else if (num <= 50)
    console.log(num + ' is between 0 and 50');
  else if (num <= 100)
    console.log(num + ' is between 51 and 100');
  else
    console.log(num + ' is greater than 100'); 
}

rls = require('readline-sync');
num = Number(rls.question('Enter a number: '));
numberRange(num);
