/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const transpMatrix = [];
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let column = 0; column < columns; column++) {
    const temp = [];
    for (let row = 0; row < rows; row++) {
      temp.push(matrix[row][column]);
    }
    transpMatrix.push(temp);
  }

  const sliceMatrix = transpMatrix.map((el) => {
    const end = el.includes(0) ? el.findIndex((item) => item === 0) : el.length;
    return el.slice(0, end);
  });

  const test = sliceMatrix.flat().reduce((acc, el) => acc + el, 0);

  return test;
}

module.exports = getMatrixElementsSum;
