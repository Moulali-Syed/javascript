//DOM is API for manipulating HTML and XML
//when webpage is loaded , browser makes a tree structure called DOM Tree- main root is document
//to manipulate anything in webpage we use document object

//Select element by id
const ele = document.getElementById('idHere');
console.log(ele);
//if not present returns null

//chnage text
document.getElementById('idHere').innerHTML = 'apple';

//select element by className[//returns array]
let elem = document.getElementsByClassName('classname');
console.log(elem);
console.log(elem.length);
for (let i = 0; i < elem.length; i++) {
  elem[i].innerHTML = '<p>hello</p>';
}

//select by tagName
let eleme = document.getElementsByTagName('tagName');
for (let i = 0; i < eleme.length; i++) {
  eleme[i].innerHTML = '<p>hey</p>';
}

//query selector[first matching will be selected]

document.querySelector('p').innerHTML = 'apple'; //select first paragraph element
document.querySelector('p.intro'); //paragraph with intro class

//querySelectorAll
document.querySelectorAll('p');

//traversing elements
let ele1 = document.getElementById('idHere');
let parent = ele1.parentElement;
parent.innerHTML = 'helo';

let child = ele1.firstElementChild;
let lastChild = ele1.lastElementChild;

let children = ele1.children;

//sibling selection
ele1.nextElementSibling;
ele1.previousElementSibling;

//change HTML with javascript
let e1 = document.getElementById('idhere');

let content = e1.innerHTML;
console.log(content);
e1.innerHTML = '<h2>Happy</h2>';

//create and append element in javascript
let h1 = document.createElement('h1');
let text = document.createTextNode('this is h1 tag'); //add content by method
h1.appendChild(text);
document.getElementById('intro').appendChild(h1);

h1.className = 'try p'; //adds 2 classes
h1.id = 'intro1'; //adds id

//to append to body
document.body.appendChild(h1);

//we can also add text by property
h1.textContent = 'content addded';

let para = document.getElementById('p1');
console.log(para.textContent); //we can read also

//insert before an element - we should tell its position
let e = document.getElementById('idHer');
let position = e.firstElementChild;
e.insertBefore(document.createElement('p'), position);

let parent1 = document.body;
let e11 = document.createElement('h2');
e11.textContent = 'this is new element';
let list = document.getElementById('list');
parent.insertBefore(e11, list);

//remove child element
let parent2 = document.getElementById('menu');
let e2 = parent2.firstElementChild;
parent2.removeChild(e2);

document.body.removeChild(parent2);

//clone or copy element
let menu = document.getElementById('menu');
let cloneElm = menu.cloneNode(true); //if we write true all its child will also be cloned , if not given only parent is cloned
cloneElm.id = 'mobile';
console.log(cloneElm);

//Replace Element
let parent3 = document.getElementById('menu');
let item1 = document.createElement('li');
item1.textContent = 'services';
let replace = parent3.firstElementChild.nextElementSibling;
parent3.replaceChild(item, replace);

//insert adjacent html
let ele4 = document.getElementById('intro');
let html = '<h1>new h1</h1>';
ele4.insertAdjacentElement('beforebegin', html);
ele4.insertAdjacentElement('beforeend', html);
ele4.insertAdjacentElement('afterbegin', html);
ele4.insertAdjacentElement('afterend', html);

//chnage attribute
let btn = document.getElementById('btn');
btn.setAttribute('class', 'form1');
console.log(btn.getAttribute('class'));
btn.removeAttribute('class');
btn.hasAttribute('class'); //return true or false

//change inline style in javascript
let btn1 = document.getElementById('idher');
btn.setAttribute('style', 'color:white;font-size:20px');
btn.style.color = 'red';
btn.style.cssText = 'background:red;border:1px solid red;';

//get computed CSS in javascript
let btn2 = document.getElementById('idher');
let css = getComputedStyle(btn2);
console.log(css);
console.log(css.color);

//change css classes in javascript
let box = document.getElementById('box');
console.log(box.className);
box.className += ' dim';
box.classList.add = ' dim1';
for (let css of box.classList) {
  console.log(css);
}

box.classList.remove('dim');

box.classList.replace('color', 'dim');

let result = box.classList.contains('color');

box.classList.toggle('dim');

//get height and width of element
let box1 = document.getElementById('box');
let width = box1.offsetWidth;
let height = box1.offsetHeight;
//removes border
let width1 = box1.clientWidth;
let height1 = box1.clientHeight;

//DOM Events
//DOM events are actions that occur as a result of useer action or as result of state change
//of elements of a DOM tree. user clciks mouse,webpage load ...

//onclick event
/*
<button id='btn' onclick="btnClick()">click</button>
<button id='btn' ">click1</button>
*/
function btnClick() {
  alert('btn clicked');
}
let btn3 = document.getElementById('btn');
btn3.addEventListener('click', btnClick);
btn3.addEventListener('click', function () {
  alert('btn cicked');
});

btn3.addEventListener('mouseover', function () {
  alert('mouse over is activated');
});

btn3.addEventListener('mouseout', function () {
  alert('mouse out');
});

//remove event listener
function click1() {
  console.log('click 1 activated');
}
function click2() {
  console.log('click 2 activated');
}

btn3.addEventListener('click', click1);
btn3.addEventListener('click', click2);

btn3.removeEventListener('click', click2);

//page load events in js
//when external files not fully loaded
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM tree created');
});

window.addEventListener('load', function () {
  console.log('fully loaded');
});

//Mouse events
//<div id='box' onclick='fun()'></div>
//<div id='box' oncontextmenu='fun()'></div>[on right click of mouse]
// ondblclick='fun()'
// onmousedown='fun()'
//onmouseup='fun()'
//onmouseover='fun()'
//onmouseout='fun()'
function fun() {
  alert('clcik');
}

//keyboard events
//keydown event[keydown,keyup]
window.addEventListener('keydown', checkkey);
function checkkey(e) {
  console.log(e.key);
}

//scroll events
window.addEventListener('scroll', function () {
  console.log('scrolling');
});

window.addEventListener('wheel', function (e) {
  if (e.deltaY < 0) {
    console.log('scrolling up');
  } else if (e.deltaY > 0) {
    console.log('scrolling down');
  }
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 50) {
    document.body.style.background = 'red';
  } else {
    this.document.body.style.background = 'white';
  }
});

//form input event
/*
<form action="">
  <input type="text" id='myInput'/>
</form>
*/
let x = document.getElementById('myInput');
x.addEventListener('focus', myFocusFunc);
x.addEventListener('blur', myBlurFunc);

x.addEventListener('change', function () {
  console.log(this.value);
});
x.addEventListener('input', function () {
  console.log(this.value);
});
function myFocusFunc() {
  x.style.background = 'yellow';
}
function myBlurFunc() {
  x.style.background = 'white';
}
