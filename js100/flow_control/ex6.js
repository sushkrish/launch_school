function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
output is: 'Not Empty'
Boolean([]) evaluates to true. So the first conditional passes.
*/
