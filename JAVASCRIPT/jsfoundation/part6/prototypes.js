let computer = {
    cpu: 15,
    ram: "14GB"
    
}

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomHardware = {}

// console.log(`lenovo`, lenovo.__proto__);

let genericCar = { tyres: 4}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));

