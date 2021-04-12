/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString(10).split('');

  if (arr.length === 1) {
    return parseInt(arr[0], 10);
  }
  const temp = arr.reduce((acc, el) => acc + parseInt(el, 10), 0);
  return getSumOfDigits(temp);
}

module.exports = getSumOfDigits;
