import '../styles/style.css';
import {getCity, getWeather} from './components/weather';

let cityKey = await getCity("Beijing");
let weatherData = await getWeather(cityKey.Key);

console.log(weatherData);

const div = document.getElementById("content");

const h1 = document.createElement("h1");
h1.textContent = "Hello";
h1.className = "text-4xl text-blue-700";
div.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = 35;
h2.className = "text-blue-700";

div.appendChild(h2);
// console.log(weatherData.DailyForecasts[0].Temperature.Maximum);
// console.log(weatherData.DailyForecasts[0].Temperature.Minimum);