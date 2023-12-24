const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let result = '';
  n = n.toString().split('');

  if (n.length < 3) {
    for (let i = 0; i < n.length - 1; i++) {
      arr.push(n[i]);
    }
  } else {
    for (let i = 0; i < n.length - 1; i++) {
      arr.push(n[i] + n[i + 1]);
    }
  }

  arr = arr.map(e => Number(e));

  if (arr.length > 1) {
    const smallEl = arr.reduce((x, y) => Math.min(x, y));
    arr = arr.filter(i => i !== smallEl);
  }

  arr = arr.map(e => e.toString());

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return Number(result);
}

module.exports = {
  deleteDigit
};
