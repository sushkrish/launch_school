/**
 * Problem: 
 *  N rows
 *  1st row contains 1 item, 
 *  Nth row contains N items.
 *  Items are consecutive multiples of 2. 
 * Input: row #
 * Ouput: sum of items in row #
 */
function sumNthRow(n) {
  //Identify startVal = starting value of nth row 
  let startVal = firstVal(n);
  console.log(startVal);

  //Loop to sum values from StartVal, incrementing 2 for n iterations.
  let sum = 0;
  let i = 0;
  while (i < n) {
    sum = sum + startVal + (2 * i);
    i++;
  }

  //Return sum
  return sum;
}

/**
 * Input: row number n 
 * Output: first value of row n
 */
function firstVal(n) {
  //calculate beforeNItems = number of items upto row n-1 = 1 + 2 + 3 + ... + (n-1)
  let beforeNItems = (n-1)*n/2;

  //return 2 * (beforeNItems + 1)
  return 2 * (beforeNItems + 1);
}

/**
 * Rows:
 * 2 // 1st row starts with (0 + 1) * 2
 * 4, 6 //2nd row starts with (1 + 1) * 2
 * 8, 10, 12 //3rd row starts with (1 + 2 + 1) * 2
 * 14, 16, 18, 20 //4th row starts with (1 + 2 + 3 + 1) * 2
 * 22, 24, 26, 28, 30 //5th row starts with (1 + 2 + 3 + 4 + 1) * 2
 * ...
 */
console.log(sumNthRow(1) === 2);
console.log(sumNthRow(2) === 10);
console.log(sumNthRow(3) === 30);
console.log(sumNthRow(4) === 68);