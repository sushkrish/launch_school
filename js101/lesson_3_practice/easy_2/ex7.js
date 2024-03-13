let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = ['Barney', flintstones['Barney']];
let barney2 = Object.entries(flintstones)[2];
let barney3 = Object.entries(flintstones).filter(([x,y]) => x === 'Barney').flat();

console.log(barney, barney2, barney3);