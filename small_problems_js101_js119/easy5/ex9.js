function countOccurrences(array) {
  let counts = {};
  array.forEach(element => {
    if (counts.hasOwnProperty(element)) {
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  });
  return counts;
}

function textify(counts) {
  for (let key in counts) {
    console.log(`${key} => ${counts[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

let counts = countOccurrences(vehicles);
textify(counts);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1