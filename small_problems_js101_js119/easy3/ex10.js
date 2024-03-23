function centurySuffix(num) {
  let last2Digits = num % 100;
  if ([11,12,13].includes(last2Digits)) return "th";

  let lastDigit = num % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return 'rd';
    default:
      return "th";
  }
}

function century(year) {
  let cent = Math.ceil(year / 100);
  return String(cent) + centurySuffix(cent);
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");