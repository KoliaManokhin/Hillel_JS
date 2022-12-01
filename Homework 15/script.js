const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomLetter = "";

function generateKey(number, variable) {
    for (let i = 0; i < number; i++) {
        randomLetter += variable[(Math.floor(Math.random() * variable.length))]
    }
    return randomLetter;
}

generateKey(8, characters);
console.log(randomLetter);





