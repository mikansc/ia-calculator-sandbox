// Import math functions and 3D rotation behavior
const { sum, subtract, multiply, divide, exponent } = require('./math.js');
const { attach3DRotation } = require('./scene3d.js');

// Import calculator UI logic (wires up DOM handlers) and styles
if (typeof window !== 'undefined') {
  require('./calculator-ui.js');
}

if (typeof document !== 'undefined') {
  // This ensures Node-based tests can still require this module without loading CSS
  require('../styles/styles.css');
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

