// Import math functions from math.js
const { sum, subtract, multiply, divide } = require('../math.js');

// Expose functions globally for use in calculator.html
window.sum = sum;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;
