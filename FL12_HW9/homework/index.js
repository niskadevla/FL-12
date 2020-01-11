'use strict';
const num1 = 1,
    num2= 2,
    num3 = 3,
    num4 = 8,
    two = 2,
    three = 3;

//Task 1
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
  for(let i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}

executeforEach([num1,num2,num3], function(el) {
  console.log(el * two);
}); // logs 2 4 6


//Task 3
function mapArray(arr, f) {
  let newArr = [];

  executeforEach(arr, function(el) {
    newArr.push(f(+el));
  });

  return newArr;
}

console.log( mapArray([num2, '5', num3], el => el + three) ); // returns [5, 8, 6]


//Task 4
function filterArray(arr, f) {
  let newArr = [];

  executeforEach(arr, function(el) {
    if(f(el)) {
      newArr.push(el);
    }
  });

  return newArr;
}

console.log( filterArray([num2, num3, num4], function(el) {
  return el % two === 0;
}) ); // returns [2, 8]


//Task 5
function flipOver(str) {
  let newStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log( flipOver('hey world') ); // 'dlrow yeh'


//Task 6
function makeListFromRange(rang) {
  let newArr = [];

  for(let i = rang[0]; i <= rang[1]; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log( makeListFromRange([num2, num4]) ); // [2, 3, 4, 5, 6, 7, 8]


//Task 7
function getArrayOfKeys(arr, key) {
  let newArr = [];

  executeforEach(arr, function(el) {
    newArr.push(el[key]);
  });

  return newArr;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

console.log( getArrayOfKeys(actors, 'name') ); // [‘tommy’, ‘lee’]


//Task 8
function substitute(arr) {
  let lowerNum = 30;

  return mapArray(arr, function(el) {
    if(el < lowerNum) {
      return '*';
    }

    return el;
  });
}

//Task 9
function getPastDay(date, daysAgo) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - daysAgo);

  return newDate.getDate();
}


//Task 10
function formatDate(date) {
  const Ten = 10;
  let hh = date.getHours();
  let mm = date.getMinutes();

  hh = hh < Ten ? '0' + hh: hh;
  mm = mm < Ten ? '0' + mm: mm;

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} \
${hh}:${mm}`;
}


/* eslint-disable no-magic-numbers */
/* eslint-disable brace-style */

console.log( substitute([58, 14, 48, 2, 31, 29]) ); // [58, '*', 48, '*', 31, '*']

console.log('------');
const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)

console.log('------');
console.log( formatDate(new Date('6/15/2018 09:15:00')) ); // "2018/6/15 09:15"
console.log( formatDate(new Date()) ); // "2020/1/7 12:56" // gets current local time
