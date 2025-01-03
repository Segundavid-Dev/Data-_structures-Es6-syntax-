"use strict";

// perform data manipulationl
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let transformArray = users.filter((item) => item.id < 3);
console.log(transformArray);

// array map methods
let lengths = ["Gadaffi", "Tinubu", "Olusheye"];

console.log(lengths.map((item) => item));

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current);
console.log(result);
