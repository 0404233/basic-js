const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    switch (current) {
      case '--double-next':
        if (i + 1 < arr.length && typeof(arr[i + 1] === 'number')) result.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (result.length > 0 && typeof arr[i - 1] === 'number') result.push(result[result.length - 1]);
        break;
      case '--discard-prev':
        if (result.length > 0) result.pop();
        break;
      case '--discard-next':
        if (i + 1 < arr.length) i++;
        break;
      default:
        result.push(current);
        break;
    }
  }

  return result;
}

console.log(transform([ 1, 2, '--double-next', 3, 4, 5 ]))

module.exports = {
  transform
};
