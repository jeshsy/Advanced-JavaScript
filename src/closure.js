// Complete the following functions.

const counter = () => {
  let result = 0;
  const fx = () => {
    return result += 1;
  };
  return fx;
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let number = 0;
  const obj = {
    increment() {
      return number += 1;
    },
    decrement() {
      return number -= 1;
    }
  };
  return obj;

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let limit = 0;
  const fx = (...args) => {
    if (limit < n) {
      limit += 1;
      return cb(...args);
    }
    return null;
  };
  return fx;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = (cb) => {
  const cache = {};
  const fx = (args) => {
    if (!Object.prototype.hasOwnProperty.apply(cache, [args])) {
      cache[args] = cb(args);
      return cache[args];
    }
    return cache[args];
  };
  return fx;
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
