let prod = arr => arr.reduce((mult, num) => mult * num, 1);

function greatestProduct(str) {
  //guard atleast length 4 for str
  if (str.length < 4) return undefined;
  //use array representation of each digit as an element.
  let digits = str.split('').map(ch => Number(ch));
  //console.log(digits);

  //init maxProd
  let maxProd = 0; //there are no negative digits.

  //iterate through array with var idx, while idx + 4 <= length of arr
  for (let idx = 0; idx + 4 <= digits.length; idx++) {
    //checking if prod arr.slice(idx, idx+4) has greater than maxProd.
    let curProd = prod(digits.slice(idx, idx + 4));
    maxProd = curProd > maxProd ? curProd : maxProd;
  }
  //return max prod
  return maxProd;
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6