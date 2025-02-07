const userEmail = [];

if (userEmail) {
    console.log("got user email")
} else {
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, 0n, BigInt, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function (){}

if (userEmail.length === 0) {
    console.log("empty array")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

// Nullish Coalescing Operator (??): null, undefind
let val1 
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator
// condition ? true : false

const price = 100

price <= 80 ? console.log("price is less than 100") : console.log("price is more than 80");