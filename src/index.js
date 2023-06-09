let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
} else {
  minutes = minutes + "";
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day} ${hour}:${minutes}`;
}

////

function searching(event) {
  event.preventDefault();
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showResults);
}
function showResults(response) {
  console.log(response.data);
  let getCity = response.data.name;
  let header = document.querySelector("#currentLocation");
  currentLocation.innerHTML = `${getCity}`;

  let getTemp = response.data.main.temp;
  let subHeader = document.querySelector("#temperature");
  subHeader.innerHTML = `${getTemp}`;
}

let submitButton = document.querySelector(".search-form");
submitButton.addEventListener("submit", searching);

function convertToFahrenheight(event) {
  event.preventDefault();
  let strong = document.querySelector("#temperature");
  strong.innerHTML = 57;
}

function convertToCelsius(event) {
  event.preventDefault();
  let strong = document.querySelector("#temperature");
  strong.innerHTML = 14;
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showResults);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let currentButton = document.querySelector("#submit-button");
currentButton.addEventListener("click", getCurrentLocation);
