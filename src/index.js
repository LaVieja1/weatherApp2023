import getWeather from "./modules/api";
import { containerForm, userEntry, containerBtn } from "./modules/dom";

let input = 'Buenos Aires'

document.addEventListener('DOMContentLoaded', getWeather(input));

containerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input = userEntry.value;
    getWeather(input);
    userEntry.value = '';
});

containerBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    input = userEntry.value;
    getWeather(input);
    userEntry.value = '';
});