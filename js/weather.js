const weather = document.querySelector('.js-weather');

const API_KEY = '';
const COORDS = 'coords';


const getWeather = (lat, lon) => {
    fetch(
        `htps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(
        (response) => {
            return response.JSON();
        }
    ).then(
        (json) => {
            const temp = json.main.temp;
            const name = json.name;
            weather.innerText = `${temp} @ ${name}`
        }
    )
}

const saveCoords = (coordObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude,
    }
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

const handleError = () => {
    console.log(`Can't access geo location!`);
}

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

const loadCoords = () => {
    const loadCoord = localStorage.getItem(COORDS);

    if(loadCoord === null){
        askForCoords();
    } else {
        const parseLoadCoord = JSON.parse(loadCoord);
        getWeather(parseLoadCoord.latitude, parseLoadCoord.longitude);
    }
}


const weatherInit = () => {
    loadCoords();
}
weatherInit();