const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let deepCopy = JSON.parse(JSON.stringify(truthiness));
console.log(deepCopy);

let realDeepCopy = Object.assign({},truthiness);
for (let key in realDeepCopy) {
  // just need shallow copy here.
  realDeepCopy[key] = realDeepCopy[key].map(el => el);
  // realDeepCopy[key].slice();
  // [...realDeepCopy[key]]
}
console.log(realDeepCopy);
realDeepCopy['falsy'][0] = undefined;
console.log(realDeepCopy);
console.log(truthiness);