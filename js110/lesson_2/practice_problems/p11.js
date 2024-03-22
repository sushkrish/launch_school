let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  let copyObj = {};
  Object.keys(obj).forEach(key => {
    copyObj[key] = obj[key] + 1;
  });
  return copyObj;
});

console.log(arr2);
console.log(arr);
