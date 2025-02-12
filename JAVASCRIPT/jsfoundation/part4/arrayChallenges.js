/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavours = ["green tea", "black tea" , "oolang tea"]

const firstTea = teaFlavours[0]

// console.log(firstTea);


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["Londan", 'tokyo', 'paris', 'new york']

const favoriteCity = cities[2]
// console.log(favoriteCity);



/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ['herbal tea', 'white tea', 'masala chai']
 
teaTypes[1] = "jasmin tea"
// console.log(teaTypes);



/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ['mumbai', 'sydney']
citiesVisited.push("berlin")
// console.log(citiesVisited);


/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ['chai', 'iced tea', 'matcha', 'earl grey']

const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);


/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ['green tea', 'oolong tea', 'chai']

// let var1 = 5
// let var2 = var1
// console.log(var2);

let softCopyTeas = popularTeas
// console.log(softCopyTeas);
// console.log(popularTeas);



/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ['Berlin', 'Singapore', "New York"]
let hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice()

topCities.pop()

// console.log([...hardCopyCities]);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ['Paris', 'Rome']
let asianCities = ["Tokyo", 'Bangkok']

let worldCities = europeanCities.concat(asianCities)  //concat used for merge array 

// console.log(worldCities);


/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl tea']

let menuLength = teaMenu.length
// console.log(menuLength);


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

const isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));