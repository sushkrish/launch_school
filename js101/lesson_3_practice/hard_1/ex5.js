function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("1.2.3.4")); //true
console.log(isDotSeparatedIpAddress("124.22.11.0")); //true
console.log(isDotSeparatedIpAddress("276.22.11.0")); //false
console.log(isDotSeparatedIpAddress("276.22.11")); //false
console.log(isDotSeparatedIpAddress("276.22.11.1.1")); //false
console.log(isDotSeparatedIpAddress("")); //false