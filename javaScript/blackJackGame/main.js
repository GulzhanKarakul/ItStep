import { CardDeck } from "./cardDeck.js";
import { UserPlayer, BotPlayer } from "./player.js";
import { Interface } from "./interface.js";

document.addEventListener("DOMContentLoaded", function () {
    class Game {
        constructor() {
            this.deck = new CardDeck();
            this.dealer = new BotPlayer();
            this.player = new UserPlayer();
            this.interface = new Interface();
            this.hitButton = document.getElementById("hit");
            this.passButton = document.getElementById("pass");
            this.notice = document.getElementById("notice");
            this.nextHandButton = document.getElementById("next-hand");
            this.numDecks = 3;
            this.currentModalTimeout = null;

            this.hitButton.addEventListener("click", () => this.playerHit());
            this.passButton.addEventListener("click", () => this.passToDealer());
            this.nextHandButton.addEventListener("click", () => this.play());
        }

        clearContainer(container) {
            while (container.firstChild) {
                container.firstChild.remove();
            }
        }

        async dealHands() {
            this.clearContainer(this.interface.dealerContainer);
            this.clearContainer(this.interface.playerContainer);

            this.dealer.clearHand();
            this.player.clearHand();

            const dealerCardsContainer = document.createElement("div");
            this.interface.dealerContainer.appendChild(dealerCardsContainer);

            const playerCardsContainer = document.createElement("div");
            this.interface.playerContainer.appendChild(playerCardsContainer);

            const dealerCard1 = await this.player.hit(this.deck);
            const dealerCard2 = await this.player.hit(this.deck);
            this.dealer.addCardToHand(dealerCard1);
            this.dealer.addCardToHand(dealerCard2);

            const playerCard1 = await this.dealer.hit(this.deck);
            const playerCard2 = await this.dealer.hit(this.deck);
            this.player.addCardToHand(playerCard1);
            this.player.addCardToHand(playerCard2);

            this.interface.displayCard(dealerCard1, dealerCardsContainer);
            this.interface.displayCard("back", dealerCardsContainer);
            this.interface.displayCard(playerCard1, playerCardsContainer);
            this.interface.displayCard(playerCard2, playerCardsContainer);
        }

        async playerHit() {
            const card = await this.player.hit(this.deck);
            this.interface.displayCard(card, this.interface.playerContainer);
            const handValue = this.player.calcHandValue();
            if (handValue > 21) {
                this.showNotice(
                    `Bust! Your hand is ${this.player.hand} with a value of ${handValue}.`
                );
            }
        }

        async passToDealer() {
            this.clearContainer(this.interface.dealerContainer.firstChild);
            this.interface.displayCard(
                this.dealer.hand[0],
                this.interface.dealerContainer.firstChild
            );

            while (this.dealer.shouldHit()) {
                const card = await this.dealer.hit(this.deck);
                this.interface.displayCard(card, this.interface.dealerContainer);
                const handValue = this.dealer.calcHandValue();
                if (handValue === 21) {
                    this.showNotice("Dealer has 21! Dealer wins!");
                    return;
                } else if (handValue > 21) {
                    this.showNotice("Dealer bust! You win!");
                    return;
                }
            }

            this.determineWinner();
        }

        determineWinner() {
            const playerValue = this.player.calcHandValue();
            const dealerValue = this.dealer.calcHandValue();
            let text = `Your hand is ${this.player.hand} with a value of ${playerValue}.<br>`;
            text += `The dealer's hand is ${this.dealer.hand} with a value of ${dealerValue}.<br>`;
            if (playerValue > dealerValue) {
                text += "<em>You win!</em>";
            } else {
                text += "<em>Dealer wins!</em>";
            }
            this.showNotice(text);
        }

        showNotice(text) {
            this.notice.innerHTML = text;
            this.notice.style.display = "flex";
            this.disableButtons();
            this.setModalTimeout();
        }

        hideNotice() {
            this.notice.style.display = "none";
        }

        setModalTimeout() {
            if (this.currentModalTimeout) {
                clearTimeout(this.currentModalTimeout);
            }
            this.currentModalTimeout = setTimeout(() => {
                this.hideNotice();
                this.enableButtons();
            }, 3000);
        }

        disableButtons() {
            this.hitButton.disabled = true;
            this.passButton.disabled = true;
            this.nextHandButton.disabled = true;
        }

        enableButtons() {
            this.hitButton.disabled = false;
            this.passButton.disabled = false;
            this.nextHandButton.disabled = false;
        }

        play() {
            if (this.deck.allDecks.length < this.numDecks * 52) {
                this.deck.shuffleDecks(this.numDecks);
            }

            this.dealHands();
            this.enableButtons();
            this.hideNotice();
        }
    }

    const game = new Game();
    game.play();
});
