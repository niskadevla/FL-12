'use strict';
//Task 1
let num1 = 1,
    num2= 2,
    num3 = 3,
    num4 = 8,
    two = 2,
    three = 3;

function convert() {
  let args = [];
  let arg;

  for(let i = 0; i < arguments.length; i++) {
    arg = arguments[i];

    if( Number.isFinite(arg) ) {
      arg = String(arg);
    } else if(typeof arg === 'string') {
      arg = Number(arg);
    }

    args[i] = arg;
  }

  return args;
}

console.log( convert('1', num1, num2, '4') );


//Task 2
function executeforEach(arr, f) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr[i] = f(arr[i]);
  }

  return newArr;
}

executeforEach([num1,num2,num3], function(el) {
  console.log(el * two);
}); // logs 2 4 6


//Task 3
function mapArray(arr, f) {

  return executeforEach(arr, f);
}

console.log( mapArray([num2, '5', num3], el => parseInt(el) + three) ); // returns [5, 8, 6]


//Task 4
function filterArray(arr, f) {
  let newArr = [];
  let arr2 = executeforEach(arr, f);

  for(let i = 0; i < arr.length; i++) {
    if(arr2[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log( filterArray([num2, num3, num4], function(el) {
  return el % two === 0;
}) ); // returns [2, 8]


//Task 5
