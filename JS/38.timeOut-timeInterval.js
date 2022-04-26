let timeoutId = setTimeout(myFunc, 5000);
function myFunc() {
  alert('please subscribe');
}

clearTimeout(timeoutId);

var t1 = setInterval(fun, 2000);
function fun() {
  console.log('please subscribe');
}
clearInterval(t1);
