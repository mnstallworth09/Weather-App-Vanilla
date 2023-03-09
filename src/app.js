function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descritpionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
}

let apiKey = "to3a410424f8a76d0f4c38679e84eb28";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=San%20Francisco&appid=${apikey}&units=metric";
axios.get(url).then(displayTemperature);
