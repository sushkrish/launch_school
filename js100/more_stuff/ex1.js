let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
output
[1,4,3]
array2 has a reference to the same array as array1.
*/

