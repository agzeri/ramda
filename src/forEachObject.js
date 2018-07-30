/**
 * @function
 * @file forEachObject.js
 *
 * @name forEachObject
 * @description Takes the first argument as a JavaScript Object and the second
 * argument is a function. It traverses the object and calls the function with
 * key and value as its argument.
 * @access public
 *
 * @version 1.0.0
 * @since 1.0.0
 *
 * @param {Object} criteria - An object with keys and properties.
 * @param {Function} fn - The callback to execute in each element from list.
 *
 * @example
 * const criteria = {
 *   name: "Mr. R",
 *   age: 21
 * };
 *
 * const keys = [];
 *
 * const extractKeys = (key, value) => {
 *   keys.push(key);
 * };
 *
 * forEachObject(criteria, extractKeys);
 *
 * @author Mr R <@agzeri>
 * @copyright Ramdish, for JavaScript humans. 2018
 */
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
