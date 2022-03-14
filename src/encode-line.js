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
function encodeLine(s) {
  let str = '';
let k = 1;
for (let i = 0; i < s.length; i++) {
  if (s[i] == s[i+1]) k++; else {
    str += k + s[i];
    k = 1;
  }
}
return str.replace(/[1]/g,'');
// for (let i = 0; i < s.length; i++) {
//   if (s[i] == s[i+1]) k++; else if (k != 1){
//     str += k + s[i];
//     k = 1;
//   } else str += s[i];
// }
// return str;
}

module.exports = {
  encodeLine
};
