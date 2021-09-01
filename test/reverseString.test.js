const reverseString = require('../functions/reverseString');

test('reverse a string', () => {
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('aaa')).toBe('aaa');
  expect(reverseString('')).toBe('');
  expect(reverseString(' ')).toBe(' ');
  expect(reverseString('a')).toBe('a');
  expect(reverseString('//,//')).toBe('//,//');
  expect(reverseString('a a ,a')).toBe('a, a a');
});