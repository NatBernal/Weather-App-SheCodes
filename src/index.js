function getCurrentTime(){
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
    let min = currentDate.getMinutes().toString().padStart(2, '0');
    return `${day} ${hours}:${min}`;
}

function updateDate() {
  let timeText = document.querySelector("#current-time");
  timeText.innerHTML = getCurrentTime();
}

updateDate();


function updateCity(event){
    event.preventDefault();
    let h1 = document.querySelector("h1");
    let cityFromUser = document.querySelector("#city-input");
    if(cityFromUser.value){
        h1.innerHTML = cityFromUser.value;
    }
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit",updateCity);