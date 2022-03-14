const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let arr = [];
  // let num = Array.from(String(n), Number);
  // for (let i = 0; i < num.length; i++) {
  //   let s = '';
  //   for (let j = 0; j < num.length; j++) {
  //     if (i != j) s += num[j];
  //   }
  //   arr.push(+s);
  // }
  // return arr.sort( (a, b) => b - a)[0];

  // let num = Array.from(String(n), Number);
  // for (let i = 0; i < num.length; i++) {
  //   if (i == num.length - 1) {
  //     num.pop();
  //   } else if (num[i] < num[i+1]) {
  //     num.splice(i, 1);
  //     break;
  //   }    
  // }
  // return +num.join('');

  // let k = 0;
  // let num = Array.from(String(n), Number);
  // for (let i = 0; i < num.length; i++) {
  //   k = Math.max(k, +num.filter((a, j) => j != i).join(''));
  // }
  // return k; 

  let num = Array.from(String(n), Number);
  return num.reduce((k, n, i) => Math.max(k, +num.filter((a, j) => j != i).join('')), 0);
}

module.exports = {
  deleteDigit
};
