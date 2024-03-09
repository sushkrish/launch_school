function filter(input) {
  return Array.isArray(input);
}

console.log(filter([]));
console.log(filter([1,2,3]));
console.log(filter("string"));
console.log(filter({}));
