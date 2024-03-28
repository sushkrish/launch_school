let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); // 2