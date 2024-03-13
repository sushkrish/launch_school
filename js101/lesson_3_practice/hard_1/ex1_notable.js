function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first()); 
// {"prop1: hi there"}

console.log(second());
// undefined, js inserts semicolons where it thinks they are missing.
// semicolon inserted at the end of line 8 return. 