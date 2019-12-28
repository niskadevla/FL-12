'use strict';

function makeNumber(str) {
  let res = '';

  for(var i = 0; i < str.length; i++) {
    for(var k = 0; k < 10; k++) {
      if(+str[i] === k) {
        res += k;
        break;
      }
    }
  }

  return res;
}

function countNumbers(str) {
  if(!str) {
    return {};
  }

  let numbers = makeNumber(str);
  let obj = {};

  for(let char of numbers) {
    obj[char] = ++obj[char] || 1;
  }

  return obj;
}

console.log( countNumbers('erer384jj4444666888jfd123') );
