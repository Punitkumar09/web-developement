const person ={
    name: "Punit",

    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    }
}

person.greet();

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name: "john"})
boundGreet();

// bind, call, and apply