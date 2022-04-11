//the window object represents a window in browser containing DOM document
//the browser automatically creates  a window object
//the window is not the object of javascript , it is object of browser
//window object is used for close open alert prompt dialogs
/*

Properties

Explanation

width

 It specifies the initial width of the browser window.

height

 It specifies the initial height of the browser window.

innerWidth

 It specifies the initial width of the window content area

innerHeight

 It specifies the initial height of the window content area

outerWidth

 It specifies the initial width of the navigator window

outerHeight

 It specifies the initial height of the navigator window

menubar

 It specifies whether the window should contain the browser menubar

location

It specifies whether the window should contain the browser location/URL box

scrollbars

It hides or shows browser horizontal/vertical scrollbars

top

Specified the number of pixels from the top of the screen to the new window
*/
/*
Method

Description

alert()

It will display an alert box with a message on the screen

blur()

It will remove focus from the current window

close()

It will close the current window

confirm()

It will display a dialog box with a message on the screen

focus()

It will set the focus to the current window

moveTo()

It will move a window to the specified position

open()

It will open a new browser window

print()

It will print the content of the current window

prompt()

It will display a dialog box that prompts the user for input

resizeBy()

It will resize the window by the specified pixels

resizeTo()

It will resize the window to the specified height and width

scrollBy()

It will scroll the document by the specified number of pixels

scrollTo()

It will scroll the document to the specified coordinates

stop()

It will stop the window from loading
*/
let a1 = window.innerWidth;
let b = window.innerHeight;
alert('Width: ' + a1 + ', ' + 'Height: ' + b);

console.log('This is tut 11');
let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');

// a = confirm('Are you sure you want to delete this page?');
a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = location.toString();
a = window.history;
console.log(a);
