let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

/**
 * vars: arr, newArr, num, newNum, double, num
 * primitive values:  1, 2, 3, 1, 0, 1, 2, double, 1, 2
 * objects: [1,2,3], function double(num){ return num * 2; }
 */