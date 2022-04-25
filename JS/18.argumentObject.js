function add() {
  //here we have arguments array by default
  console.log(arguments.length);
}

add(5, 6); //2
add(5, 2, 1); //3

function add1() {
  //here we have arguments array by default
  if (arguments.length == 0) {
    console.log('No parameters passed');
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
  //console.log(arguments);
}

add1(5, 6);
add1(5, 2, 1);
