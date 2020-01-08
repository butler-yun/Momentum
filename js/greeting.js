const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';


const saveName = (name) => {
    localStorage.setItem(USER_LS, name);
}

const handleSubmit = (event) => {
    event.preventDefault();

    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

const loadName = () => {
    const currnetUser = localStorage.getItem(USER_LS);
    if (currnetUser === null){
        // he is not
        askForName();
    } else {
        // he is
        paintGreeting(currnetUser);
    }
}

const greetInit = () => {
    loadName();
}
greetInit();