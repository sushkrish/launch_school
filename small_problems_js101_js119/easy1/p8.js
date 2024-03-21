function isLeapYear(year) {
  let div4 = (year % 4 === 0);
  let div100 = (year % 100 === 0);
  let div400 = (year % 400 === 0);

  let leap = div4 && (!div100 || div400);
  console.log(leap);

  return leap;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true