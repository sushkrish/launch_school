let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach(person => {
  let deets = munsters[person];
  console.log(`${person} is a ${deets.age}-year-old ${deets.gender}.`);
});