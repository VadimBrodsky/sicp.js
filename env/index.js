const env = {
  f: (operator, ...operands) => operator(...operands),
  sum: (...operands) => operands.reduce((acc, i) => (acc += i), 0),
  difference: (...operands) => operands.reduce((acc, i) => (acc -= i)),
  product: (...operands) => operands.reduce((acc, i) => (acc *= i)),
  quotient: (...operands) => operands.reduce((acc, i) => (acc /= i)),
};

module.exports = env;
