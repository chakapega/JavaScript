const URL = 'http://api.apixu.com/v1/current.json?key=c9bf02c8667a4e998ad205818192304&q=';
const choiceCityForm = document.querySelector('.choice-city-form');
const buttonShowWeather = document.querySelector('.choice-city-form__button');
let city;
let allDataWeather;

const getWeather = () => {

  const req = new XMLHttpRequest();
  req.open('GET', `${URL}` + city, false);
  req.send();
  
  allDataWeather = JSON.parse(req.response);
  console.log(allDataWeather);
  
};

const showResults = () => {
  const conditionImg = document.querySelector('.condition__img');
  conditionImg.src = 'http:' + allDataWeather.current.condition.icon;

  const conditionText = document.querySelector('.condition__text');
  conditionText.textContent = allDataWeather.current.condition.text;

  const weatherDataWind = document.querySelector('.weather-data__wind');
  weatherDataWind.textContent = 'Wind: ' + allDataWeather.current.wind_kph + ' km/h';

  const weatherDataPrecipitation = document.querySelector('.weather-data__precipitation');
  weatherDataPrecipitation.textContent = 'Precipitation: ' + allDataWeather.current.precip_mm + ' mm';

  const weatherDataPressure = document.querySelector('.weather-data__pressure');
  weatherDataPressure.textContent = 'Pressure: ' + allDataWeather.current.pressure_mb + ' mb';

  const weatherDataTemperature = document.querySelector('.weather-data__temperature');
  weatherDataTemperature.textContent = 'Temperature: ' + allDataWeather.current.temp_c + ' °c';
};

choiceCityForm.addEventListener('submit', e => {
  
  e.preventDefault();

  city = e.target['choice-city-form__input'].value;
  
  getWeather();
  showResults();
  
});




