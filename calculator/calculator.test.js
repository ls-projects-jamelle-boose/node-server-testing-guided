const calculator = require('./calculator');
const { add, subtract, multiply } = calculator;

// TODO HERE'S A NEW TEST
xit('runs the test', () => {
  //assertions (something that something should do)
  // also "expected this to be this"
  expect(true).toBe(true);
});

//TODO LET'S SETUP A TEST SUITE
// a test suite is a collection of related test
describe('calculator', () => {
  describe('add method', () => {
    it('should add two numbers', () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 1)).toBe(3);
      expect(add(-2, 4)).toBe(2);
    });
    it('should return 0 on no arguments', () => {
      expect(add()).toBe(0);
    });
  });
  describe('subtract method', () => {
    it('should subtract two numbers', () => {
      expect(subtract(10, 5)).toBe(5);
    });
    it('should return 0 on no arguments', () => {
      expect(subtract()).toBe(0);
    });
  });
  describe('multiply method', () => {
    it('should multiply two numbers', () => {
      expect(multiply(10, 5)).toBe(50);
    });
    it('should return first argument on one argumment', () => {
      expect(multiply(5)).toBe(5);
    });
    it('should return 0 on no arguments', () => {
      expect(multiply()).toBe(0);
    });
  });
  // describe('the multiply method', () => {});
});
// test runner = library that runs the test

// assertion library = library that handles the test cases, handles the details (i.e. jest which does both)

// what should happen on no arguments?
// what about one argument?
// what about many?
