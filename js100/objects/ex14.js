function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


/*
vars: hello, greeting name, xyzzy,howdy, foo

object property names: a, b, c, d

primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace'; property names are strings which are primitives.

objects: function hello, function xyzzy, {a: 1 .... d:{}}, [3,4,5], {}
*/
