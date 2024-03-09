/*
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

will not execute because conditional is at beginning of loop.
----
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

will execute once before conditional is evaluated.
*/
