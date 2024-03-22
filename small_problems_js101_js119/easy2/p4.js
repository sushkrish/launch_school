let multiply = (n1, n2) => n1 * n2;
let square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true