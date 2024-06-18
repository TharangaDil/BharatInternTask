var input = document.querySelector('#city');
var btn = document.querySelector('#submit');
var city = document.querySelector('#output');
var detail = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "35129468ffcabdb25854285ff126b652";

function convert(val){
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var details = data['weather'][0]['description'];
        var tempure = convert(data['main']['temp']);
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${tempure}°C</span>`;
        detail.innerHTML = `Sky Condition: <span>${detail}</span>`;
        wind.innerHTML = `Wind speed: <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
