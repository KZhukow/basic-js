const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(arr) {
  let dns = {};
    arr.map( s => s.split('.')
                    .reverse()
                    .map( n => '.' + n))
        .map( n => n.map( (s, i) => i==0 ? s : n.slice(0, i+1).join('')))
        .reduce((sum, n) => sum.concat(n), [])
        .forEach(a => ([a] in dns) ? dns[a] +=1 : dns[a] = 1);
    return dns;
}

module.exports = {
  getDNSStats
};
