     
// sigleton
// made only using constructor (Objet.create)

// object literals

// declare symbol
const mySym = Symbol('key1')
    
const jsUser = {
    name: "Mudassir",
    email:"mudassir@google.com",
    age: 25,
    location:"islamabad",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"],
    [mySym]: "mykey1"                      // to use symbol in object key we need brackets around key
}


 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser[mySym])  // to get symbol value use brackets access method

 jsUser.email = "mudassir@yopmail.com"
 console.log(jsUser)
 //Object.freeze(jsUser) // now object values will not change
 jsUser.email = "mudassir@microsoft.com"
 console.log(jsUser)

 jsUser.greeting = function(){
    console.log("Hello User")
}

 console.log(jsUser.greeting)   // function return back
 console.log(jsUser.greeting())

 jsUser.greetingTwo = function(){
  console.log(`Hello user ${this.name}`) // use this to reference same object
}
 
 console.log(jsUser.greetingTwo())

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1"
tinderUser.name = "asif"
tinderUser.isLoggedIn = false

console.log(tinderUser)


const regularUser = {
 email:"mudassir@yopmail.com",
 fullname: {
    userfullName:{
        firstname:"mudassir",
        lastname:"munir"
}
}
}

console.log(regularUser.fullname?.userfullName.firstname)


// combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


//const obj4 = Object.assign(obj1, obj2, obj3, obj4)
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)

// way 2
 const obj5 = {...obj2, ...obj3}

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

