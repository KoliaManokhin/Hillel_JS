let poem = [
    {
        "text": "Елка вытянула ветки,",
    },
    {
        "text": "Пахнет лесом и зимой",
    },
    {
        "text": "С елки свесились конфетки",
    },
    {
        "text": "И хлопушки с бахромой.",
    },
    {
        "text": "Мы похлопали в ладоши,",
    },
    {
        "text": "Встали дружно в хоровод...",
    },
    {
        "text": "Наступил такой хороший",
    },
    {
        "text": "И счастливый Новый год!",
    },
];

let pictures = {
    happyNewYearText: "images/happy_new_year_text.png",
    cristmasTree: "images/cristmas-tree.png",
};

let arr = [];

class CristmasCard {
    constructor() {
    }

    render(cont, pict) {
        let text = [];

        cont.forEach(function (item) {
            text.push(`<p class="text-line">${item.text}</p>`);
        });

        arr.push(`
		<div class="happy-new-year-text">
            <img class="happy-new-year-text-image" src="${pict.happyNewYearText}" alt="image">
        </div>
        <div class="cristmas-card">
            <div class="box-left">
                <img class="box-image" src="${pict.cristmasTree}" alt="image">
            </div>
            <div class="content">
                <div class="text">
                    ${text.join("")}
                </div>
            </div>
            <div class="box-rigth">
                <img class="box-image" src="${pict.cristmasTree}" alt="image">
            </div>
        </div>	   
        `)
        return arr;
    }
}

let text = new CristmasCard();
text.render(poem, pictures);

document.write(`
    <div class="container">
        ${arr}
    </div>
`)
