const MINS_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINS_IN_DAY = MINS_IN_HOUR * HOURS_IN_DAY;

function textToNumObject(time) {
  return time.split(":")
    .map(el => Number(el));
}

function beforeMidnight(time) {
  let [hours, mins] = textToNumObject(time);
  let totalMins = (hours * MINS_IN_HOUR) + mins;
  return (MINS_IN_DAY - totalMins) % MINS_IN_DAY;
}

function afterMidnight(time) {
  let [hours, mins] = textToNumObject(time);
  let totalMins = (hours * MINS_IN_HOUR) + mins;
  return totalMins % MINS_IN_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);