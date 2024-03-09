let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// false, because let b = true happens within the conditional scope only.
