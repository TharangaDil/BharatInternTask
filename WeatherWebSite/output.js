window.onload = function() {
    var weatherData = JSON.parse(localStorage.getItem('weatherData'));
    if (weatherData) {
        document.querySelector('#output').innerHTML = `Weather of <span>${weatherData.name}</span>`;
        document.querySelector('#temp').innerHTML = `Temperature: <span>${weatherData.temp}°C</span>`;
        document.querySelector('#description').innerHTML = `Sky Condition: <span>${weatherData.description}</span>`;
        document.querySelector('#wind').innerHTML = `Wind speed: <span>${weatherData.windSpeed} km/h</span>`;
    } else {
        alert('No weather data found. Please go back and enter a city name.');
    }
};
