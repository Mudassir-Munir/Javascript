let score = "one"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // conversion will be done for every type of value but converted value should be validated it contains Nan or 0 for some cases to Number conversion
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// output 
// "33" will be converted to 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "mudassir"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// output
// 1 => true; 0 => false
// "" => false
// "mudassir" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber)); // it will be string i.e 33
