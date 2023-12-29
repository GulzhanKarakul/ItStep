export class CardDeck {
    constructor() {
        this.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['♠', '♥', '♣', '♦'];
        this.allDecks = [];
    }

    createDeck() {
        const deck = [];
        this.suits.forEach((suit) => {
            this.values.forEach((value) => {
            const card = value + suit;
                deck.push(card);
            });
        });
        return deck;
    }

    shuffleDecks(num) {
        for (let i = 0; i < num; i++) {
            const newDeck = this.createDeck();
            this.allDecks = [...this.allDecks, ...newDeck];
        }
    }

    chooseRandomCard() {
        const totalCards = this.allDecks.length;
        const randomNumber = Math.floor(Math.random() * totalCards);
        const randomCard = this.allDecks[randomNumber];
        this.allDecks.splice(randomNumber, 1);
        return randomCard;
    }
  }