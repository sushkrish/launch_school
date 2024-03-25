function repeatedSubstring(str) {
  if (str === '' || str !== str.toLowerCase()) return ; //guard clause
  // for each substring length k, check if slice(0,k)*(length/k) === str;
  let substr;
  for (let lenSub = str.length; lenSub >= 1; lenSub--) {
    if (str.length % lenSub !== 0) continue; 

    let reps = str.length / lenSub;
    if (str.slice(0, lenSub).repeat(reps) === str) {
      substr = str.slice(0, lenSub);
    }
  }
  
  return [substr, str.length / substr.length];
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));