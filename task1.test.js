const stringLength = require('./task1');
const reverseStr = require('./task2');

describe('Task 1', () => {
    test('"hello" should be 5', () => {
        expect(stringLength("hello")).toBe(5);
    });

    test('Empty string should return an error', () => {
        expect(() => stringLength('')).toThrow('Input string must be at least 1 character long.')
    })

    test('Sting longer than 10 chars should return an error', () => {
        const longStr = "what the hell is going on here"
        expect(() => stringLength(longStr)).toThrow('Input string must not be longer than 10 characters.')
    })
})

describe('Task2', () => {
    test('should return the reverse of a string', () => {
        expect(reverseStr('hello')).toBe('olleh');
    })
})
