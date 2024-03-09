function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*
  error at line 5 because a=2 declares a in that scope but doesn't initialize it until line 6.
*/
