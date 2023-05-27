import getWeather from "./modules/api";
import { containerForm, userEntry } from "./modules/dom";

let input = 'Buenos Aires'

document.addEventListener('DOMContentLoaded', getWeather(input));

containerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input = userEntry.value;

    getWeather(input);
});