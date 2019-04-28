const URL = 'http://api.apixu.com/v1/current.json?key=c9bf02c8667a4e998ad205818192304&q=';
const choiceCityForm = document.querySelector('.choice-city-form');
const buttonShowWeather = document.querySelector('.choice-city-form__button');

const getWeather = (city) => {

  const req = new XMLHttpRequest();
  req.open('GET', `${URL}` + city, false);
  req.send();
  console.log(JSON.parse(req.response));

};

choiceCityForm.addEventListener('submit', e => {
  
  e.preventDefault();

  const city = e.target['choice-city-form__input'].value;
  
  getWeather(city);
  
});


