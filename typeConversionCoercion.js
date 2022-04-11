//conversion of one datatype to another datatype is known is as type conversion
console.log(Number(undefined)); //NaN

console.log(Number(null)); //0

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Number('123')); //123
console.log(Number('12a21')); //NaN

console.log(Number(' ')); //0

console.log('________________________________________');
//Boolean type conversion
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(-12)); //true
console.log(Boolean(100)); //true
console.log(Boolean('apple')); //true
console.log(Boolean(' ')); //true
console.log(Boolean('')); //false

// String Conversion
let res = 100;
console.log(typeof String(res)); //string
console.log(res.toString());

// parseInt and parseFloat
console.log(parseInt('$100 dollars')); //NaN
console.log(parseInt('+10.25 kg')); //10
console.log(parseFloat(' +10.25 kg ')); //10.25
console.log(parseFloat('ABC')); //NaN

//implicit conversion
let res1 = 3;
res1 = 3 + 'apple';
console.log(res1); //3apple

let a = '3';
console.log(a + true); //3true
console.log(a + null); //3null

//Conversion to Number
let res2;
console.log('4' - '4'); //0
console.log('4' * 5); //20

//Boolean conversion
console.log(5 - true); //4
console.log('5' - true); //4
console.log(10 + false); //10

console.log(4 + null); //4
console.log(4 - undefined); //NaN

let num1 = 312.1234;
console.log(num1.toFixed(2), typeof num1); //312.12 number

let date = new Date();
console.log(String(date)); //Mon Apr 11 2022 15:14:20 GMT+0530 (India Standard Time)
