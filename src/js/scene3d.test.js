import { describe, it, expect, beforeEach, afterEach } from 'vitest';

// Require CommonJS module
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { attach3DRotation, clamp } = require('./scene3d');

describe('clamp', () => {
  it('returns value within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('clamps to minimum', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('clamps to maximum', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
});

describe('attach3DRotation', () => {
  let calculatorElement;
  let dragElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    calculatorElement = document.createElement('div');
    calculatorElement.className = 'calculator';
    dragElement = document.createElement('div');
    document.body.appendChild(calculatorElement);
    document.body.appendChild(dragElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('throws when calculatorElement is missing', () => {
    expect(() => attach3DRotation({})).toThrow('attach3DRotation requires a calculatorElement');
  });

  it('rotates calculator when dragging outside of it', () => {
    const instance = attach3DRotation({
      calculatorElement,
      dragElement,
      maxRotationX: 20,
      maxRotationY: 20,
      sensitivity: 1,
    });

    const mousedown = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100,
      bubbles: true,
    });
    dragElement.dispatchEvent(mousedown);

    const mousemove = new MouseEvent('mousemove', {
      clientX: 110,
      clientY: 80,
      bubbles: true,
    });
    window.dispatchEvent(mousemove);

    const rotation = instance.getRotation();
    expect(rotation.x).toBeGreaterThan(0);
    expect(rotation.y).toBeGreaterThan(0);
    expect(calculatorElement.style.transform).toContain('rotateX');
    expect(calculatorElement.style.transform).toContain('rotateY');

    instance.destroy();
  });

  it('does not start drag when mousedown is on calculator', () => {
    const instance = attach3DRotation({
      calculatorElement,
      dragElement,
      sensitivity: 1,
    });

    const mousedownOnCalculator = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100,
      bubbles: true,
    });
    calculatorElement.dispatchEvent(mousedownOnCalculator);

    const mousemove = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200,
      bubbles: true,
    });
    window.dispatchEvent(mousemove);

    const rotation = instance.getRotation();
    expect(rotation.x).toBe(0);
    expect(rotation.y).toBe(0);
    expect(calculatorElement.style.transform).toBe('');

    instance.destroy();
  });

  it('stops reacting after destroy is called', () => {
    const instance = attach3DRotation({
      calculatorElement,
      dragElement,
      sensitivity: 1,
    });

    const mousedown = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100,
      bubbles: true,
    });
    dragElement.dispatchEvent(mousedown);

    instance.destroy();

    const mousemove = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200,
      bubbles: true,
    });
    window.dispatchEvent(mousemove);

    const rotation = instance.getRotation();
    expect(rotation.x).toBe(0);
    expect(rotation.y).toBe(0);
    expect(calculatorElement.style.transform).toBe('');
  });
});

