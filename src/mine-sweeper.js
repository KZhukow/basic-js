const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let mine = arr.map( a => a.map(b => 5));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === true) {
        if (mine[i-1]) {
          mine[i-1][j]++;
          if (mine[i-1][j-1]) mine[i-1][j-1]++;
        }
        if (mine[i+1]) {
          mine[i+1][j]++;
          if (mine[i+1][j-1]) mine[i+1][j-1]++;
        }
        if (mine[j-1]) mine[i][j-1]++;
        if (mine[j+1]) {
          mine[i][j+1]++;
          if (mine[i-1]) mine[i-1][j+1]++;
          if (mine[i+1]) mine[i+1][j+1]++;
        }               
      }
    }
  }
  return mine.map( a => a.map(b => b-5));
}

module.exports = {
  minesweeper
};
