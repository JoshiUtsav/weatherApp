let lon;
let lat;
let temprature = document.querySelector(".Temprature")
let Location = document.querySelector(".Location")
let Icon = document.querySelector(".Location")
let Summary = document.querySelector(".Summary")
const Kelvin = 273;
window.addEventListener("onload", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;


            // API ID
            const api = "6d055e39ee237af35ca066f35474e9dfx";

            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;


            // CALLING API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temprature.textContent =
                        Math.floor(data.main.temp - Kelvin) + "°C";
                    Summary.textContent = data.weather[0].description;
                    Location.textContent = data.name + " , " + data.sys.country;
                    let icon1 = data.weather[0].Icon;
                    Icon.innerHTML =
                        `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`
                })
        })
    }
})