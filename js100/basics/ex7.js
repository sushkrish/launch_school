let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
/*
The above code will not result in a error as accessing an index out-of-bounds returns undefined, not an error in javascript.
*/
