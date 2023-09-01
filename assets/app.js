window.app = () => {
    const PAIRS = 12;   // Pairs of cards in the game

    return {
        tries: 0,               // Tries to solve the game
        isStarted: false,       // game started?
        isComparing: false,     // State of the game when cards are compared.
        cards: [],
        flipped: [],            // Cards currently flipped
        matches: 0,             // Cards matched
        start() {
            let cards = Array.from(Array(PAIRS).keys());       // Creates an array with 12 items (as in pairs) from 0 to 11.
            this.cards = cards.concat(cards);       // Add its pair to each card
            this.shuffle();
            this.isStarted = true;
            console.log('Game is started!');
        },
        shuffle() {
            this.cards.sort(() => 0.5 - Math.random());
        },
        flip(card) {
            if (!this.isComparing && !card.classList.contains('flipped') && !card.classList.contains('match')) {
                // Flip cards
                this.flipped.push(card.id);
                card.classList.add('flipped');
                this.onFlip();

                // If there are two cards flipped then compare
                if (this.flipped.length === 2) {
                    this.compareCards();
                    this.flipped = [];

                    // Check if game is completed
                    if (this.matches === PAIRS) {
                        this.onComplete();
                    }
                }
            }
        },
        compareCards() {
            this.isComparing = true;

            //Compare cards
            const card1 = document.getElementById(this.flipped[0]);
            const card2 = document.getElementById(this.flipped[1]);

            if (card1.dataset.card === card2.dataset.card) {
                card1.classList.add('match');
                card2.classList.add('match');
                this.isComparing = false;
                this.onMatch();
            } else {
                setTimeout(() => {
                    Array.from(document.querySelectorAll('.flipped')).forEach((el) => el.classList.remove('flipped'))
                    this.isComparing = false;
                }, 1000);
            }
            this.onCompare();
        },
        onComplete() {
            console.log('Game completed!!', this.tries);
            alert('Completed in ' + this.tries + ' tries.');
        },
        onFlip() {
            //
        },
        onMatch() {
            this.matches++;
        },
        onCompare() {
            this.tries++;
        }
    }
};