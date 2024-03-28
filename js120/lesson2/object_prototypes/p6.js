let bareObj = Object.create(null);

if (Object.getPrototypeOf(bareObj)) {
  console.log("bareObj has a prototype");
} else {
  console.log("It's a bare object");
}