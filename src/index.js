function getCurrentTime() {
  let currentDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  let hours = currentDate.getHours();
  let min = currentDate.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${min}`;
}

function updateDate() {
  let timeText = document.querySelector("#current-time");
  timeText.innerHTML = getCurrentTime();
}

updateDate();

let apiKey = "tb2ao78a593914ebf4f9e2500f3e40d8";

function updateTemperatureLabel(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let temperatureLabel = document.querySelector("#temperature-number");
  temperatureLabel.innerHTML = currentTemperature;
}

function updateTemperature(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemperatureLabel);
}

function updateCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let cityFromUser = document.querySelector("#city-input");
  if (cityFromUser.value) {
    h1.innerHTML = cityFromUser.value;
    updateTemperature(cityFromUser.value);
  }
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", updateCity);
