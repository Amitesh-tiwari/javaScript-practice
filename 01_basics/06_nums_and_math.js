const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));
 //rerurns the number with the precision of 4 digits in the form 
 //of string.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//Locale String is used to represent the zeros with commas 
//for better representation of the number.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
//gives the random numners between 0 and 1.
console.log((Math.random()*10) + 1);
//we multiply it by 10 to shift the digits to left side to
//increase the range and 1 is added bcoz value can be 0.04 so +1 will never let it be 0.
console.log(Math.floor(Math.random()*10) + 1);
//returns the floor value from the random valude.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)