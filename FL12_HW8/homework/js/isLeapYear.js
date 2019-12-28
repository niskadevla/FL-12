function isLeapYear(date) {
  let newDate;

  console.log(typeof date);

  if(typeof date === 'string') {
    newDate = Date.parse(date);
  } else if(typeof date === 'number') {
    newDate = new Date(date);
  }

  if(!newDate) {
    return 'invalid Date';
  }

  console.log(newDate);

  let year = newDate.getFullYear();

  if( (year % 4 === 0) && (year % 400 === 0) && (year % 100 !== 0) ) {
     return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

// let date = new Date(1212131);
// let date = Date.parse('2020-01-01T00:00:00');
console.log(isLeapYear('2020-01-01T00:00:00'));
// console.log(date.getFullYear());
