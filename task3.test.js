const calculator = require('./task3');

describe('Add method', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('adds 50 to 5 to equal 55', () => {
        expect(calculator.add(50,5)).toBe(55);
    })
    test('adds 50 to 50 to equal 100', () => {
        expect(calculator.add(50,50)).toBe(100);
    })
});

describe('Subtract method', () => {
    test('subtracts 5 from 50 to equal 45', () => {
        expect(calculator.subtract(50,5)).toBe(45);
    })
    test('subtracts 50 from 5 to equal -45', () => {
        expect(calculator.subtract(5,50)).toBe(-45);
    })
    test('subtracts 50 from 50 to equal 0', () => {
        expect(calculator.subtract(50,50)).toBe(0);
    })
});

describe('Divide method', () => {
    test('divide 100 by 5 to equal 20', () => {
        expect(calculator.divide(100,5)).toBe(20);
    })
    test('divide 0 by any number to equal 0', () => {
        expect(calculator.divide(0,4)).toBe(0);
    })
    test('divide any number by 0 to get infinity', () => {
        expect(() => calculator.divide(4,0)).toThrow('result is infinity');
    })
});

describe('Multiply method', () => {
    test('multiply 5 with 5 to equal 25', () => {
        expect(calculator.multiply(5,5)).toBe(25);
    })
    test('Assure data type to be number', () => {
        expect(() => calculator.multiply('5',5)).toThrow('Input data type is not number!');
    })
    test('multiply 5 with 0 to equal 0', () => {
        expect(calculator.multiply(5,0)).toBe(0);
    })
});