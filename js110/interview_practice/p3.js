function toWeirdCase(str) {
  //create array of arrays repping chars in words.
  let chars = str.split(' ').map(word => word.split(''));
  //iterate through array of arrays,

  // uppercasing at odd idx of words in (idx + 1) % 3 === 0.
  chars = chars.map((word, idx) => {
    if ((idx + 1) % 3 === 0) {
      return word.map((ch, idx) => {
        if (idx % 2 == 1) {
          return ch.toUpperCase();
        } else {
          return ch;
        }
      });
    } else {
      return word;
    }
  });

  //join back to a str
  return chars.map(word => word.join('')).join(' ');
}

const p = console.log;
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);