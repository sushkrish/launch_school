let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

console.log(a); // a = 2
console.log(b); // b = [3, 8]