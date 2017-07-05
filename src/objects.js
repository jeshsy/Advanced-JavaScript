// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.getOwnPropertyNames(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  const tvalues = [];
  const thekeys = keys(obj);
  for (let i = 0; i < thekeys.length; i++) {
    if (typeof (obj[thekeys[i]]) === 'function');
    else {
      tvalues.push(obj[thekeys[i]]);
    }
  }
  return tvalues;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  const mappedobj = {};
  const thekeys = keys(obj);
  const thevalues = values(obj);
  for (let i = 0; i < thekeys.length; i++) {
    mappedobj[thekeys[i]] = cb(thevalues[i]);
  }
  return mappedobj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  const thekeys = keys(obj);
  const thevalues = values(obj);
  const pairarray = [];
  for (let i = 0; i < thekeys.length; i++) {
    pairarray.push([thekeys[i], thevalues[i]]);
  }
  return pairarray;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

const invert = (obj) => {
  const newobj = {};
  const thekeys = keys(obj);
  const thevalues = values(obj);
  for (let i = 0; i < thekeys.length; i++) {
    newobj[thevalues[i]] = thekeys[i];
  }
  return newobj;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const defaultkeys = keys(defaultProps);
  const defaultvalues = values(defaultProps);
  const thekeys = keys(obj);
  for (let i = 0; i < defaultkeys.length; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, defaultkeys[i]));
    else {
      obj[defaultkeys[i]] = defaultvalues[i];
    }
  }
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
