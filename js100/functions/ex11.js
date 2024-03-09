function multiply(left, right) { //multiple, left,right
  let product = left * right; // product, left, right
  return product; //product
}

function getNumber(prompt) { //getNumber, prompt
  return parseFloat(question(prompt)); //prompt, question, parseFloat
}

let left = getNumber('Enter the first number: '); // left, getNumber
let right = getNumber('Enter the second number: '); // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //left, right, multiply, console

/*
no, left and right on lines 1 & 2 are local.
left and right on lines 10-12 are global. 
*/
