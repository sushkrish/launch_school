let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

//snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//snippet 2
for (let key in myObj) {
  console.log(key);
}

//snippet 3 
for (let key in myObj) {
  if(myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

/*
snippet 1: qux - iterates only over myObj's own keys.
snippet 2: foo, bar, qux; iterates over all keys included inherited ones.
*/
