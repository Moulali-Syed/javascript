let myStr = 'Javascript is awesome';
console.log(myStr.charAt(7)); //i

console.log(myStr.concat(' really')); //Javascript is awesome really

//if found returns the first index position of the search field
console.log(myStr.indexOf('s')); //4
//if not found returns -1
console.log(myStr.indexOf('z')); //-1
console.log(myStr.indexOf('i'), 10); //7 10

console.log(myStr.slice(3)); //ascript is awesome
console.log(myStr.slice(3, 7)); //ascr

console.log(myStr.split('')); //returns array
/*[
  'J', 'a', 'v', 'a', 's',
  'c', 'r', 'i', 'p', 't',
  ' ', 'i', 's', ' ', 'a',
  'w', 'e', 's', 'o', 'm',
  'e'
] */

console.log(myStr.substring(0, 1)); //J
console.log(myStr.substring(3, 8)); //ascri

console.log('apple'.toUpperCase());
console.log('Apl'.toLowerCase());

console.log(myStr.search('is')); //11

console.log(myStr.substr(7, 6)); //ipt is

//template literal
console.log(`hello ${2 + 2} there`); //hello 4 there

console.log(myStr.includes('is')); //true
console.log(myStr.split(' ')); //[ 'Javascript', 'is', 'awesome' ]

console.log(myStr.replace('s', 'z')); //Javazcript is awesome [only first occurence]
console.log(myStr.replaceAll('s', 'z')); //Javazcript iz awezome
