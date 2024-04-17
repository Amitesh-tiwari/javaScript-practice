// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

 const newArr = myArr.join()
 //make the type of array to string

console.log(myArr);
console.log( newArr);
//gives the same value but in the form of stirng


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//slice does not include the last range in the array and 
//it does not change the original array.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//splice include the last range in the array and it also does
//the changes in the original array, it manipulates the original array.
