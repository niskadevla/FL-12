'use strict';

let a, b, c, d, x, x1, x2;
const kD = 4;
const kX = 2;

do {
  a = +prompt("imput 'a' for quadratic equation: ", '');

  if (!isFinite(a) || a === 0) {
    alert('Invalid input data');
  }
} while (!isFinite(a) || a === 0);

do {
  b = +prompt("imput 'b' for quadratic equation: ", '');

  if ( !isFinite(b) ) {
    alert('Invalid input data');
  }
} while ( !isFinite(b) );

do {
  c = +prompt("imput 'c' for quadratic equation: ", '');

  if ( !isFinite(c) ) {
    alert('Invalid input data');
  }
} while ( !isFinite(c) );

d = b * b - kD * a * c;

if (d < 0) {
  console.log('no solution');
} else if(d === 0) {
  x = -b / (kX * a);
  console.log(`x = ${x}`);
} else if(d > 0) {
  x1 = (-b + Math.sqrt(d)) / (kX * a);
  x2 = (-b - Math.sqrt(d)) / (kX * a);
  console.log(`x1 = ${x1} and x2 = ${x2}`);
}
