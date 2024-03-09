let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

/*
evaluates to true.

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
in this case, although order is different, it still evalautes to true.
*/
