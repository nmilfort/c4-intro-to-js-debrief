//1. GenBuzz
// Create variable myNumber
let myNumber = 9;
// Check that the value of the myNumber is of type number
if(typeof myNumber === 'number'){
    console.log(myNumber + ' is a number');
// If myNumber is not a number, print 'This is not a number' to the console.
} else {
    console.log(myNumber + ' is not a number');
}
// If value of myNumber is a multiple of 3 print 'Gen' to the console
if (myNumber % 3 === 0) {
    console.log('Gen');
}
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
if (myNumber % 5 === 0) {
    console.log('Buzz');
}
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
}
// If the value of myNumber is any other number print the value of myNumber to the console.
if (!myNumber % 3 === 0 && !myNumber % 5 === 0) {
    console.log(myNumber);
}
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for GenBuzz below this line:
if(typeof myNumber === 'number'){
    console.log(myNumber + ' is a number');
} else {
    console.log(myNumber + ' is not a number');
}

if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
}
 else if (myNumber % 3 === 0) {
    console.log('Gen');
}
else if (myNumber % 5 === 0) {
    console.log('Buzz');
}
else {
    console.log(myNumber);
}






//2. E-COMMERCE ITEM LIST

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:




//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

let item = 'hats';
switch (item) {
  case 'shoes':
    console.log('shoes are $50');
    break;
  case 'jeans':
    console.log('jeans are $25');
    break;
  case 'hats':
    console.log('hats are $12');
    break;
  case 'socks':
    console.log('socks are $2');
    break;
  default:
    console.log('invalid item');
    break;
}

