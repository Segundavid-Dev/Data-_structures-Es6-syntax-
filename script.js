"use strict";

// Destructuring - An ES6 feature and basically a way of unpacking value from an array or an object
// DESTUCTURING ARRAYS
// const resturant = {
//   name: "Classico Italiana",
//   location: "Via Angelo Tavanti 23, Firenze,  Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Brushchetta", "Garlic", "Bread", "Caperese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // Tradition method of retrieving element from an array
// const number = [1, 2, 3];
// const a = number[0];
// const b = number[1];
// const c = number[2];

// // Destruturing Method
// const [x, y, z] = number;
// console.log(x, y, z);
// console.log(number);

// // destructuring the resuturant model
// let [main, , secondary] = resturant.categories; // second element is skipped
// console.log(main, secondary);

// // switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterCourse, mainCourse] = resturant.order(2, 0);
// console.log(starterCourse, mainCourse);

// //Destructuring a Nested Array
// const nested = [2, 4, [5, 6]];
// const [nestedElement1, , [nestedElement2, nestedElement3]] = nested;
// console.log(nestedElement1, nestedElement2);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// DESTRUCTURING OBJECTS
const resturant = {
  name: "Classico Italiana",
  location: "Via Angelo Tavanti 23, Firenze,  Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic", "Bread", "Caperese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20: 00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingrident1, ingrident2, ingrident3) {
    console.log(
      `Here is your delicious pasta with ${ingrident1}, ${ingrident2} and ${ingrident3}`
    );
  },
};

// call the object methods
resturant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// Destructure objects
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

// This would be immensely useful when dealing with third party API
const {
  name: resuturantName,
  openingHours: hours,
  categories: tags,
} = resturant;

console.log(resuturantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating varibles while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  friday: { open, close },
} = openingHours;
console.log(open, close);

// Spread Operator
const arr = [7, 8, 9];
// create a new array based on the current array and add new arrays to the end of the array
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// SPREAD OPERATOR (...array)-- take all the values from an array and write it into a new array
const goodNewArray = [1, 2, ...arr];

console.log(...goodNewArray);

const newMenu = [...resturant.mainMenu, "Gnoccci"];
console.log(newMenu);

// use cases of the spread opearor

// - create shallow copeies of array
const mainMenuCopy = [...resturant.mainMenu];

// -merge two ahrrays together
const firstNames = ["ibrahim", "adebayo", "dalha"];
const lastNames = ["Segun", "Adekunle", "Salami"];

const mergeNames = [...firstNames, ...lastNames];
console.log(mergeNames);

// Spread Operator dosen't only work on array but can work on so called iterables
const str = "David";
// create an array containing each individual letters alongside other letters
const newStr = [...str, "", "S."];
console.log(newStr);

// Practical Examples
const ingridients = [
  prompt("Let's make pasta!Ingrident 1?"),
  prompt("Let's make pasta!Ingrident 2?"),
  prompt("Let's make pasta!Ingrident 3?"),
];

console.log(ingridients);
// call the objects methods with the spread operator
resturant.orderPasta(...ingridients); // destructs the array values into strings seperated by comma
