function getMin() {
  let min = 0;

  for(var i = 0; i < arguments.length; i++) {
    min = arguments[i] < min ? arguments[i] : min;
  }

  return min;
}

getMin();
