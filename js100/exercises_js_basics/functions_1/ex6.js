let a = compareByLength('patience', 'perseverance'); // -1
let b = compareByLength('strength', 'dignity');      //  1
let c = compareByLength('humor', 'grace');           //  0
console.log(a, b, c);

function compareByLength(str1, str2){
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length){
    return 1;
  } else {
    return 0;
  }
}
