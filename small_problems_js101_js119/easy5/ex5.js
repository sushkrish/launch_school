function interleave(arr1, arr2) {
  let newArr = [];
  //iterate through indices, leavening the arrays
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx], arr2[idx]);
  }
  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]