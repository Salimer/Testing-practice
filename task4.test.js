const capitalise = require('./task4');

describe('task4', () => {
    test('Capitalise the first char of a string', () => {
        expect(capitalise('hello')).toBe('Hello');
    })
})