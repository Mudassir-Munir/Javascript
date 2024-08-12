// Arrays
// Array operation are shallow copy(share reference) instead of deep copy(don't share reference)

const myArray = [0,1,2,3,4,5];
const myHeros = ["Shaktiman", "Neeraj"];

const myArray2 = new Array(1,2,3,4);

// Array methods

myArray.push(6);
myArray.push(7);
myArray.pop();

myArray.unshift(6); // add element at 0th index of array
myArray.shift();    // removes element at 0th index of arrat

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArr = myArray.join(); // return array values as comma separated string

console.log(myArray);
console.log(newArr);

// slice , splice
console.log(" A", myArray);
const myn1 = myArray.slice(1,3); // don't manipulates original array, extract portion with end range exclusive
console.log(myn1);

console.log(" B", myArray);
const myn2 = myArray.splice(1,3); // changes original array and end range is inclusive as well
console.log(myn2);
console.log(" C", myArray);


//--------------------------------Concat Arrays----------------------------
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


const another_array = [1,2,3, [4, 5], 6, [6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Mudassir"))
console.log(Array.from({name:"Mudassir"})) // this will return empty array as we need to specify make array based on keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

