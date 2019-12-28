'use strict';

function makeNumber(str) {
  let res = str.match(/\d/g) || [];
  res = res.join('');

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

countNumbers('erer384jj4444666888jfd123');
