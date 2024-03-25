function dms(angle) {
  let degrees = parseInt(angle, 10);
  let minutes = (angle - degrees) * 60;
  let seconds = (minutes - parseInt(minutes, 10)) * 60;
  let result = `${degrees}˚${minutes.toFixed()}'${seconds.toFixed()}"`;
  console.log(result);
  return result;
  //Note result is not formatted per expectation.
}

console.log(dms(30) === "30°00'00");
console.log(dms(76.73) === "76°43'48");
console.log(dms(254.6) === "254°35'59");
console.log(dms(93.034773) === "93°02'05");
console.log(dms(0) === "0°00'00");
console.log(dms(360) === "360°00'00");