let today = new Date(); //current time and date in num of milliseconds since midnight of Jan 1, 1970 UTC.

today.getYear(); //deprecated as it returns year - 1900. 
today.getFullYear(); // currently recommended. SHould be used. 

console.log(today);
console.log(today.getYear());
console.log(today.getFullYear());
