const name = "mudassir"
const repoCount = 25

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`)

// 2nd method to declare and initiaze string
const gameName = new String('mudassir-hc-com')

//console.log(gameName[0])
//console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const url = "https://mudassir.com/mudassir%20munir"

console.log(url.replace('%20', '-'));
console.log(url.includes('mudassir'));
console.log(gameName.split('-'));