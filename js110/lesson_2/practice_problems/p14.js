let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.map(subArr => {
  return subArr.filter(num => (num % 3 === 0));
});

console.log(arr2);