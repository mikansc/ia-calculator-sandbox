import { describe, it, expect } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const indexModule = require('./index');

describe('index.js exports', () => {
  it('exports math functions', () => {
    expect(typeof indexModule.sum).toBe('function');
    expect(typeof indexModule.subtract).toBe('function');
    expect(typeof indexModule.multiply).toBe('function');
    expect(typeof indexModule.divide).toBe('function');
    expect(typeof indexModule.exponent).toBe('function');
  });

  it('exports attach3DRotation', () => {
    expect(typeof indexModule.attach3DRotation).toBe('function');
  });
});

describe('index.js browser wiring', () => {
  it('registers DOMContentLoaded listener when window is available', () => {
    const originalAddEventListener = window.addEventListener;
    let handler = null;

    window.addEventListener = (event, fn) => {
      if (event === 'DOMContentLoaded') {
        handler = fn;
      }
    };

    // Re-require after monkey-patching to trigger the side effect
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    delete require.cache[require.resolve('./index')];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./index');

    expect(typeof handler).toBe('function');

    window.addEventListener = originalAddEventListener;
  });
});

