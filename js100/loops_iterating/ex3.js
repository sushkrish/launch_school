let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
this causes an infinite loop because counter = 1 is an assignment which is truthy, so condition is always true for this while loop.

Also we never enter the if clause with break because counter is reset to 1 at each iteration.
*/
