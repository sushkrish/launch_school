let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arr2 = arr.map(subArr => {
  if (typeof (subArr[0]) === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});

console.log(arr2);