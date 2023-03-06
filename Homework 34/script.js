const changeImg = () => {
    const rand = Math.ceil(Math.random() * 9)
    document.querySelector('img').src = 'images/' + rand + '.jpg'
}
changeImg();

document.querySelector('button').addEventListener('click', changeImg);