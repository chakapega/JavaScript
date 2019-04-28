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

  const location = document.querySelector('.location');
  location.textContent = allDataWeather.location.country + ' / ' + allDataWeather.location.name;

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

const createElemForResults = () => {

  const resultsContainer = document.createElement('div');
  const location = document.createElement('span');
  const condition = document.createElement('div');
  const conditionImg = document.createElement('img');
  const conditionText = document.createElement('span');
  const wind = document.createElement('span');
  const precipitation = document.createElement('span');
  const pressure = document.createElement('span');
  const temperature = document.createElement('span');

  resultsContainer.classList.add('results__container');

  location.classList.add('location');
  location.textContent = allDataWeather.location.country + ' / ' + allDataWeather.location.name;

  condition.classList.add('condition');
  
  conditionImg.classList.add('condition__img');
  conditionImg.src = 'http:' + allDataWeather.current.condition.icon;

  conditionText.classList.add('condition__text');
  conditionText.textContent = allDataWeather.current.condition.text;

  wind.classList.add('wind');
  wind.textContent = 'Wind: ' + allDataWeather.current.wind_kph + ' km/h';

  precipitation.classList.add('precipitation');
  precipitation.textContent = 'Precipitation: ' + allDataWeather.current.precip_mm + ' mm';

  pressure.classList.add('pressure');
  pressure.textContent = 'Pressure: ' + allDataWeather.current.pressure_mb + ' mb';

  temperature.classList.add('temperature');
  temperature.textContent = 'Temperature: ' + allDataWeather.current.temp_c + ' °c';

  resultsContainer.appendChild(location);
  condition.appendChild(conditionImg);
  condition.appendChild(conditionText);
  resultsContainer.appendChild(condition);
  resultsContainer.appendChild(wind);
  resultsContainer.appendChild(precipitation);
  resultsContainer.appendChild(pressure);
  resultsContainer.appendChild(temperature);

  return resultsContainer;

};

choiceCityForm.addEventListener('submit', e => {
  
  e.preventDefault();

  city = e.target['choice-city-form__input'].value;
  
  getWeather();
  showResults();
  
  
});




