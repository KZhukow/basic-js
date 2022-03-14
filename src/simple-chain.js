const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
    getLength() {
        return this.chain.length;
    },
    addLink(value = '') {               
        this.chain.push(`( ${value} )`);        
        return this;
    },
    removeLink(pos) {
        if (typeof(pos) != 'number' || !Number.isInteger(pos) || pos < 1 || pos > this.getLength()) {//this.chain.length
          this.chain = [];
          throw new Error ("You can\'t remove incorrect link!");
        }
        this.chain.splice(pos-1, 1)        
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
      try {
        return this.chain.join('~~');
      } catch{}
      finally {
        this.chain = [];
      }  
      // let c = this.chain;
      // this.chain = [];
      // return c.join('~~');
    }

  // k : 0,
  // chain : [],
  //   getLength() {
  //       return this.k;
  //   },
  //   addLink(value = '') {
  //       this.k++;       
  //       this.chain.length != 0 ? this.chain.push('~~',`( ${value} )`)
  //       : this.chain.push(`( ${value} )`);
  //       return this;
  //   },
  //   removeLink(pos) {
  //       if (typeof(pos) != 'number' || !Number.isInteger(pos) || pos < 1 || pos > this.k) {
  //         this.chain = [];
  //         this.k = 0;
  //         throw new Error ("You can\'t remove incorrect link!");
  //       }
  //       this.k--;
  //       let realPos = pos + pos - 3;
  //       realPos == -1 ? this.chain.splice(0, 2)
  //       : this.chain.splice(realPos, 2);
  //       return this;
  //   },
  //   reverseChain() {
  //       this.chain.reverse();
  //       return this;
  //   },
  //   finishChain() {
  //     try {
  //       return this.chain.join('');
  //     } catch{}
  //     finally {
  //       this.k = 0;
  //       this.chain = [];
  //     }        
  //   }
};

module.exports = {
  chainMaker
};
