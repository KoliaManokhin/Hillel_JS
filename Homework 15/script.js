const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(number, variable) {
    randomLetter = "";
    for (i = 0; i < number; i++) {
        randomLetter += variable[(Math.floor(Math.random() * variable.length))]
    }
    return randomLetter;
}

generateKey(4, characters);
console.log(randomLetter);





