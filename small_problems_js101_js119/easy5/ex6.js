function multiplicativeAverage(arr) {
  let multiplied = arr.reduce((acc,el) => acc * el, 1);
  return (multiplied / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"