const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");


//String interpolation
//When you use backticks, you can use ${} to interpolate variables and expressions into a string.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
//Creates the String by calling the String constructor and generates the object
// and mapping of characters with the indexes.

 console.log(gameName[0]);
 //A way of accessing the prototype of the String and returns the object in return.
 console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));