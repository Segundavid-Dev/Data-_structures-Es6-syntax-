"use strict";

// Destructuring - An ES6 feature and basically a way of unpacking value from an array or an object
const resturant = {
  name: "Classico Italiana",
  location: "Via Angelo Tavanti 23, Firenze,  Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic", "Bread", "Caperese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Tradition method of retrieving element from an array
const number = [1, 2, 3];
const a = number[0];
const b = number[1];
const c = number[2];

// Destruturing Method
const [x, y, z] = number;
console.log(x, y, z);
console.log(number);

// destructuring the resuturant model
let [main, , secondary] = resturant.categories; // second element is skipped
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterCourse, mainCourse] = resturant.order(2, 0);
console.log(starterCourse, mainCourse);

//Destructuring a Nested Array
const nested = [2, 4, [5, 6]];
const [nestedElement1, , [nestedElement2, nestedElement3]] = nested;
console.log(nestedElement1, nestedElement2);

// Default Values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
