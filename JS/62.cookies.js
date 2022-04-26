//application--> cookies--name,value pair we have cookie

document.cookie = 'item=milk;expires=Sat, 20 Mar 2022 12:00:00 UTC'; //stores in cookies
document.cookie = 'location:india';

//read cookie
let x = document.cookie;
console.log(x);

//to delete cookie give expiry date as previous date , it will get deleted
