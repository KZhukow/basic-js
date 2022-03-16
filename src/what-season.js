const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {  
  //if (typeof(date) == 'undefined' ) return  'Unable to determine the time of year!'
  if (!date) return 'Unable to determine the time of year!';
    //if (!date.getTime) return 'Invalid date!';
    //if (!date.getTime) throw new Error ('Invalid date!');
    try {
      date.getTime();
    } catch (err) {
      throw new Error ('Invalid date!');
    }
    let m = date.getMonth();
    return m < 2 || m == 11 ? 'winter'
    : m < 5 ? 'spring' 
    : m < 8 ? 'summer' : 'autumn';
  }

module.exports = {
  getSeason
};
