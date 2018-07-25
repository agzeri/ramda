export default (criteria, fn) => {
  if (typeof criteria === 'object' && typeof fn === 'function') {
    for (let key in criteria) {
      if (criteria.hasOwnProperty(key) && typeof criteria[key] !== 'undefined') {
        fn(key, criteria[key]);
      } else {
        throw new Error('Invalid: Property should not be undefined.');
      }
    }
  } else {
    throw new Error('Invalid: You should provide two parameters (object, function).');
  }
};
