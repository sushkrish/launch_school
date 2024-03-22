const DASH_IDX = [8,13,18,23];
const HEX_CHARS = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function getUUID() {
  let getRandomChar = _ => HEX_CHARS[Math.floor(Math.random() * 16)];
  let str = '-'.repeat(36);
  return str.split('').map((ch, idx) => {
    if (DASH_IDX.includes(idx)) return ch;
    return getRandomChar();
  }).join('');
}

console.log(getUUID());