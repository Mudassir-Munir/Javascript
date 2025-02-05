
// -------------------- USE OF THIS KEYWORD ----------------------------
const user = {
    username: "mudassir",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome!`) // this will refer to context/scope
        //console.log(this)// this will show whole object/scope
    }
}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this) // here this will be empty object but it in browser it will window object


function randomfunc() {
    let username = "mudassir"
    console.log(this) // this will contain enough info

    console.log(this.username) // this will show undefind, here(in functions) this will not work, this will work with objects
}

randomfunc();

// ------------------- ARROW FUNCTIONS --------------------------

const myFunction = () => {
    let username = "mudassir"
    console.log(this) // it will return empty object, note in regular function this contain some info but in arrow functions this will be empty object

    console.log(this.username) // this will show undefind, here(in functions) this will not work, this will work with objects

}

myFunction();

const addTwoNums = (n1, n2) => n1 + n2 

// implicit return
//const addTwoNums = (n1, n2) => (n1 + n2) 

// return object (use curly brackets within braces)
const returnUser = () => ({username:"mudassir"});

console.log(addTwoNums(1,2));
console.log(returnUser());

// const myArray = [1,2,3,4]
// use case of arrow functions
// myArray.forEach(arrow funcs are used here mostly) 