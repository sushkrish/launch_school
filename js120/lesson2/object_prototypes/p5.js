let a = {prop: 1};
let foo = Object.create(a);
foo.propfoo = 2;

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`); 
  // all inherited enumerable properties from its prototype chain included
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`); 
  // only own enumerable properties
});