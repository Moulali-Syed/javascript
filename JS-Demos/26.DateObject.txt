let x = new Date(); //current date
let y = new Date(2022, 11, 1, 10, 22, 1); //year and month are important
console.log(x);
let z = new Date('October 13,2022');
console.log(z);

console.log(x.getTime());
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDay());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getDay());
console.log(x.getDate());

x.setFullYear(2021);
x.setMonth(2);
x.setDate(21);
x.setHours(1);
x.setMinutes(12);
x.setSeconds(20);

x.setDate(x.getDate() + 50);
//compare
if (x > y) {
  console.log('x is past date');
} else if (y > x) {
  console.log('y is past date');
} else {
  console.log('x is same date');
}
