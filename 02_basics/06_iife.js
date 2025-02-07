// Immediately Invoked Functions Expressions


(function myFunction() {
    // named IIFE
    console.log("name iife");
})(); // semi colon is mandatory at the end when next function is iife

((name) => {
    console.log(`my name is ${name}`)
})('mudassir')

// write function within () i.e iife