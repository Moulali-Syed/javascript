console.log('Welcome to tutorial number 23');
let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34, 234, 2342, 34);
z = Math.max(2, 3, 34, 234, 34);
z = Math.random();
z = 100 * Math.random();
z = Math.ceil(50 + (100 - 50) * Math.random());
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

console.log(z);

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3

let d = new Date();
let d1 = new Date(milliseconds);
let d2 = new Date(dateString);
let d3 = new Date(year, month, day, hours, minutes, seconds, milliseconds);

let mydate = new Date();
mydate.setHours(0);
alert(mydate);
mydate.setHours(0, 0, 0, 0);
alert(mydate);
