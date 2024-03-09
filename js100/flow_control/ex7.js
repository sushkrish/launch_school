function capsIfEleven(text){
  return (text.length > 10 ? text.toUpperCase() : text);
}

rlSync = require('readline-sync');
text = rlSync.question('enter some text: ');
console.log(capsIfEleven(text));
