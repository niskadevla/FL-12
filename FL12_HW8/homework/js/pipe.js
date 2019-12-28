'use strict';

function addOne(x) {
  return x + 1;
}

function pipe() {
  let res = arguments[0];

  for(var i = 1; i < arguments.length; i++) {
    res = arguments[i](res);
  }

  return res;
}

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3
