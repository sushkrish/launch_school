function greetings(nameArr, occObj) {
  let name = nameArr.join(" ");
  let role = occObj['title'] + " " + occObj['occupation'];
  return `Hello, ${name}! Nice to have a ${role} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.