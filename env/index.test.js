const env = require('./index.js');

describe('f function', () => {
  it('should pass the arguments to the passed in function', () => {
    const spy = jest.fn();
    env.f(spy, 1, 2, 3);
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
  });
});

describe('sum function', () => {
  it('should sum all of the passed in arguments', () => {
    const sum = env.sum(1, 2, 3);
    expect(sum).toEqual(6);
  });
});
