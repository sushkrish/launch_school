let numbers = [1, 2, 3];
numbers[6] = 5; // No error
console.log(numbers); //[1,2,3,empty, empty, empty,5]
console.log(numbers[4]); // undefined