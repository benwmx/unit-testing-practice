// Arrange
const Calculator = require('../functions/calculator');
const calculator = new Calculator();

// action & assert
describe('add() method', () => {
  test('add integers', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });
  test('add floats', () => {
    expect(calculator.add(1.5, 1.5)).toBeCloseTo(3);
  });
  test('passing none to the method', () => {
    expect(calculator.add()).toBe(NaN);
  })
});

describe('substract() method', () => {
  test('substract integers', () => {
    expect(calculator.substract(3, 1)).toBe(2);
  });
  test('substract floats', () => {
    expect(calculator.substract(4.5, 1.5)).toBeCloseTo(3);
  });
  test('passing none to the method', () => {
    expect(calculator.substract()).toBe(NaN);
  })
});

describe('divide() method', () => {
  test('divide integers', () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });
  test('divide floats', () => {
    expect(calculator.divide(4.5, 2)).toBeCloseTo(2.25);
  });
  test('passing none to the method', () => {
    expect(calculator.divide()).toBe(NaN);
  })
});

describe('multiply() method', () => {
  test('multiply integers', () => {
    expect(calculator.multiply(8, 5)).toBe(40);
  });
  test('multiply floats', () => {
    expect(calculator.multiply(4.25, 2)).toBeCloseTo(8.5);
  });
  test('passing none to the method', () => {
    expect(calculator.multiply()).toBe(NaN);
  })
});
