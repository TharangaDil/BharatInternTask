var input = document.querySelector('#city');
var btn = document.querySelector('#submit');
var apik = "35129468ffcabdb25854285ff126b652";

function convert(val){
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var weatherData = {
            name: data['name'],
            description: data['weather'][0]['description'],
            temp: convert(data['main']['temp']),
            windSpeed: data['wind']['speed']
        };
        
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        window.location.href = 'output.html';
    })
    .catch(err => alert('You entered the wrong city name'));
});
