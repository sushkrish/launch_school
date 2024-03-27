function rotateRightmostDigits(number, count) {
  let numStr = String(number);
  let newStr = '';
  //iterate through string,
  for (let idx = 0; idx < numStr.length; idx++) {
    //copying chars at all indices except last count.
    if (idx === numStr.length - count) continue;
    newStr += numStr[idx];
  }
  //at end of loop, append the skipped char
  newStr += numStr[numStr.length - count];
  return Number(newStr);
}

function maxRotation(number) {
  let len = String(number).length;
  let maxRotated = number;
  for (let count = 0; count < len; count++) {
    maxRotated = rotateRightmostDigits(maxRotated, len - count);
  }
  console.log(maxRotated);
  return maxRotated;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845