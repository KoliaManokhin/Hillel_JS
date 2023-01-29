// function Dog() {
//     this.name = "Laika";
//     this.voice = function () {
//         console.log("hey");
//     };
// }

// new Dog();

// People function
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.information = function () {
        return `My name is ${this.name}. I'm ${this.age} years old`
    }
};

//Car function
function Car(brand, model, year, reg) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.reg = reg;
    this.owner = null;
    this.setOwner = function (person) {
        if (person.age > 18) {
            this.owner = person;
        } else {
            console.log(`Cannot set ${person.name} as owner. Age must be over 18.`);
        }
    };
    this.info = function () {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.reg}`);
        if (this.owner) {
            console.log(`Owner: ${this.owner.name}`);
            this.owner.information()
        }
    }
}

// Example
const FirstUser = new Human("Kolia", 19);
const SecondUser = new Human("Alex", 10);

const FirstCar = new Car("Toyota", "Camry", 2020, "ABC123");
const SecondCar = new Car("Honda", "Accord", 2019, "DEF456");

FirstCar.setOwner(FirstUser);
SecondCar.setOwner(SecondUser);

FirstCar.info()
SecondCar.info()

console.log(FirstUser);
console.log(SecondUser);

