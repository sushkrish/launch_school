function centerOf(str) {
  let mid = str.length / 2;
  if (str.length % 2 === 0) {
    return str[mid - 1] + str[mid];
  } else {
    return str[Math.floor(mid)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"