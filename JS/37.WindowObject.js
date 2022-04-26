console.log(window.innerHeight);
console.log(window.innerWidth);
//to get actual browser size
console.log(window.outerHeight);
console.log(window.outerWidth);

/*
<button id='btn1'>Google</button>
<button id='btn2'>Yahoo</button>
<button id='btn3'>Close</button>
*/

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let url = 'https://google.com';
let name1 = 'google';
let features = 'height=500,width=500';
let win;
btn1.addEventListener(click, function () {
  win = window.open(url, name1, features);
});
btn2.addEventListener(click, function () {
  window.open('https://www.yahoo.com', name1, features);
});

btn3.addEventListener(click, function () {
  win.close();
});

//the second parameter the name1 we r giving then this will help to open url in same window which is opened
