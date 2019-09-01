function add(a) {
  return (b) => { return a + b};
}

function subtract(a) {
   return (b) => { return a - b};
}

function multiply(a, b) {
   return (b) => { return a * b};
}

function apply(fn) {
  return fn;
}
