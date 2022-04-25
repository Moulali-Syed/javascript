console.log(Math.PI);

console.log(Math.E); //elures number
var x = 4.7;
console.log(Math.round(x)); //5
console.log(Math.ceil(x)); //5
console.log(Math.floor(x)); //4
console.log(Math.trunc(x)); //4 removes point after digits

console.log(Math.pow(10, 3)); //1000
console.log(Math.sqrt(4)); //2

console.log(Math.min(1, 23, 4, 2, 4)); //1
console.log(Math.max(23, 23, 13232, 9)); //13232

//Random Number

console.log(Math.random()); //gives a random number between 0 and 1

let y = Math.random();
//generate 0 to 9
console.log(Math.floor(Math.random() * 10)); //0 t0 9

console.log(Math.floor(Math.random() * 11)); //0 to 10

console.log(Math.floor(Math.random() * 10) + 1); //1 to 10

//generate 15 to 24
let z = Math.floor(Math.random() * (25 - 15)) + 15;

function getRandom(min, max) {
  let x = Math.floor(Math.random() * (max - min)) + min;
  return x;
}
console.log(getRandom(10, 20)); //10 is included but 20 is not included

function getRandom1(min, max) {
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
}
console.log(getRandom(10, 20)); //10 ,20 is included
