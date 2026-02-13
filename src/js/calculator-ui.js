const { sum, subtract, multiply, divide, exponent } = require('./math.js');

let currentValue = '0';
let previousValue = null;
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  const display = document.getElementById('result');
  if (display) {
    display.textContent = currentValue;
  }
}

function clearDisplay() {
  currentValue = '0';
  previousValue = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function appendNumber(num) {
  if (shouldResetDisplay) {
    currentValue = num;
    shouldResetDisplay = false;
  } else {
    if (currentValue === '0' && num !== '.') {
      currentValue = num;
    } else if (num === '.' && currentValue.includes('.')) {
      return;
    } else {
      currentValue += num;
    }
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null && !shouldResetDisplay) {
    calculate();
  }
  previousValue = parseFloat(currentValue);
  operator = op;
  shouldResetDisplay = true;
}

function calculate() {
  if (operator === null || previousValue === null) {
    return;
  }

  const current = parseFloat(currentValue);
  let result;

  try {
    switch (operator) {
      case '+':
        result = sum(previousValue, current);
        break;
      case '-':
        result = subtract(previousValue, current);
        break;
      case '*':
        result = multiply(previousValue, current);
        break;
      case '/':
        result = divide(previousValue, current);
        break;
      case '^':
        result = exponent(previousValue, current);
        break;
      default:
        return;
    }

    currentValue = result.toString();
    operator = null;
    previousValue = null;
    shouldResetDisplay = true;
    updateDisplay();
  } catch (error) {
    currentValue = 'ERROR';
    updateDisplay();
    setTimeout(clearDisplay, 2000);
  }
}

// Expose handlers globally for inline onclick attributes in the HTML
if (typeof window !== 'undefined') {
  window.clearDisplay = clearDisplay;
  window.appendNumber = appendNumber;
  window.setOperator = setOperator;
  window.calculate = calculate;
}

module.exports = {
  clearDisplay,
  appendNumber,
  setOperator,
  calculate,
};

