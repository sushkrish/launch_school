function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*
42
3.1415
---
2.718 is ignored because there's no parameter for it.
*/
