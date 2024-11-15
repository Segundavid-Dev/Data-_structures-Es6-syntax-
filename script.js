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

// Practical Application
