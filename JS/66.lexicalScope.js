//

function myApp() {
  const myvar = 'v1';
  function myfunc() {}
  const myFunc2 = () => {};
  const myFunc3 = () => {
    console.log('inside func3', myvar);
    myfunc();
  };
}

myApp();
