function last(arr){
  return arr[arr.length - 1];
}

let el = last(['Earth', 'Moon', 'Mars']); // 'Mars'
let el2 = last([]);
console.log(el, el2);
