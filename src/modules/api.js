import displayWeather from "./displayWeather";

export default async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=68c6d26bf9ff4e4b97013316232705&q=${location}`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        displayWeather(weatherData);
    } catch(error) {
        console.log(error);
        return null;
    }
}