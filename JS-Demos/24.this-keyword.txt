let person = {
  firstName: 'apple',
  lastName: 'Shimla',
  sayHello() {
    console.log('Hello I am ' + this.firstName + 'have a ' + car.brand + 'car');
  },
};

let car = {
  brand: 'tata',
  model: 'safari',
};

person.sayHello();
