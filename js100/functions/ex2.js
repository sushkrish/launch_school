let rlSync = require('readline-sync');

function get(infoType){
  info = rlSync.question(`What's your ${infoType}?\n`);
  return info
}

console.log(`Good Morning, ${get("first name")} ${get("last name")}!`);
