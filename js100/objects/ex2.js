a = {};
a[1] = 10;
a['1'] = 11;
a[undefined] = 12;
a['hello world'] = 13;
a[true] = 14;
a['true'] = 15;
console.log(a);
/*
All are valid keys. but non string keys are coerced into string type. 
*/
