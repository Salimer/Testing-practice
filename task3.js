class SimpleCalculator {
    add = (a,b) => a + b;
    subtract = (a,b) => a - b;
    divide = (a,b) => {
        if (b === 0) throw new Error('result is infinity')
        return a/b;
    }
    multiply = (a,b) => {
        if (typeof(a) !== 'number' || typeof(b) !== 'number' ) throw new Error('Input data type is not number!')
        return a*b;
    }
}

const calc = new SimpleCalculator();

module.exports = calc;