function oddFellow(integers) {
  //create object tracking frequency
  let counts = integers.reduce((obj, num) => {
    let freq = obj[num] ? obj[num] + 1 : 1;
    obj[num] = freq;
    return obj;
  },{});

  //filter keys to find odd number of occurrence vals
  let oddKeys = Object.keys(counts)
    .filter(key => (counts[key] % 2 === 1));

  //return only value in filtered list
  return Number(oddKeys[0]);
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);