function textify(hours, mins) {
  if (hours < 10) {
    hours = '0' + String(hours);
  } else {
    hours = String(hours);
  }

  if (mins < 10) {
    mins = '0' + String(mins);
  } else {
    mins = String(mins);
  }

  return `${hours}:${mins}`;
}

function timeOfDay(time) {
  time %= (24 * 60);
  time = time < 0 ? (24 * 60) + time : time;
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  return textify(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");