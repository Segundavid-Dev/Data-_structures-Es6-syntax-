"use strict";

// list in javascript -> a list in javascript is a nested set of  object where the first object hold reference to the second, the second to the third and so on

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const arrayToList = function (a, b, c) {
  let array = [a, b, c];
  return array;
};

const output = arrayToList(1, 2, 3);
console.log(new Array(output));

let list2 = {
  value: output[0],
  rest: {
    value: output[1],
    rest: {
      value: output[3],
    },
  },
};

console.log(list2);
