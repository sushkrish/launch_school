function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));
/**
 * bar(foo())
 * bar("yes");
 * "no"
 */
