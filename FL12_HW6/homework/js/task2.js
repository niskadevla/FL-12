'use strict';

let a, b, c;

do {
  a = +prompt("imput 'a' for triangle side: ", '');

  if ( !Number.isInteger(a)) {
    alert('input values should be ONLY numbers and integer: ');
  } else if(a <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
  }

} while (!Number.isInteger(a) || a <= 0);

do {
  b = +prompt("imput 'b' for triangle side: ", '');

  if ( !Number.isInteger(b) ) {
    alert('input values should be ONLY numbers and integer:');
  } else if(b <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
  }
} while ( !Number.isInteger(b) || b <= 0);

do {
  c = +prompt("imput 'c' for triangle side: ", '');

  if ( !Number.isInteger(c) ) {
    alert('input values should be ONLY numbers and integer:');
  } else if(c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
  }
} while ( !Number.isInteger(c) || c <= 0 );

let sides = {
  [a]: a,
  [b]: b,
  [c]: c
};

let amountDifSides = Object.keys(sides).length;
let side1 = 1,
    side2 = 2,
    side3 = 3;

if( a + b > c && a + c > b && b + c > a ) {
  switch (amountDifSides) {
    case side1: console.log('Equilateral triangle'); break;
    case side2: console.log('Isosceles triangle'); break;
    case side3: console.log('Scalene triangle'); break;
    default: break;
  }
} else {
  alert('Triangle doesn’t exist');
}
