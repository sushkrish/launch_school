let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
output will be 1.
value of bar does not change outside the function because the second declaraction is within the scope of the function foo only.
*/
