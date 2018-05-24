const f = (func, ...args) => func(args);
const sum = (...args) => args.reduce((acc, i) => acc += i,0);