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
  evt.preventDefault();// BROWSER will send a GET request and expect HTML to come back otherwise

  // const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json?zipcode=${zipcode}`)
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
  const formAnswer = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formAnswer), //takes in an object and converts it to a string, how it actually gets sent to server
    headers: {
      'Content-Type': 'application/json' //if you chose the right content-type, then you could use request.form.get in Flask
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON['code'] === "OK") {
        const message  = document.querySelector('#order-status');
        message.innerHTML = responseJSON['msg'];
        message.classList.remove('order-error');
      } else {
        const message  = document.querySelector('#order-status');
        message.innerHTML = responseJSON['msg']
        message.classList.add('order-error');
      }
    } );

  }
  


const orderForm = document.querySelector('#order-form');
orderForm.addEventListener('submit', orderMelons);
