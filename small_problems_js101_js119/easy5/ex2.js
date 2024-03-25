function union(arr1, arr2) {
  let combined = arr1.concat(arr2);
  combined.sort((a,b) => a - b);
  return combined.filter((el, idx) => {
    if (idx > 0) {
      return !(el === combined[idx - 1]);
    }
    return true;
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]