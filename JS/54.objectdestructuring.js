let book1 = {
  name: 'js',
  page: 200,
  price: 300,
  publication: {
    pub_name: 'ES',
    year: 2022,
  },
};

console.log(book1.name);

let { name, page, price } = book1;
console.log(name, page, price);

let {
  name: title,
  page1,
  price1 = 200,
  publication: { pub_name: pub, year },
} = book1;
console.log(title, page1, price1, pub, year); //key must be same as in  object definition
