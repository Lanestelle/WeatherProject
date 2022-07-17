function displayTemperature(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "766f9bb424e44405ec4458d131d2eebd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=${apiKey}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
