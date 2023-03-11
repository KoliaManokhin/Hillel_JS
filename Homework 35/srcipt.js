const firstBtn = document.querySelector('.first-button');
const secondBtn = document.querySelector('.second-button');

const firstInput = document.getElementById('first-link');
const secondInput = document.getElementById('second-link');

function corectLink(link) {
    if (link.indexOf('https://') != -1 || link.indexOf('http://') != -1) {
        return true;
    } else {
        return false;
    }
}

firstBtn.addEventListener('click', () => {
    const link = firstInput.value;
    if (corectLink(link)) {
        window.open(link)
    } else {
        window.open(`https://${link}`);
    }
});

secondBtn.addEventListener('click', () => {
    const link = secondInput.value;
    if (corectLink(link)) {
        window.open(link)
    } else {
        window.open(`https://${link}`);
    }
});

