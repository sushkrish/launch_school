let rls = require('readline-sync');

function madlib(noun, verb, adj, adv) {
  let story =
  `Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!
  The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.
  The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`;

  return story;
}

console.log("==> Enter a noun: ");
let noun = rls.question();
console.log("==> Enter a verb: ");
let verb = rls.question();
console.log("==> Enter an adjective: ");
let adj = rls.question();
console.log("==> Enter an adverb: ");
let adv = rls.question();

console.log(madlib(noun, verb, adj, adv));