/**
 * @function
 * @file forEach.js
 *
 * @name forEach
 * @description Iterate through the list and call the function on each element.
 * @access public
 *
 * @version 1.0.0
 * @since 1.0.0
 *
 * @param {Array} list - An array with elements.
 * @param {Function} fn - The callback to execute in each element from list.
 *
 * @example
 * forEach([1, 2, 3], number => number * number)
 *
 * @author Mr R <@agzeri>
 * @copyright Ramdish, for JavaScript humans. 2018
 */
export default (list, fn) => {
  for(let i = 0; i < list.length; i++) {
    fn(list[i]);
  }
};
