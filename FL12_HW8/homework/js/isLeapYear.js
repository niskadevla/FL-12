function isLeapYear(date) {
  let newDate = new Date(date);

  let year = newDate.getFullYear();
  if(!year) {
    return 'invalid Date';
  }

  if( (year % 4 === 0) && (year % 100 !== 0) ||
      (year % 400 === 0) ) {
     return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log( isLeapYear('2021-01-15 13:00:00') );
