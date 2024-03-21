[1, 2, 3].every(num => {
  return num = num * 2;
});

//callback's return value is the expression num * 2 for each element. 2,4,6
//2,4,6 each evaluates to true for each element.
//so every evaluates to true.