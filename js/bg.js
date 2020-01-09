const body = document.querySelector('body');

const IMG_NUMBER = 10;

const paintImg = (number) => {
    const image = new Image();
    image.src = `./images/${number + 1}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
}

const genRandom = () => {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

const bgInit = () => {
    const randomNumber = genRandom();
    paintImg(randomNumber)
}
bgInit();