// global scope
let a = 300;
const b = 200
var c = 10;


// block scope ..... begin with {}
if (true) {
    let a = 10 // let keyword keeps local and global scope separate
    const b = 20 // const behaves same like let keyeword
    
    // NOTE: var updates variable value if it is already declared or initialized in global scope, so global scope value become updated by local scope,
    // that's why let is prefered to use with variables

    var c = 30  // var keyword does not differentiate global and local scope, it updates global value 
    // c = 30

    console.log("INNER a: ", a);
    console.log("INNER b: ", b);
    console.log("INNER c: ", c);
}


console.log(a);
console.log(b);
console.log(c);

