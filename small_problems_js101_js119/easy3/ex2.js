function logInBox(str) {
  let len = str.length;
  console.log(`+${'-'.repeat(len + 2)}+`);
  console.log();
  console.log(`|${' '.repeat(len + 2)}|`);
  console.log();
  console.log(`| ${str} |`);
  console.log();
  console.log(`|${' '.repeat(len + 2)}|`);
  console.log();
  console.log(`+${'-'.repeat(len + 2)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
