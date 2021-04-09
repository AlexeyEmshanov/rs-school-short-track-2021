/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const objUniqueKeys = new Set(arr1.concat(arr2));

  const result = [];

  objUniqueKeys.forEach((value) => {
    if (arr1.includes(value) && arr2.includes(value)) {
      const arr1Entry = arr1.filter((item) => item === value).length;
      const arr2Entry = arr2.filter((item) => item === value).length;
      result.push(Math.min(arr1Entry, arr2Entry));
    } else {
      result.push(0);
    }
  });

  return result.reduce((acc, el) => acc + el, 0);
}

module.exports = getCommonCharacterCount;
