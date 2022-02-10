import { hamburger } from "./functions/hamburger";
import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
  activities,
} from "./models/activities";

window.onload = function () {
  findWeather();
  displayActivities();
  hamburger();
};

function findWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=160892&appid=c63709a5195a083bc79195f56a824845"
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      console.log(result.main.temp - 273.15);
      console.log(result.rain);

      let temp: HTMLLIElement = document.createElement("li");
      let iconWrapper: HTMLLIElement = document.createElement("li");
      let icon = document.createElement("i");
      let nowTime: HTMLLIElement = document.createElement("li");

      let tempValue: number = Math.round(result.main.temp - 273.15);

      temp.innerHTML = tempValue.toString() + "°C";

      if (result.clouds.all < 20) {
        icon.className = "fas fa-sun";
      } else if (result.clouds.all > 20 && result.clouds.all < 70) {
        icon.className = "fas fa-cloud-sun";
      } else {
        icon.className = "fas fa-cloud";
      }

      let today: Date = new Date();
      let minutes: string;

      if (today.getMinutes() < 10) {
        minutes = `0${today.getMinutes()}`;
      } else {
        minutes = today.getMinutes().toString();
      }

      let time = today.getHours() + 2 + ":" + minutes;

      nowTime.id = "weather-list";
      temp.id = "weather-list";
      nowTime.innerHTML = time;

      iconWrapper.appendChild(icon);
      document.getElementById("weather").appendChild(nowTime);
      document.getElementById("weather").appendChild(iconWrapper);
      document.getElementById("weather").appendChild(temp);
    });

  // <i class="fas fa-cloud-rain"></i>
}

function displayActivities() {
  let today: Date = new Date();

  let day = today.getDay();
  console.log(day);
  let todayDay: activities[];

  if (day === 1) {
    todayDay = Monday;
  } else if (day === 2) {
    todayDay = Tuesday;
  } else if (day === 3) {
    todayDay = Wednesday;
  } else if (day === 4) {
    todayDay = Thursday;
  } else if (day === 5) {
    todayDay = Friday;
  } else if (day === 6) {
    todayDay = Saturday;
  } else {
    todayDay = Sunday;
  }
  for (let i = 0; i < todayDay.length; i++) {
    let todayActivity: HTMLLIElement = document.createElement("li");

    todayActivity.innerHTML = `${todayDay[i].activity} samling vid ${todayDay[i].place} kl ${todayDay[i].time}:00`;

    document.getElementById("today-activities").appendChild(todayActivity);
  }
}
