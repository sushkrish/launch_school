let negative = num => (num < 0 ? num : (-1 * num));

console.log(negative(5) === -5);     // -5
console.log(negative(-3) === -3);    // -3
console.log(negative(0) === 0);     // -0