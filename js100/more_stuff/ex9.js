function isNegZero(num){
  let inf = 1/num;
  return inf === Number.NEGATIVE_INFINITY;
}

console.log(isNegZero(-0));
console.log(isNegZero(0));
