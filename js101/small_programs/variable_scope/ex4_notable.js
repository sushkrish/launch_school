let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

/*
  Reference error: since num is declared within myFunc, 
  it's that local variable which is tried to be accessed on line 4.
*/