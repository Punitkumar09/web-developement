function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Mahindra", "Scorpio");

// console.log(myCar);

let myNewCar = new Car("Maruti", "Brezza");

// console.log(myNewCar);

function tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of tea ${this.type}`;
  };
}

let lemonTea = new tea("lemon tea");

// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");

// console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called new keyword");
        
    }
    this.name = name
}
 
let Tea = new Drink("tea")
let coffee = new Drink("coffee")