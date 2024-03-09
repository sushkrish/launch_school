/* there is no method to capitalize first letter.*/

let str = 'mountain'
console.log(str);
let strLower = str.toLowerCase();
strLower = strLower[0].toUpperCase() + strLower.slice(1);
console.log(strLower);
