class SimpleCalculator {
    add = (a,b) => a + b;
    subtract = (a,b) => a - b;
    divide = (a,b) => a/b;
    multiply = (a,b) => a*b;
}

const calc = new SimpleCalculator();

console.log(calc.add(5,5));