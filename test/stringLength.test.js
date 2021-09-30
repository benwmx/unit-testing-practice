const stringLength = require('../functions/stringLength');

describe('stringLength', () => {
  test('length of a string', () => {
  expect(stringLength('rachid')).toBe(6);
});

test('string length <=10 && >= 1', () => {
  expect(() => stringLength('')).toThrow(Error);
});
});
