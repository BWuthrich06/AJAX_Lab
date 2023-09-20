'use strict';



// PART 1: SHOW A FORTUNE
// function replaceFortune(){
  
// }

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  

  fetch('/fortune')
    .then((response) => response.text())
    .then((responseTEXT)=> {
      const results = document.querySelector('#fortune-text')
      results.innerText =  responseTEXT})
}

const fortuneButton = document.querySelector('#get-fortune-button');
fortuneButton.addEventListener('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch('/weather.json'`${zipcode}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      const jsonResults = document.querySelector('#weather-info');
      jsonResults.innerHTML = responseJSON['forecast'];
    });
}
const WeatherForm = document.querySelector('#weather-form');
WeatherForm.addEventListener('submit', showWeather);







// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
