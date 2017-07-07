// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // making a loop and running the function cb on all the elements
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};

const map = (elements, cb) => {
  // make the new array to be mapped on
  const newarray = [];
  // putting in the values for the map
  each(elements, (ans) => {
    newarray.push(cb(ans));
  });
  // for (let i = 0; i < elements.length; i++) {
  //   newarray.push(cb(elements[i]));
  // }
  return newarray;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, memo) => {
  // defining total
  let total = 0;
  // looping through the array
  for (let i = 0; i < elements.length; i++) {
    // checking for a memo
    if (i === 0) {
      if (memo) total = memo;
      // changing the type of total if its a string
      else if (typeof (elements[i]) === 'string') total = '';
    }
    total = cb(total, elements[i]);
  }
  return total;
  // fix this
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
};

const find = (elements, cb) => {
  let counter = 0;
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      counter += 1;
      return elements[i];
    }
  }
  if (counter === 0) return 'undefined';
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
  const arr = [];
  let counter = 0;
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      arr[counter] = elements[i];
      counter += 1;
    }
  }
  return arr;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

const flatten = (elements) => {
  let flatarr = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedarray = flatten(elem);
      flatarr = flatarr.concat(nestedarray);
    } else {
      flatarr.push(elem);
    }
  });
  return flatarr;
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
