"use strict";

// LECTURES
// array methods

let arr = ["a", "b", "c", "d", "e"];

// slice method -> returns a copy of th section of the array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));

// we can use the slice method to simply create a shallow copy of any array

console.log(arr.slice());

// SPLICE METHOD -> works same as the slice method but mutates the original array
// console.log(arr.splice(2));

// most use case of splice is to delete an element from an array
arr.splice(-1);
console.log(arr);

// REVERSE METHOD -> this method also mutates the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());

// CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters);

// JOIN METHODS ->
console.log(letters.join(" - "));

// AT METHOD
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// get last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.at(-1));
