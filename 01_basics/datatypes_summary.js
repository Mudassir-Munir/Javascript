// Primitive (By Value)

// There are 7 primitive data types i.e
// String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // this will return false because Symbol returns unique value

const bigNumber = 3423443424244209099009n


// Non Primitive (By Reference)

// There are 3 types
// Objects, Arrays, Functions

const heros = ["shaktiman", "superhero", "doga"]

let myObj = {
    "name":"mudassir",
    "age": 26
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp); // this will be object because null has type i.e object, use this to check type of any variable.
// non primitive data types will be returned as objects for all e.g for function it will be function object.


// Return type of variables in JavaScript

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object