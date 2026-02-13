// Import math functions from math.js (now inside src/)
const { sum, subtract, multiply, divide, exponent } = require('./math.js');
const { attach3DRotation } = require('./scene3d.js');

// Import styles for the calculator (bundled by webpack)
if (typeof document !== 'undefined') {
  // This ensures Node-based tests can still require this module without loading CSS
  require('./styles.css');
}

// Expose math functions globally for use in calculator.html
if (typeof window !== 'undefined') {
  window.sum = sum;
  window.subtract = subtract;
  window.multiply = multiply;
  window.divide = divide;
  window.exponent = exponent;

  window.addEventListener('DOMContentLoaded', () => {
    const calculatorElement = document.querySelector('.calculator');
    if (calculatorElement) {
      attach3DRotation({ calculatorElement, dragElement: document.body });
    }
  });
}

// Export for testing
module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  exponent,
  attach3DRotation,
};
