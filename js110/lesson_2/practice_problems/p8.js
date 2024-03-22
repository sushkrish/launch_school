let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj)
  .flat()
  .forEach(str => {
    str.split('')
      .filter(ch => 'aeiou'.includes(ch))
      .forEach(ch => console.log(ch));
  });