const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);
    let a = arr.slice();
    let control = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
    let controlNext = ['--discard-next', '--double-next'];
    let controlPrev = ['--discard-prev', '--double-prev'];
    for (let i = 0; i < a.length; i++) {
        if (controlNext.includes(a[i]) && i < a.length-1 && !control.includes(a[i+1])) {
            a[i] == controlNext[0] ? a.splice(i+1,1) : a.splice(i+1, 0, a[i+1]);            
        }
        if (controlPrev.includes(a[i]) && i > 0 && !control.includes(a[i-1])) {
            if (a[i] == controlPrev[0]) {
                a.splice(i-1,1);
                i--;
            }
            if (a[i] == controlPrev[1]) {
                a.splice(i-1, 0, a[i-1]);
                i++;
            }
        }
    }
    return a.filter( a => !control.includes(a));
}

module.exports = {
  transform
};
