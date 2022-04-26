function sum(a, b) {
  return a + b;
}

sum(2, 3); //5

//it depends on user how many parameters user send
function sum1(...args) {
  console.log(args); //args will be array
  let res = 0;
  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }
  console.log(res);
}
sum1(2, 1, 2, 1, 4);
