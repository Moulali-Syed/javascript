/*
Gets

Selector Syntax

Method

ID

#name

getElementById()

Class

.name

getElementsByClassName()

Tag

name

getElementsByTagName()

Selector (single)

 	
querySelector()

Selector (all)

 	
querySelectorAll()


*/
<h1 id="demo">Heading 1</h1>;
var x = document.getElementById('demo');
x.style.color = 'red';
x.className;
x.childNodes;
x.parentNode;
x.innerText = 'JavaScript Tutorial';
x.innerHTML = '<b>Harry is a good boy</b>';
/*
className: The className property sets or returns the class name of an element
childNodes: The childNodes property returns a collection of a node's child nodes.
parentNode: The parentNode property returns the parent node of the specified node.
innerText: The innerText property sets or returns the text content of the specified node.
innerHTML: The innerHTML property sets or returns the HTML content of an element.
*/
document.querySelector('#myclass');
document.querySelector('.myclass');
document.querySelector('li');
/*
Multi Element Selector
querySelectorAll()
getElementsByTagName()
getElementsByClassName()
*/
document.querySelectorAll('.heading');
document.querySelectorAll('p.animation ');
let mytag = document.getElementsByTagName('article');
for (let i = 0; i < mytag.length; i++) {
  mytag[i].style.border = '1px solid blue';
}
document.getElementsByClassName('demo').length;
<div class="add">
  <h2 class="add__title">title</h2>
</div>;
const component = document.querySelector('.add');
console.log(component);

console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"
