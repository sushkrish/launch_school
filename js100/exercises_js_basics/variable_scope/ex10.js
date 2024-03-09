const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

//firstname:'Jane', 'lastName 'Doe'. Only a is constant, not the properties of object referred to by a. 
