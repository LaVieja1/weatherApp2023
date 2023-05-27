function displayWeather(data) {
    console.log(data.current.condition.text);
    switch(data.current.condition.text) {
        case 'Clear':
            document.body.style.background = 'url("clear.jpg") 10% 50%';
            break;
        default:
            break;
    }
}

export default displayWeather;