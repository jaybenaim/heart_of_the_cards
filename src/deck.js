const lodash = require('lodash.range')

class Deck {
  // We've defined the constructor method, although it's not currently doing anything.
  // This is the perfect place to set up the initial state of any new Deck instances.
  constructor() {
    this.cards = []
  }

  // Any additional instance methods required by the test suite can be defined below.
  addCards(){ 
      for(let i = 1; i <= 52;i++){ 
        this.cards.push(i)
      }
    
  }
  shuffle(){ 
    // Using Durstenfeld shuffle algorithm.
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
  return this.cards
  }
  draw(number){ 
    // return typeof(number)
    if (typeof(number) == 'number'){ 
      let num = this.cards.slice( this.cards.length - number)
      num.reverse() 
      for(let i = 0; i < number;i++){ 
        this.cards.pop()
      }
      if (this.cards.length == 0){ 
        return -1
      } 
      return num
      
      
    } else if (number === undefined){ 
      let x = this.cards[this.cards.length - 1]
      this.cards.pop(x)
      return x
    }
    else if(typeof(number == 'object')) { 
      return undefined
    }
  }

}

module.exports = Deck;

let deck = new Deck(); 

// deck.cards = [1,2,3]
deck.addCards() 

// console.log(deck.cards)
// deck.shuffle(deck.cards)
// console.log(deck.cards)
// deck.shuffle(deck.cards)
// console.log(deck.cards)
deck.cards = [];
console.log(deck.cards.length)

// console.log(deck.draw([2]))
console.log(deck.draw(2))
console.log(deck.cards.length)

