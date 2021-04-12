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
  const arr = str.split('');
  const tempResult = [];
  for (let i = 0; i < arr.length; i++) {
    const start = i;
    let end = i + 1;
    while (arr[i] === arr[i + 1]) {
      i++;
      end = i + 1;
    }
    tempResult.push(arr.slice(start, end));
  }

  const resArr = tempResult.map((el) => ((el.length === 1) ? el : `${el.length}${el[0]}`));

  return resArr.join('');
}

module.exports = encodeLine;
