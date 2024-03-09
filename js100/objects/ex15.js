function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
vars: bar, arg1, arg2, foo, qux, result
object property names: abc, def, ghi, jkl, mno, pqr, 0, 1,2,3
primitive values: 'Hello', 1, 2,3,4,5,6,null, NaN'victor', 'antonia', 0, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'
objects: bar, value of qux, value of abc, [4,5,6]
*/
