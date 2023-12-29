export class Interface {
    constructor() {
        this.cardModel = document.createElement('div');
        this.cardModel.className = 'card';
  
        this.dealerContainer = document.getElementById('dealer');
        this.playerContainer = document.getElementById('player');
    }
  
    displayCard(card, container) {
        const newCard = this.cardModel.cloneNode(true);
        const isRed = card[card.length - 1] === '♥' || card[card.length - 1] === '♦';
        if (isRed) {
            newCard.setAttribute('data-red', true);
        }
  
        if (container.id === 'dealer' && container.children.length === 0) {
            newCard.innerHTML = card;
        } else if (container.id === 'dealer' && container.children.length === 1) {
            newCard.innerHTML = card;
        } else {
            newCard.innerHTML = card;
        }
  
        container.appendChild(newCard);
    }
  
    clearContainer(container) {
        while (container.firstChild) {
            container.firstChild.remove();
        }
    }
  }