export default predicate => (fn, whenFalse = () => {}) => {
  if(typeof predicate !== 'undefined' || typeof fn !== 'undefined') {
    return (!predicate) ? fn() : whenFalse();
  } else {
    throw new Error('Invalid: You should provide two parameters (predicate, function).');
  }
};
