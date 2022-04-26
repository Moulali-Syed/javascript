/*
                     capacity    browsers           Accessible      expires             storage location            sent with requests
cookies               4kb         HTML4/HTML5       any window      manually set            browser and server          yes
localstorage          10mb          HTML5           any window      never                   browser only                no
session storage       5mb           HTML5           same window     on tab close            browser only                no
*/

localStorage.setItem('firstName', 'apple');
localStorage.setItem('location', 'shimla');

console.log(localStorage.getItem('location'));
localStorage.removeItem('location');

sessionStorage.setItem('name', 'mango');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');
