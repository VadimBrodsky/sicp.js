const env = require('./index.js');

describe('f', () => {
  it('should pass the arguments to the passed in function', () => {
    const spy = jest.fn();
    env.f(spy, 1, 2, 3);
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
  });
});

describe('sum', () => {
  it('should sum the passed in arguments', () => {
    const sum = env.sum(1, 2, 3);
    expect(sum).toEqual(6);
  });
});

describe('difference', () => {
  it('should subtract the passed in arguments', () => {
    const difference = env.difference(100, 20, 60);
    expect(difference).toEqual(20);
  });
});

describe('product', () => {
  it('should multiply the passed in arguments', () => {
    const product = env.product(1, 2, 3);
    expect(product).toEqual(6);
  });
});

describe('quotient', () => {
  it('should divide the passed in arguments', () => {
    const quotient = env.quotient(100, 5, 2);
    expect(quotient).toEqual(10);
  });
});

describe('define', () => {
  it('should add the symbol to the global environment', () => {
    env.define('pi', 3.14);
    expect(env.pi).toBeDefined();
    expect(env.pi).toEqual(3.14);
  });
});
