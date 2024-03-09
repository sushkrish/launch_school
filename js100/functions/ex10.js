function multiply(left, right) { //global: multiple; local: left,right
  let product = left * right; // local:product, left, right
  return product; //local: product
}

function getNumber(prompt) { //multiple:getNumber; local: prompt
  return parseFloat(question(prompt)); //local:prompt; global:question, parseFloat
}

let left = getNumber('Enter the first number: '); // global:left; global: getNumber
let right = getNumber('Enter the second number: '); // global:right; global: getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //global:left, right, multiply, console
