[1, 2, 3].map(num => {
  num * num;
});

//returns [undefined, undefined, undefined]
//there is no explicit return value due to the block, 
//so by default returns undefined for each of the elements.