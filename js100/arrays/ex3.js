let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

flatArray = myArray.reduce((flat, a) => flat.concat(a), []);
console.log(flatArray.filter(n => !(n % 2)));
