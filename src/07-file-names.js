/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const state = {};
  const result = [];
  // ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
  names.forEach((filename) => {
    if (!(filename in state)) {
      state[filename] = result.includes(filename) ? 1 : 0;
    } else {
      state[filename] += 1;
    }
    result.push(state[filename] > 0 ? `${filename}(${state[filename]})` : filename);
  });
  return result;
}

module.exports = renameFiles;
