const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error ('Incorrect arguments!')
    str = str.toUpperCase();
    key = key.toUpperCase();
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (key.length < str.length) {
      key += key;
    }
    let j = 0;
    str = str.split('')
              .map( a => alph.includes(a) ? alph[(alph.indexOf(a) + alph.indexOf(key[j++])) % alph.length] : a)
              .join('');
    return this.type ? str : str.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error ('Incorrect arguments!')
    str = str.toUpperCase();
    key = key.toUpperCase();
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (key.length < str.length) {
      key += key;
    }
    let j = 0;
    str = str.split('')
              .map( a => alph.includes(a) ? alph.substr((alph.indexOf(a) - alph.indexOf(key[j++])) % alph.length, 1) : a)
              .join('');
    return this.type ? str : str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
