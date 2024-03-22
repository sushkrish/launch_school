let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];
for (let key in obj) {
  if (obj[key].type === 'fruit') {
    let colorsUC = obj[key].colors.map( x => x[0].toUpperCase() + x.slice(1));
    arr.push(colorsUC);
  } else {
    let sizeUC = obj[key].size.toUpperCase();
    arr.push(sizeUC);
  }
}

console.log(arr);