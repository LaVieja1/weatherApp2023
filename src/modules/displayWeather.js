import { containerForm, userEntry, containerBtn, cityName, hour, temp, tempIcon, tempDescription, feelsLike, humidity, wind } from "./dom";

function displayWeather(data) {
    console.log(data.current.condition.text);

    switch(data.current.condition.text) {
        case 'Clear':
            document.body.style.background = 'url("clear.jpg") 10% 50%';
            tempDescription.innerHTML = 'Despejado';
            break;
        case 'Partly cloudy':
            document.body.style.background = 'url("partly-cloudy.png")';
            tempDescription.innerHTML = 'Parcialmente nublado';
            break;
        case 'Cloudy':
            document.body.style.background = 'url("cloudy.jpg")';
            tempDescription.innerHTML = 'Nublado';
            break;
        case 'Overcast':
            document.body.style.background = 'url("cloudy.jpg")';
            tempDescription.innerHTML = 'Nublado';
            break;
        case 'Mist':
            document.body.style.background = 'url("mist.jpg")';
            tempDescription.innerHTML = 'Niebla';
            break;
        case 'Light rain':
            document.body.style.background = 'url("rain.jpg")';
            tempDescription.innerHTML = 'Lluvia';
            break;
        default:
            document.body.style.background = 'url("default.jpg")';
            tempDescription.innerHTML = '';
            break;
    }

    cityName.innerHTML = `${data.location.name}, ${data.location.country}`;
    hour.innerHTML = `${data.location.localtime}`;

    temp.innerHTML = `${data.current.temp_c} C° o ${data.current.temp_f} F°`;
    tempIcon.src = `https:${data.current.condition.icon}`;

    feelsLike.innerHTML = `Se siente como: ${data.current.feelslike_c} C° o ${data.current.feelslike_f} F°`;
    humidity.innerHTML = `Nivel de humedad: ${data.current.humidity}%`;

    wind.innerHTML = `Viento: ${data.current.wind_kph}kph`;
}

export default displayWeather;