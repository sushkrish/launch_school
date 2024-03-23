function cleanUp(str) {
  let newStr = '';
  let lastAdded = '';
  //iterate through str
  for (let ch of str) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(ch.toLowerCase())) {
      newStr += ch;
      lastAdded = ch;
    } else if (lastAdded !== ' ') {
      newStr += ' ';
      lastAdded = ' ';
    }
  }
  return newStr;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");