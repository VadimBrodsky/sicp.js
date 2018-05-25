const env = {
  f: (func, ...args) => func(...args),
  sum: (...args) => args.reduce((acc, i) => (acc += i), 0),
};

module.exports = env;
