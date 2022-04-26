let book = ['advance js', 200, 500];
console.log(book[0]);
let [bookname, pages, price] = book;
console.log(bookname, pages, price);
//if variable is not found it will be undefined
let [bookname1, pages1, price1, author = 'apple'] = book;

let book1 = ['js', 200, 300, ['tech', 2022]];
let [bookn, price2, pages2, [publication, year]] = book1;
