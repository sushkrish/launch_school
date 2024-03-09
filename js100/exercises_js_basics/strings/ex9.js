let str = 'launch school tech & talk';

function mountainCase(word) {
  return (word[0].toUpperCase() + word.slice(1));
}

strCapitalized = str.split(' ')
                    .map(mountainCase)
                    .join(' ');

console.log(strCapitalized);
