//Array.prototype.join is called on an array with one optional parameter: the separator. 
//If omitted, comma is used as the default separator.
//If extra arguments are supplied, they are ignored.

let arr = ['hello','world'];
console.log(arr.join(' '));
console.log(arr.join());
console.log(arr.join(',', 'a'));
console.log(arr.join('a'));
