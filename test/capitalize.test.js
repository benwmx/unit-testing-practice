const capitalize = require('../functions/capitalize');

describe('capitalize function', () => {
  test('should return a first-character capitalized string', () => {
    expect(capitalize('rachid')).toBe('Rachid');
    expect(capitalize('Rachid')).toBe('Rachid');
    expect(capitalize('RACHID')).toBe('Rachid');
    expect(capitalize('&@//]@^')).toBe('&@//]@^');
    expect(capitalize('r')).toBe('R');
    expect(capitalize('')).toBe('');
    expect(capitalize('0')).toBe('0');
  })
});