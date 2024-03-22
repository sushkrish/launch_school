let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersCopy = {};
for (let key in munsters) {
  munstersCopy[key] = Object.freeze(Object.assign({}, munsters[key]));
}
console.log(munstersCopy);
