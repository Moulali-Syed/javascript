let str = 'hello world';
let greet = `Hi ${str}`;
console.log(greet);
str = 'hello \n world';
// \n new line , \t tab space , \\ - 1st \ skips 2nd\ prints

//length
str.length;

//access by index number
str[3];

//concatenation
let str2 = 'applehellothere';
console.log(str + ' ' + str2);
console.log(str.concat(str2));

//substring
console.log(str2.substring(2, 7));
//substr
console.log(str2.substr(1, 5));

//indexof
console.log(str2.indexOf('a'));
console.log(str2.indexOf('p', 6)); //6 here is index position , if not found returns -1

//lastindexOf
console.log(str2.lastIndexOf('e'));

//trim
let str3 = '  hel  ';
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

//uppercase
console.log(str3.toUpperCase());
//lowercase
console.log(str3.toLowerCase());

//replace
console.log(str3.replace('h', 'g'));

console.log(str.includes('html')); //if not present false
