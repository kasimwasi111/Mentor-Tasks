const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apiKey = "3b72160383fb699a14735dbaeea18da2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    const data = await response.json();
    //   console.log(data);

    cityName.innerHTML = data?.name;
    temp.innerHTML = Math.round(data?.main?.temp) + "°c";
    humidity.innerHTML = data?.main?.humidity + "%";
    wind.innerHTML = data?.wind?.speed + "km/h";

    if (data?.weather[0]?.main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data?.weather[0]?.main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data?.weather[0]?.main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data?.weather[0]?.main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data?.weather[0]?.main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    weather.style.display = "block";
    error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
