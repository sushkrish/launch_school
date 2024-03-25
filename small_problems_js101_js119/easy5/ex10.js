function average(arr1) {
  let sum = arr1.reduce((acc, el) => acc + el, 0);
  let avg = sum / arr1.length;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40