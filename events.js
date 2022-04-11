/*
Events are actions that happen in the webpage like clicking a button or submit the form. 
If the user selects a button on a webpage, we might want to respond to that action by displaying an alert on the webpage. 
Each available event has an event handler, which is a block of code that runs when the event occurred. 
Event handlers are sometimes called event listeners.
*/
/*
Event Properties and Methods:-
Property/Method

Description

altKey

It will return whether the "ALT" key was pressed when the mouse event was triggered.

button

It will return which mouse button was pressed when the mouse event was triggered.

charCode

It will return the Unicode character code of the key that triggered the onkeypress event.

clientX

It will return the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

clientY

It will return the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

code

It will return the code of the key that triggered the event.

deltaX

It will return the horizontal scroll amount of a mouse wheel (x-axis).

deltaY

It will return the vertical scroll amount of a mouse wheel (y-axis).

deltaZ

It will return the scroll amount of a mouse wheel for the z-axis.

detail

It will return a number that indicates how many times the mouse was clicked.

keyCode

It will return the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.

location

It will return the location of a key on the keyboard or device.

pageX

It will return the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

pageY

It will return the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

screenX

It will return the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered.

screenY

It will return the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered.

shiftKey

It will return whether the "SHIFT" key was pressed when an event was triggered.

type

It will return the name of the event.

which

It will return which mouse button was pressed when the mouse event was triggered.

view

It will return a reference to the Window object where the event occurred.

 


*/
console.log('This is tutorial 17 on events');

document.getElementById('heading').addEventListener('click', function (e) {
  let variable;
  console.log('You have clicked the heading');
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){

//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document
  .querySelector('.container')
  .addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event');
  });

//   to find all links in a page
let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
