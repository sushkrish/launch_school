let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
This should print 'bar'. The second initialization is within a different scope, so it doesn't apply.
*/
