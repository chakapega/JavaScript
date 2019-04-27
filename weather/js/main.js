
function getWeather() {
  const req = new XMLHttpRequest();
  req.open('GET', 'http://api.apixu.com/v1/current.json?key=c9bf02c8667a4e998ad205818192304&q=Minsk', false);
  req.send();

  console.log(JSON.parse(req.response));
};

getWeather();




// 93c57d868bafc0824b515f56873c85c4