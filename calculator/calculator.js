module.exports = {
  add,
  subtract,
  multiply
};

function add(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function multiply(a, b) {
  if (!a && !b) return 0;
  if (!b) return a;
  return a * b;
}
