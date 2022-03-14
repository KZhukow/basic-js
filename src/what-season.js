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


// //   let proverka_1 = new Date();
// // let amount = 0;
// let number_seasons_winter = [ 0, 1, 11  ];
// let number_seasons_summer = [ 5, 6, 7   ];
// let number_seasons_autumn = [ 8, 9, 10 ];
// let number_seasons_spring = [ 2, 3, 4   ];
// let seasons = ['spring', 'summer', 'autumn', 'winter'];
 
//   // if ( String(date) == String(proverka_1 ) ) {
//   //     amount = 1;
//   // }

//  if (typeof(date) == 'undefined' ) return  'Unable to determine the time of year!'
//  if (typeof(date.setYear ) == 'undefined'  )  throw new Error('Invalid date!')
//  if (Date.prototype.isPrototypeOf(date)) { 
//    if (number_seasons_winter.includes(date.getMonth()))  return   seasons[3]
//    if (number_seasons_summer .includes(date.getMonth())) return  seasons[1]
//    if (number_seasons_autumn.includes(date.getMonth()))  return   seasons[2]
//    if (number_seasons_spring .includes(date.getMonth())) return   seasons[0];
//      }

//      //return 'Invalid date!'
//      throw new Error ('Invalid date!')
  }

module.exports = {
  getSeason
};
