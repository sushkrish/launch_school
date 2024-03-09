let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

a = [array1, array2,array3,array4,array5];
a.forEach( arr => console.log(arr.length));
/*
final lengths are:
array1 - 4
array2 - 5
array 3 - 0
array 4 - 3
array 5 - 101 

*/
