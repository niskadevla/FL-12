'use strict';

function makeNumber(str) {
  let res = str.match(/\d/g) || [];
  res = res.join('');

  return res;
}

makeNumber('fdf45gfgrf67');
