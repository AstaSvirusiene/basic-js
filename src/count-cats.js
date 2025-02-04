const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newArr =  matrix.map(a => a.filter(b => b === '^^'))
  let sum = 0;

  return newArr.map(a => a.length + sum).reduce((acc, current) => acc + current, 0)
}

module.exports = {
  countCats
};
