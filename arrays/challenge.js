// challenge -> So help me God......

//test data 1
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

//test data 2
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (data1, data2) {
  const copyData = data1.slice(); // create a shallow copy
  // remove the first and last 2 dogs from the coped data
  copyData.splice(0, 1);
  copyData.splice(-2);
  console.log(copyData);

  // create an array to store both data
  const bothData = copyData.concat(data2);
  console.log(bothData);

  // run function for the dataSets
  bothData.forEach(function (element, i) {
    if (element >= 3) {
      console.log(
        `Dog Number ${i + 1} is an adult, and is ${bothData[i]} years old`
      );
    } else {
      console.log(
        `Dog Number ${i + 1} is a puppy, and is ${bothData[i]} years old`
      );
    }
  });
};

// call the function output
checkDogs(juliaData, kateData);

// call the functions
