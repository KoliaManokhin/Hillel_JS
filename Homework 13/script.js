numberCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
letterCard = ["J", "Q", "K",];
masti = ["clubs.svg", "spades.svg", "diamonds.svg", "hearts.svg"];

card = [];

for (j = 0; j < numberCard.length; j++) {
    for (i = 0; i < masti.length; i++) {
        card.push(`
            <div class="card">
                <div class="card__info">${numberCard[j]}<img src="./images/${masti[i]}" alt="clubs"></div>
                <div class="card__info">${numberCard[j]}<img src="./images/${masti[i]}" alt="clubs"></div>
            </div>
        `)
    }
};

for (j = 0; j < letterCard.length; j++) {
    for (i = 0; i < masti.length; i++) {
        card.push(`
        <div class="card card--person">
            <div class="card__info">${letterCard[j]}<img src="./images/${masti[i]}" alt="clubs"></div>
            <img class="person" src="images/${letterCard[j]}.svg" alt="spades">
            <div class="card__info">${letterCard[j]}<img src="./images/${masti[i]}" alt="clubs"></div>
        </div>
    `)
    }
};

for (j = 0; j < masti.length; j++) {
    card.push(`
        <div class="card card--person">
            <div class="card__info">T<img src="images/clubs.svg" alt="clubs"></div>
            <img class="person" src="images/${masti[j]}" alt="clubs">
            <div class="card__info">T<img src="images/clubs.svg" alt="clubs"></div>
        </div>
    `)
};

document.write(card.join(""))




