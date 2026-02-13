function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Attach 3D rotation behavior to a calculator element.
 * The calculator rotates when the user clicks and drags outside of it.
 *
 * @param {Object} options
 * @param {HTMLElement} options.calculatorElement - The element to rotate.
 * @param {HTMLElement} [options.dragElement=document.body] - Element that listens for drag events.
 * @param {number} [options.maxRotationX=15] - Maximum rotation on the X axis in degrees.
 * @param {number} [options.maxRotationY=25] - Maximum rotation on the Y axis in degrees.
 * @param {number} [options.sensitivity=0.2] - Drag sensitivity multiplier.
 * @returns {{ destroy: () => void, getRotation: () => { x: number, y: number } }}
 */
function attach3DRotation({
  calculatorElement,
  dragElement = typeof document !== 'undefined' ? document.body : null,
  maxRotationX = 15,
  maxRotationY = 25,
  sensitivity = 0.2,
} = {}) {
  if (!calculatorElement) {
    throw new Error('attach3DRotation requires a calculatorElement');
  }

  if (!dragElement) {
    throw new Error('attach3DRotation requires a dragElement');
  }

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rotationX = 0;
  let rotationY = 0;

  function applyTransform() {
    calculatorElement.style.transform = `rotateX(${rotationX.toFixed(2)}deg) rotateY(${rotationY.toFixed(2)}deg)`;
  }

  function onMouseDown(event) {
    // Ignore drags that start on the calculator itself
    if (calculatorElement.contains(event.target)) {
      return;
    }

    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    dragElement.style.cursor = 'grabbing';
  }

  function onMouseMove(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    const targetRotationY = clamp(rotationY + deltaX * sensitivity, -maxRotationY, maxRotationY);
    const targetRotationX = clamp(rotationX - deltaY * sensitivity, -maxRotationX, maxRotationX);

    rotationX = targetRotationX;
    rotationY = targetRotationY;

    applyTransform();
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    dragElement.style.cursor = '';
  }

  dragElement.addEventListener('mousedown', onMouseDown);
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', endDrag);
  }

  return {
    destroy() {
      dragElement.removeEventListener('mousedown', onMouseDown);
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', endDrag);
      }
    },
    getRotation() {
      return { x: rotationX, y: rotationY };
    },
  };
}

module.exports = { attach3DRotation, clamp };

