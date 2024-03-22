let rls = require('readline-sync');

console.log("What's your name?");
let name = rls.prompt();

let message = "Hello " + name + ".";
if (name.endsWith("!")) {
  message = `HELLO ${name.slice(0,name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`;
}

console.log(message);