const env = {
  f: (operator, ...operands) => operator(...operands),
  sum: (...operands) => operands.reduce((acc, i) => (acc += i), 0),
};

module.exports = env;
