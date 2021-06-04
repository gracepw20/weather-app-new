    let now = new Date();
    function showDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes()
let displayDate = document.querySelector("#today-date-time");
displayDate.innerHTML = `${day} ${hour}:${minutes}`
}
showDate(now);

function searchCity(city) {
let apiKey = "f7c59c83e4191d0c4f2a6496b307d2e1"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayWeather)
}

function displayWeather(response) {
  console.log(response)
  document.querySelector("#current-city").innerHTML = response.data.name  
  document.querySelector("#current-temperature").innerHTML = Math.round(response.data.main.temp)
  document.querySelector("#humidity").innerHTML = response.data.main.humidity
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed)
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].main
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input-city").value
    searchCity(city)
}
let submitCity = document.querySelector("#search-city");
submitCity.addEventListener("submit", handleSubmit);

function changeToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature-element")
    let fahrenheitTemperature = Math.round(18 * (9/5) + 32)
    temperatureElement.innerHTML = `${fahrenheitTemperature}°F`
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

function changeToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector ("#temperature-element")
    temperatureElement.innerHTML = "18°C"
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius)

function searchLocation(position) {
   let apiKey = "f7c59c83e4191d0c4f2a6496b307d2e1"
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(displayWeather)
}

function getCurrentLocation(event) {
  event.preventDefault()
  navigator.geolocation.getCurrentPosition(searchLocation)
}
let currentLocationButton = document.querySelector("#current-location-button")
currentLocationButton.addEventListener("click", getCurrentLocation)

searchCity("London")  



