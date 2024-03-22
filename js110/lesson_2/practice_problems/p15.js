let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {
  let sumA = a.filter(num => num % 2 !== 0)
    .reduce((acc, el) => acc + el, 0);
  let sumB = b.filter(num => num % 2 !== 0)
    .reduce((acc, el) => acc + el, 0);
  return sumA - sumB;
});

console.log(arr);