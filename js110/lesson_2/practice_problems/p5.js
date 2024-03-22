let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAges = Object.values(munsters)
  .filter( obj => obj['gender'] === 'male')
  .reduce( (acc, el) => acc + el['age'], 0);

console.log(maleAges);