// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// when two consecutive iifes are written then the second iife should be written in the paranthesis
// and the first iffe should end with the semicolon

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// iife is used to avoid the global scope pollution and to avoid the 
//conflicts between the variables and functions

