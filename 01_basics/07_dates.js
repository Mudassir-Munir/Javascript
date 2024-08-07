// Date and time in javascript

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,7,7,5,3); // in this syntax month start from 0
console.log(myCreatedDate.toLocaleString());

let anotherDate = new Date("07-08-2024");
console.log(myCreatedDate.toLocaleString());


// Time
let myTimeStamp = Date.now();

console.log(myTimeStamp);  // output will be in milliseconds
console.log(myCreatedDate.getTime()); // output will be in milliseconds
// convert into seconds
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDay());
console.log(myDate.getMonth());

// use this to customize date string 
console.log(myDate.toLocaleString('default',{
    weekday: "long",
}
));