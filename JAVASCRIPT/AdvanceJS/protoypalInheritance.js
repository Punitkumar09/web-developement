function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, My Name is  ${this.name}`);
}

let punit = new Person("punit");
punit.greet();