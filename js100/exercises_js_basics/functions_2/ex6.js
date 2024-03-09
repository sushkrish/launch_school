let a = removeLastChar('ciao!'); // 'ciao'
let b = removeLastChar('hello'); // 'hell'
console.log(a,b);

function removeLastChar(text){
  return text.slice(0, text.length - 1);
}
