let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

//infinite loop as the num is condition is declared on line 1 and never modified.
//num in lines 4,5 are local variable, different from the line 3 condition num.