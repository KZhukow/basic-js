const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, option) {
  if (!('repeatTimes' in option)) option.repeatTimes = 1;
    if (!('separator' in option)) option.separator = '+';
    if (!('addition' in option)) option.addition = '';
    if (!('additionRepeatTimes' in option)) option.additionRepeatTimes = 1;
    if (!('additionSeparator' in option)) option.additionSeparator = '|';
    let arr = [];
    let addArr = [];
    for (let i = 0; i < option.additionRepeatTimes; i++) {
      addArr.push(String(option.addition));
    }
    str = str + addArr.join(option.additionSeparator);
    for (let i = 0; i < option.repeatTimes; i++) {
      arr.push(str);
    }
    return arr.join(option.separator);
}

module.exports = {
  repeater
};
