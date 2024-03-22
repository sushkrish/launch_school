const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
console.log(deepCopiedArr);
