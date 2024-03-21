/**
 * input: array of strings
 * output: desc sorted array of strings, sorted based on number of adjacent consonants in string.
 *
 * Rules:
 * - all except a,e,i,o,u (in either casing) are consonants
 * - consonants are considered adjacent if are next to each other or if there is only a space in between.
 * - presence of just 1 consonant does not count.
 * - if there is a tie between two strings, they should retain original order
 *
 * Questions:
 * - "b d c" <-- is that 3 adjacent constants? //assume yes.
 * - only alphabet and spaces in the string? //assume yes from test cases.
 */
function sortStringsByConsonants(list) {
  // create an object (for mapping each string to its max #adj consonants)
  let adjConsonants = {};
  // for each string in list, calculate its max #adj consonant and fill object
  list.forEach(element => {
    adjConsonants[element] = countAdjConsonants(element);
  });

  // sort list with a custom comparison function, based on max #adj consonant from object
  let sortedList = list.slice().sort((a,b) => adjConsonants[b] - adjConsonants[a]);

  // return sorted list
  return sortedList;
}

/**
 * @param {*} str: input string
 * returns: maximum number of adjacent consonants starting with 2.
 *
 * returns 0 if no two adjacent consonants.
 * case insensitive.
 * spaces are disregarded for adjacency.
 */
function countAdjConsonants(str) {

  // lowercase the string
  str = str.toLowerCase();
  // remove spaces
  str = str.split(' ').join('');

  // keep counter of consonants and max count, start at 0
  let maxCount = 0;
  let counter = 0;

  // iterate through chars of string,
  for (let char of str) {
  // increment counter if char is a consonant, replace max count if counter > max count
    if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
      counter += 1;
      maxCount = counter > maxCount ? counter : maxCount;
    } else {
      // if not a consonant and set counter to 0.
      counter = 0;
    }
  }
  // return max count if max count > 1, else 0
  let maxAdj = maxCount > 1 ? maxCount : 0;
  return maxAdj;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']