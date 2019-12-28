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

console.log( makeNumber('0f1df45g6ffzfgrf67') );
