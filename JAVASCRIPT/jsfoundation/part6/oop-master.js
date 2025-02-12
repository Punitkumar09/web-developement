let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("john", 29);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.punit = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.punit());

// Inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}

let myCar = new Car("Maruti", "Brezza");

// console.log(myCar.drive());
// console.log(myCar.start());

let vehOne = new Vehicle("Hyundai", "Santro");

// console.log(vehOne.make);

//--------------------------------------------------------------------------------------------------------

// Encapsulation

class BankAccount {
  #balance = 1000;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    // call DB
    // Filter value
    return ` starting the machine`;
  }

  brewCoffee() {
    return ` Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguin can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

// Static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCal = new Calculator()
// console.log(miniCal.add(2,4));

// console.log(Calculator.add(2,4));

// Getter and Setter

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return ` you are not allowed to access salary `;
  }

  set salary(value) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    } else {
      this._salary = value;
    }
  }
}

let empOne = new Employee("Punit", 10000);
console.log(empOne._salary);
// empOne.salary = 50000
