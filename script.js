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
  // prompt("Let's make pasta!Ingrident 1?"),
  // prompt("Let's make pasta!Ingrident 2?"),
  // prompt("Let's make pasta!Ingrident 3?"),
];

console.log(ingridients);
// call the objects methods with the spread operator
resturant.orderPasta(...ingridients); // destructs the array values into strings seperated by comma

// spread, because on right side of =
const array = [1, 2, ...[3, 4]];
console.log(array);
// REST OPERATOR
const [A, B, ...others] = [1, 2, 3, 4, 5];
console.log(A, B, others);

const [pizza, , Risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

// objects
const { saturday, ...weekdays } = resturant.openingHours;
console.log(weekdays);
// Creating a function to add an arbitrary number of arguments in the function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 4);

const x = [23, 5, 7];
add(...x);

console.log(3 || "Jonas");

// short circuiting -boolean values
// resturant.numGuest = 23;
const guess1 = resturant.numGuest ? resturant.numGuest : 10;
console.log(guess1);

// we can take advantage of short circuting
const guess2 = resturant.numGuest || 10;
console.log(guess2);

// short circuting AND operars
console.log("-----AND-----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

// Javascript Performance
// Avoid unnesscary variables
let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
// stop creating javascript variables uneccessary

// Delay Javascript loading

// Named indexes and numbered indexes
// debugger keyword
// arrow function

const hello = function () {
  return "hello world";
};

// arrow functions
const greetings = (name) => {
  `hello ${name}`;
};
// call function
greetings("david");

// Nullish collascing operator
// works with the idea of nullish values
// Nullish: null and undefined (NOT 0 or '')
const guessCorrect = resturant.numGuests ?? 10;
console.log(guessCorrect);

// nullish operator
const resturant1 = {
  name: "Capri",
  numGuests: 20,
};

const resturant2 = {
  name: "La piazza",
  owner: "Giovanni Rossi",
};

// OR operator
resturant2.numGuest = resturant1.numGuests || 10;
resturant2.numGuest = resturant2.numGuest || 10;

// OR assignment operator
resturant1.numGuests ||= 10;
resturant2.numGuests ||= 10;

// coding challenge

// destructuring the original array

// looping over arrays
const Menu = [...resturant.starterMenu, ...resturant.mainMenu];

// for of loop
for (const item of Menu) {
  console.log(item);
}

// iterate over each array, contains the element and poition of the array
for (const item of Menu.entries()) {
  console.log(item);
}

// Enhanced object literal
