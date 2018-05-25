const { f, sum } = require('../env');

describe('expressions', () => {
  it('should echo a primitive expression', () => {
    expect(486).toEqual(486);
  });

  it('should return the result of a compound expression', () => {
    expect(f(sum, 137, 349)).toEqual(486);
    expect(f(difference, 1000, 334)).toEqual(666);
    expect(f(product, 5, 99)).toEqual(495);
    expect(f(quotient, 10, 5)).toEqual(2);
    expect(f(sum, 2.7, 10)).toEqual(12.7);
  });

  it('should allow to combinations to accept any number of operands', () => {
    expect(f(sum, 21, 35, 12, 7)).toEqual(75);
    expect(f(product, 25, 4, 12)).toEqual(1200);
  });

  it('should accept nested combinations', () => {
    expect(f(sum, f(product, 3, 5), f(difference, 10, 6))).toEqual(19);
    expect(
      f(
        sum,
        f(product, 3, f(sum, f(product, 2, 4), f(sum, 3, 5))),
        f(sum, f(difference, 10, 7), 6),
      ),
    ).toEqual(57);
  });
});
