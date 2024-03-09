function foo(bar) {
  console.log(bar());
}

foo(() => "welcome");    // Should print 'Welcome'
foo(() => "3.1415");    // Should print 3.1415
foo(() => [1,2,3]);    // Should print [1, 2, 3]
