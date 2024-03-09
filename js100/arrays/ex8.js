let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr){

  function reducer(acc = [], str){
    if (str.length % 2 == 1) 
      acc.push(str.length);
    return acc;
  }

  return arr.reduce(reducer, []);
}
