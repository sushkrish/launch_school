function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/**
 * variables: boo, scare, myBoo, halloweenCollection,  myBoo, console?
 * primitive values: "!!!", greet, scare, wish, "Happy Halloween", "Boo", "May all ...", "greet",Happy Halloween,HAPPY HALLOWEEN, HAPPY HALLOWEEN !!!, undefined
 * objects: function boo...};, {greet: ...glowing,} 
 */