class Player {
    constructor() {
        this.hand = [];
    }

    addCardToHand(card) {
        this.hand.push(card);
    }

    clearHand() {
        this.hand = [];
    }

    calcHandValue() {
        let value = 0;
        let hasAce = false;
        this.hand.forEach((card) => {
            let cardValue = card.length === 2 ? card.substring(0, 1) : card.substring(0, 2);
            if (cardValue === 'A') hasAce = true;
            else if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') value += 10;
            else value += Number(cardValue);
        });
        if (hasAce) value + 11 > 21 ? (value += 1) : (value += 11);
        return value;
    }
}

export class UserPlayer extends Player {
    constructor() {
        super();
    }

    async hit(deck) {
        const card = await deck.chooseRandomCard();
        this.addCardToHand(card);
        return card;
    }
}

export class BotPlayer extends Player {
    constructor() {
        super();
    }

    async hit(deck) {
        const card = await deck.chooseRandomCard();
        this.addCardToHand(card);
        return card;
    }

    shouldHit() {
        const handValue = this.calcHandValue();
        return handValue <= 16;
    }
}