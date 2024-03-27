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
  console.log(newStr);
  return Number(newStr);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917