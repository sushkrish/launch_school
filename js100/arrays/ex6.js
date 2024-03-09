let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr){
  let lens = arr.map(str => str.length);
  return lens.filter( l => l % 2 );
}
