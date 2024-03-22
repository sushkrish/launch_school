function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = str => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map(word => scream(word, exclamate));

/**
 * higher order functions: scream, map
 * callbacks: word => scream(word, exclamate), helper (exclamate)
 */
