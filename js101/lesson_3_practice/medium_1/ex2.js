let munstersDescription = "The Munsters are creepy and spooky.";

let munsterSwapCase = ""
for (ch of munstersDescription) {
  if (ch === ch.toLowerCase()){
    munsterSwapCase += ch.toUpperCase();
  } else {
    munsterSwapCase += ch.toLowerCase();
  }
}

console.log(munsterSwapCase);