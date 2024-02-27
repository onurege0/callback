// function log(value) {
//   console.log(value);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// // let x = add(10, 20);
// // log(x);

// function divide (num1, num2) {
//     return num1 / num2;
// }

// function avrOut(num1, num2) {
//     return (num1 + num2) / arguments.length
// }

// function calculate(num1, num2, calculation, callback) {
//   let value = calculation(num1, num2)
//   callback(value);
// }

// // add(10, 40, log);

// calculate(15, 30, avrOut, log);

function getPositiveNums(element) {
  if (element >= 0 && !(element % 2)) {
    return true;
  }
}

// console.log(getPositiveNums([0, 1, 2, -4, 5, -6, 7, -8, 9, -10]));

function getNegativeNums(element) {
  if (element < 0 && element % 2) {
    return true;
  }
}

// console.log(getNegativeNums([0, -1, 2, -4, -5, -6, -7, -8, -9, -10]));

// function getNums(arr, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

function getNums(arr, callback) {
  const newArr = [];
  arr.forEach((element) => {
    if (callback(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

const nums = [0, 1, 2, 5, 4, 5, -6, -7, -8, 9, -10];
// console.log(getNums(nums, getPositiveNums));

// console.log(getNums(nums, (element) => element > 0));


//forEach
nums.forEach((element, index) => console.log(`${element}, ${index}`));
// console.log(nums.forEach((element) => (element + 2)));

//map
// const filteredByMapArr = nums.map((element) => element % 2 === 0);
// console.log(filteredByMapArr);

//filter
// const filteredNums = nums.filter((element) => element % 2 === 0);
// console.log(filteredNums);