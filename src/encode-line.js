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
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let times = 1;
    while (str[i] === str[i + 1]) {
      times++;
      i++;
    }
    result += times > 1 ? times + str[i] : str[i];
  }
  return result;
}

module.exports = {
  encodeLine
};
