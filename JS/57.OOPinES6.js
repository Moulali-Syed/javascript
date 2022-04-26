//class object inheritance

class person {
  constructor(n, a) {
    console.log('object created'); //whenever object is created it is called
    //main purpose
    this.name = n;
    this.age = a;
  }

  //this will directly go to prototype and attached
  sayHi() {
    console.log('hi...');
  }

  static sproperty = 'something';
  static hello() {
    console.log('static');
  }
}

let person1 = new person('apple', 2);
console.log(person1); //prototype will be attached

person1.sayHi();
//call static method    with class
person.hello(); //this will be inside the class only , so we cant see in prototype
console.log(person.sproperty);

class emp {
  constructor(n) {
    console.log('emp constructor called');
    this.name = n;
  }

  msg() {
    console.log('hi');
  }
}
//inheritance
class manager extends emp {
  constructor(p, d) {
    super(p); //calling parent constrcutor
    this.department = d;
  }
  msg() {
    console.log('manager msg');
  }
  info() {
    super.msg();
    this.msg();
    console.log(this.name + ' is manager of department ' + this.department);
  }
}
let mng1 = new manager('mango', 'fruit');
console.log(mng1);
console.log(mng1.msg());
console.log(mng1.info());

class admin extends manager {}

let admin1 = new admin('apple', 'shimla');
console.log(admin1);

class man {
  #city = ''; //to make private
  constructor(n, c) {
    this.name = n;
    this.#city = c; //to make private
  }
  getCity() {
    console.log(this.#city); //to access private
  }
  #getCity1() {
    console.log('know the city');
  }
  pubfun() {
    this.#getCity1();
  }
}
let man1 = new man('mango', 'ny');
console.log(man1.name);
console.log(man1.getCity()); //to access private
console.log(man1.pubfun());

// *************************
// mixin - to provide extra power to class

let useFulMethod = {
  sayHi() {
    console.log('hi');
  },
  sayBye() {
    console.log('bye');
  },
};
//if we want these above 2 methods in useFulMethod object inside user class
class user {
  constructor() {
    this.name = 'happy';
  }
}

Object.assign(user.prototype, useFulMethod);
let user1 = new user();
console.log(user1);

//we can do by inheritance
//but mixins main use is when we are inherting a class and then we need some other properties /methods also to be inherited
// then we can use mixin , using the Object.assign , for one class use extends , for other use the Object.assign syntax
