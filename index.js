console.log('apple');
console.log(1);
console.log(true);
console.log(null);
console.log([1, 2, 3]);
console.log({ name: 'apple', language: 'javascript' });

//prints the content in form table
console.table({ name: 'apple', language: 'javascript', tutorial: 2 });
/*
┌──────────┬──────────────┐
│ (index)  │    Values    │
├──────────┼──────────────┤
│   name   │   'apple'    │
│ language │ 'javascript' │
│ tutorial │      2       │
*/
//if expression is wrong then it will show console message as Assertion failed
console.assert(0 > 1, 'expression is false');
console.assert(1 > 0, 'expression is right');

//in chrome it will be high lighted in yellow color by default
console.warn('Hello');

//clears the console in vs code | in case of chrome it will show some text like console is cleared
console.clear();

console.time();
for (i = 0; i < 100; i++) {
  if (i == 99) {
    console.log(i);
  }
}

console.timeEnd();

//to log error messages
console.error('This is a simple error');

//count
for (i = 0; i < 4; i++) {
  console.count(i);
}

//group | groupEnd
console.group('simple');
console.log('grouped');
console.log('hello');
console.groupEnd('simple');
console.log('new section');
