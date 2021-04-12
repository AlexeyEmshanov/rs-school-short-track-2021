/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function getAllDomain(domain) {
    const resDomains = [];
    let temp = domain;
    while (temp.includes('.')) {
      const start = temp.lastIndexOf('.');
      const end = temp.length;
      const resDomain = temp.substr(start, end);
      temp = temp.substr(0, start);
      resDomains.push(resDomain);
    }
    const result = [[]];
    for (let i = 0; i < resDomains.length; i++) {
      result.push(result[i] + resDomains[i]);
    }
    result.shift();
    return result;
  }

  function countDomains(doms) {
    const resObj = {};
    doms.forEach((el) => {
      resObj[el] = doms.filter((item) => item === el).length;
    });
    return resObj;
  }

  // evaluation
  const finalDomains = domains.map((el) => `.${el}`);

  let allvariations = finalDomains.map((el) => getAllDomain(el));

  allvariations = allvariations.flat();
  return countDomains(allvariations);
}

module.exports = getDNSStats;
