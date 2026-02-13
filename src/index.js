// Import math functions from math.js (now inside src/)
const { sum, subtract, multiply, divide, exponent } = require('./math.js');

// Expose functions globally for use in calculator.html
window.sum = sum;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;
window.exponent = exponent;
