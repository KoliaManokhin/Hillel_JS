class HAMBURGER {
    constructor(name, cheese, salad, mayonnaise, potatoes, seasoning,) {
        this.name = name;
        this.potatoes = potatoes;
        this.seasoning = seasoning;
        this.mayonnaise = mayonnaise;
        this.cheese = cheese;
        this.salad = salad;
    };

    burgerConstruct() {
        let size = prompt("Выберете ваш гамбургер: большой или маленький");
        while (size.toLowerCase().replaceAll(" ", "") !== "большой" && size.toLowerCase().replaceAll(" ", "") !== "маленький") {
            alert("Вы не выбрали гамбургер!");
            size = prompt("Выберете ваш гамбургер: большой или маленький");
        };

        if (size === "большой"){
            this.name = "big";
        }else if (size === "маленький"){
            this.name = "small";
        } 

        let number = prompt(`Выберите одну из нескольких начинок для гамбургера: сыр, лист салата, картофель. Начинка не обезательна`);

        if (number.toLowerCase().replaceAll(" ", "") === "сыр"){
            this.cheese = true;
        }else if (number.toLowerCase().replaceAll(" ", "") === "лист салата"){
            this.salad = true;
        }else if (number.toLowerCase().replaceAll(" ", "") === "картофель"){
            this.potatoes = true;
        } 

        this.seasoning = confirm("Сыпем приправу на  гамбургер?");
        this.mayonnaise = confirm("Поливаем гамбургер майонезом?");

        return this;
    };

    calculatorCalories() {
        let summ = 0;
        let calories = 0;

        if (this.name === "big"){
            summ += 10;
            calories += 40;
        }else if (this.name === "small"){
            summ += 5; 
            calories += 20;
        }else if (this.cheese){
            summ += 1; 
            calories += 20;
        }else if (this.salad){
            summ += 2; 
            calories += 5;
        }else if (this.potatoes){
            summ += 1.5;
            calories += 10;
        }else if (this.seasoning){
            summ += 1.5; 
            calories += 0;
        }else if (this.mayonnaise){
            summ += 2;
            calories += 5;
        } 

        return `Стоимость гамбургера ${summ}$, калорийность: ${calories}.`
    };
};

class MyBurger extends HAMBURGER {
    constructor(name, cheese, salad, potatoes, seasoning, mayonnaise) {
        super(name, cheese, salad, potatoes, seasoning, mayonnaise);
    };
};

let UserHamburger = new MyBurger(this.name, this.cheese, this.salad, this.potatoes, this.seasoning, this.mayonnaise);
alert(UserHamburger.burgerConstruct().calculatorCalories());