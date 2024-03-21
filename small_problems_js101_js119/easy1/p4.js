const SQ_METER_TO_FEET = 10.7639;
let rls = require('readline-sync');

console.log("enter width of room in metres: ");
let width = Number(rls.prompt());

console.log("enter length of room in metres: ");
let length = Number(rls.prompt());

let areaMetres = width * length;
let areaFeet = areaMetres * SQ_METER_TO_FEET;

console.log("Area of room is " + areaMetres + " metre sq.");
console.log("Or you can say " + areaFeet + " feet sq.");
