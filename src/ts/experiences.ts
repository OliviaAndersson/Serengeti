import { hamburger } from "./functions/hamburger";
import { bookActivity } from "./models/bookings";

window.onload = function () {
  hamburger();

  document.getElementById("button").addEventListener("click", validate);
};

function validate() {
  document.getElementById("confirmation-container").innerHTML = "";
  let date: HTMLInputElement = document.getElementById(
    "date"
  ) as HTMLInputElement;
  let activity: HTMLSelectElement = document.getElementById(
    "choose-activity"
  ) as HTMLSelectElement;
  let people: HTMLSelectElement = document.getElementById(
    "number-of-people"
  ) as HTMLSelectElement;

  if (date.value === "") {
    document.getElementById("validation").innerHTML = "Välj datum!";

    if (activity.value === "0") {
      document.getElementById("validation").innerHTML = "Välj aktivitet!";

      if (people.value === "0") {
        document.getElementById("validation").innerHTML =
          "Välj antal personer!";
      } else {
      }
    } else {
    }
  } else if (activity.value === "0") {
    document.getElementById("validation").innerHTML = "Välj aktivitet!";
  } else if (people.value === "0") {
    document.getElementById("validation").innerHTML = "Välj antal personer!";
  } else {
    bookAnActivity();
  }
}
function bookAnActivity() {
  let date: HTMLInputElement = document.getElementById(
    "date"
  ) as HTMLInputElement;
  let activity: HTMLSelectElement = document.getElementById(
    "choose-activity"
  ) as HTMLSelectElement;
  let people: HTMLSelectElement = document.getElementById(
    "number-of-people"
  ) as HTMLSelectElement;
  console.log(date.value);
  console.log(activity.value);
  console.log(people.value);

  let aktivitet = new bookActivity(date.value, activity.value, people.value);

  if (!localStorage.getItem("bookActivityList")) {
    localStorage.setItem("bookActivityList", "[]");
  }
  let bookActivityListArray: string = localStorage.getItem("bookActivityList");
  let localStorageAArray: bookActivity[] = JSON.parse(bookActivityListArray);

  localStorageAArray.push(aktivitet);

  let localStorageArrayString: string = JSON.stringify(localStorageAArray);
  localStorage.setItem("bookActivityList", localStorageArrayString);

  confirmActivity(aktivitet, date, activity, people);
}

function confirmActivity(
  aktivitet: bookActivity,
  date: HTMLInputElement,
  activity: HTMLSelectElement,
  people: HTMLSelectElement
) {
  let div: HTMLDivElement = document.createElement("div");
  let p: HTMLParagraphElement = document.createElement("p");

  div.id = "confirmation";

  if (aktivitet.people === "1") {
    p.innerHTML = `${aktivitet.people} person är nu bokad på ${aktivitet.activity} den ${aktivitet.date}`;
  } else {
    p.innerHTML = `${aktivitet.people} st personer är nu bokade på ${aktivitet.activity} den ${aktivitet.date}`;
  }
  div.appendChild(p);
  document.getElementById("confirmation-container").appendChild(div);

  date.value = "";
  people.value = "0";
  activity.value = "0";
}
