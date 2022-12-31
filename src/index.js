let now = new Date();
//console.log(now);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Tursday",
  "Friday",
  "Saturday",
];
//console.log(days[now.getDay()]);
//console.log(now.getHours());
//console.log(now.getMinutes());
let dayHoure = document.querySelector("#day-houre");
//console.log(dayHoure);
dayHoure.innerHTML = `${
  days[now.getDay()]
} ${now.getHours()} : ${now.getMinutes()}`;

//--------------

function showTemp(response) {
  let citty = document.querySelector("#city");
  citty.innerHTML = response.data.name;
  let tempp = document.querySelector("#today-temp");
  console.log(tempp);
  tempp.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity:${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
  let status = document.querySelector("#status");
  status.innerHTML = response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = "95ef3a20c4c1d6cf169e6c1c7dadc79c";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
}
function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#myInput");
  //console.log(input.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
  let cityName = input.value;
  searchCity(cityName);
}
let myForm = document.querySelector("form");
//console.log(myForm);
myForm.addEventListener("submit", changeCity);
///-----

function searchLocation(position) {
  let apiKey2 = "95ef3a20c4c1d6cf169e6c1c7dadc79c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;

  axios.get(apiUrl2).then(showTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
//---------
