const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let j = 1;

  let result = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      j += 1;
    } else {
      result += j + str[i];
      j = 1;
    }
  }
  return Array.from(result).filter(i => i !== '1').join('');
}

module.exports = {
  encodeLine
};
