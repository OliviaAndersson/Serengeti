import { hamburger } from "./functions/hamburger";
import { lodge, lodges } from "./models/lodges";
import { Iroom, rooms } from "./models/calender";
import { bookRoom } from "./models/bookings";

window.onload = function () {
  hamburger();

  document.querySelectorAll(".name").forEach((items) => {
    items.addEventListener("click", (e) => {
      findIndex(e);
      document.getElementById("modal-container").style.display = "inline-flex";
      document.getElementById("modal-container").style.position = "fixed";
    });
  });
  document.getElementById("submit").addEventListener("click", searchRoom);

  document.getElementById("check-out").addEventListener("click", changeDate);

  document.getElementById("search").addEventListener("click", validate);
};

function findIndex(e) {
  let name: string = e.path[0].innerHTML;
  let index: number;

  for (let i = 0; i < lodges.length; i++) {
    if (lodges[i].name === name) {
      index = i;
    }
  }
  createModal(index);
}

function createModal(index: number) {
  if (document.getElementById("modal") === null) {
  } else {
    document.getElementById("modal-container").innerHTML = "";
  }
  let modal: HTMLDivElement = document.createElement("div");
  let i: HTMLElement = document.createElement("i");
  let image: HTMLDivElement = document.createElement("div");
  let border: HTMLDivElement = document.createElement("div");
  let textContainer: HTMLDivElement = document.createElement("div");
  let h1: HTMLHeadingElement = document.createElement("h1");
  let ul: HTMLUListElement = document.createElement("ul");
  let people: HTMLLIElement = document.createElement("li");
  let button: HTMLButtonElement = document.createElement("button");
  let adults: HTMLParagraphElement = document.createElement("p");
  let kids: HTMLParagraphElement = document.createElement("p");

  for (let i = 0; i < lodges[index].features.length; i++) {
    let li: HTMLLIElement = document.createElement("li");
    li.innerText = `\u{1F418}  ${lodges[index].features[i]}`;
    ul.appendChild(li);
  }

  modal.id = "modal";
  i.className = "fas fa-times";
  i.id = "close-modal";
  image.id = "image";
  border.id = "border";
  textContainer.id = "text-container";
  people.id = "people";

  image.setAttribute("style", `background-image: url(${lodges[index].url})`);
  button.innerHTML = "Boka";
  h1.innerHTML = lodges[index].name;

  adults.innerHTML = `${lodges[index].adults} vuxna`;
  people.appendChild(adults);

  if (lodges[index].kids === 0) {
  } else {
    kids.innerHTML = `${lodges[index].kids} barn`;
    people.appendChild(kids);
  }

  ul.appendChild(people);

  modal.appendChild(i);
  modal.appendChild(image);
  modal.appendChild(border);

  textContainer.appendChild(h1);
  textContainer.appendChild(ul);
  textContainer.appendChild(button);

  modal.appendChild(textContainer);
  document.getElementById("modal-container").appendChild(modal);

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("modal-container").style.position = "none";
  });
}

function searchRoom() {
  document.querySelector("main").style.display = "none";
  document.getElementById("booking").style.display = "block";
}
function validate() {
  document.getElementById("available-rooms").innerHTML = "";

  document.getElementById("validation-search").innerHTML = "";
  let checkIn: HTMLInputElement = document.getElementById(
    "check-in"
  ) as HTMLInputElement;
  let checkOut: HTMLInputElement = document.getElementById(
    "check-out"
  ) as HTMLInputElement;

  let adults: HTMLSelectElement = document.getElementById(
    "adults"
  ) as HTMLSelectElement;

  if (checkIn.value == "") {
    document.getElementById("validation-search").innerHTML =
      "Glöm inte incheckningsdatum";
    if (checkOut.value == "") {
      document.getElementById("validation-search").innerHTML =
        "Glöm inte incheckningsdatum & utcheckningsdatum";
      if (adults.value == "0") {
        document.getElementById("validation-search").innerHTML =
          "Glöm inte incheckningsdatum & utcheckningsdatum & antal vuxna";
      } else {
      }
    } else if (adults.value == "0") {
      document.getElementById("validation-search").innerHTML =
        "Glöm inte antal vuxna";
    } else {
    }
  } else if (checkOut.value == "") {
    document.getElementById("validation-search").innerHTML =
      "Glöm inte utcheckningsdatum";
    if (adults.value == "0") {
      document.getElementById("validation-search").innerHTML =
        "Glöm inte utcheckningsdatum & antal vuxna";
    } else {
    }
  } else if (adults.value == "0") {
    document.getElementById("validation-search").innerHTML =
      "Glöm inte antal vuxna";
  } else if (checkIn.value == checkOut.value) {
    document.getElementById("validation-search").innerHTML =
      "Du måste boka minst en natt!";
  } else {
    displayRooms(checkIn, checkOut);
  }
}

function dateRange(startDate, endDate, steps = 1) {
  let dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate).getDate());
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}

function monthRange(startDate, endDate, steps = 1) {
  let monthArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    monthArray.push(new Date(currentDate).getMonth());
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return monthArray;
}

function displayRooms(checkIn, checkOut) {
  let checkOutValue = checkOut.value;
  let checkInValue = checkIn.value;

  const date1 = new Date(checkInValue);
  const date2 = new Date(checkOutValue);

  let oneDay = 1000 * 60 * 60 * 24;
  let diffInTime = date2.getTime() - date1.getTime();

  let diffInDays = Math.round(diffInTime / oneDay);

  let dates: number[] = dateRange(checkInValue, checkOutValue);
  let months: number[] = monthRange(checkInValue, checkOutValue);

  let adultsSelect: HTMLSelectElement = document.getElementById(
    "adults"
  ) as HTMLSelectElement;
  let kidsSelect: HTMLSelectElement = document.getElementById(
    "kids"
  ) as HTMLSelectElement;

  for (let d = 0; d < dates.length; d++) {
    for (let i = 0; i < rooms.length; i++) {
      if (kidsSelect.value === "2" && lodges[i].kids < 2) {
        rooms[i].available = false;
      } else if (kidsSelect.value === "1" && lodges[i].kids === 0) {
        rooms[i].available = false;
      } else if (kidsSelect.value === "1" && lodges[i].kids === 2) {
      } else {
      }
      if (months[d] == 0) {
        for (let x = 0; x < rooms[i].dates.january.length; x++) {
          if (dates[d] == rooms[i].dates.january[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 1) {
        for (let x = 0; x < rooms[i].dates.february.length; x++) {
          if (dates[d] == rooms[i].dates.february[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 2) {
        console.log(rooms[i].dates.march);
        for (let x = 0; x < rooms[i].dates.march.length; x++) {
          if (dates[d] === rooms[i].dates.march[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 3) {
        for (let x = 0; x < rooms[i].dates.april.length; x++) {
          if (dates[d] === rooms[i].dates.april[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 4) {
        for (let x = 0; x < rooms[i].dates.may.length; x++) {
          if (dates[d] === rooms[i].dates.may[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 5) {
        for (let x = 0; x < rooms[i].dates.june.length; x++) {
          if (dates[d] === rooms[i].dates.june[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 6) {
        for (let x = 0; x < rooms[i].dates.july.length; x++) {
          if (dates[d] === rooms[i].dates.july[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 7) {
        for (let x = 0; x < rooms[i].dates.august.length; x++) {
          if (dates[d] === rooms[i].dates.august[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 8) {
        for (let x = 0; x < rooms[i].dates.september.length; x++) {
          if (dates[d] === rooms[i].dates.september[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 9) {
        for (let x = 0; x < rooms[i].dates.october.length; x++) {
          if (dates[d] === rooms[i].dates.october[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else if (months[d] == 10) {
        for (let x = 0; x < rooms[i].dates.november.length; x++) {
          if (dates[d] === rooms[i].dates.november[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      } else {
        for (let x = 0; x < rooms[i].dates.december.length; x++) {
          if (dates[d] === rooms[i].dates.december[x]) {
            rooms[i].available = false;
          } else {
          }
        }
      }
    }

    createDisplay(
      diffInDays,
      checkInValue,
      checkOutValue,
      kidsSelect,
      adultsSelect
    );
  }
}

function createDisplay(
  diffInDays: number,
  checkInValue: string,
  checkOutValue: string,
  kidsSelect,
  adultsSelect
) {
  document.getElementById("available-rooms").innerHTML = "";
  for (let i = 0; i < rooms.length; i++) {
    //index is same for lodges and rooms
    if (rooms[i].available === true) {
      let div: HTMLDivElement = document.createElement("div");
      let roomImage: HTMLDivElement = document.createElement("div");
      let roomText: HTMLDivElement = document.createElement("div");
      let h1: HTMLHeadingElement = document.createElement("h1");
      let ul: HTMLUListElement = document.createElement("ul");
      let price: HTMLDivElement = document.createElement("div");
      let p: HTMLParagraphElement = document.createElement("p");
      let button: HTMLButtonElement = document.createElement("button");
      let adults: HTMLParagraphElement = document.createElement("p");
      let people: HTMLLIElement = document.createElement("li");

      for (let x = 0; x < lodges[i].features.length; x++) {
        let li: HTMLLIElement = document.createElement("li");
        li.innerHTML = lodges[i].features[x];

        ul.appendChild(li);
      }

      roomImage.id = "room-image";
      roomText.id = "room-text";
      price.id = "price";
      div.id = "room";

      h1.innerHTML = lodges[i].name;
      roomImage.setAttribute(
        "style",
        `background-image: url(${lodges[i].url})`
      );
      button.innerHTML = "BOKA";
      button.setAttribute("type", "button");
      p.innerHTML = `${lodges[i].price * diffInDays} kr`;
      adults.innerHTML = `${lodges[i].adults} vuxna`;
      people.id = "adults-kids";

      people.appendChild(adults);

      if (lodges[i].kids === 0) {
      } else {
        let kids: HTMLParagraphElement = document.createElement("p");
        kids.innerHTML = `${lodges[i].kids} barn`;
        people.appendChild(kids);
      }
      ul.appendChild(people);
      price.appendChild(p);
      price.appendChild(button);

      roomText.appendChild(h1);
      roomText.appendChild(ul);

      div.appendChild(roomImage);
      div.appendChild(roomText);
      div.appendChild(price);

      document.getElementById("available-rooms").appendChild(div);

      button.addEventListener("click", function (event) {
        let index: number;
        let text: string = event.path[2].innerText;
        document.getElementById("booking").style.display = "none";
        document.getElementById("book").style.display = "block";
        if (text.includes(rooms[i].name)) {
          index = i;
          console.log(index);
        } else {
        }
        book(
          index,
          diffInDays,
          checkInValue,
          checkOutValue,
          kidsSelect,
          adultsSelect
        );
      });
    }
  }
}

function changeDate() {
  let checkIn: HTMLInputElement = document.getElementById(
    "check-in"
  ) as HTMLInputElement;

  document.getElementById("check-out").setAttribute("min", checkIn.value);
}

function book(
  index: number,
  diffInDays: number,
  checkInValue: string,
  checkOutValue: string,
  kidsSelect: HTMLSelectElement,
  adultsSelect: HTMLSelectElement
) {
  document.getElementById("booking-button").addEventListener("click", () => {
    console.log("hje");
    createBooking(
      index,
      diffInDays,
      checkInValue,
      checkOutValue,
      kidsSelect,
      adultsSelect
    );
  });

  let roomImage: HTMLDivElement = document.createElement("div");
  let roomText: HTMLDivElement = document.createElement("div");
  let h1: HTMLHeadingElement = document.createElement("h1");
  let ul: HTMLUListElement = document.createElement("ul");
  let price: HTMLDivElement = document.createElement("div");
  let p: HTMLParagraphElement = document.createElement("p");
  let adults: HTMLParagraphElement = document.createElement("p");
  let people: HTMLLIElement = document.createElement("li");

  for (let x = 0; x < lodges[index].features.length; x++) {
    let li: HTMLLIElement = document.createElement("li");
    li.innerHTML = lodges[index].features[x];

    ul.appendChild(li);
  }

  roomImage.id = "room-image";
  roomText.id = "room-text";
  price.id = "price";

  h1.innerHTML = lodges[index].name;
  roomImage.setAttribute(
    "style",
    `background-image: url(${lodges[index].url})`
  );

  p.innerHTML = `${lodges[index].price * diffInDays} kr`;
  adults.innerHTML = `${lodges[index].adults} vuxna`;
  people.id = "adults-kids";

  people.appendChild(adults);

  if (lodges[index].kids === 0) {
  } else {
    let kids: HTMLParagraphElement = document.createElement("p");
    kids.innerHTML = `${lodges[index].kids} barn`;
    people.appendChild(kids);
  }
  ul.appendChild(people);
  price.appendChild(p);

  roomText.appendChild(h1);
  roomText.appendChild(ul);

  document.getElementById("choosen-room").appendChild(roomImage);
  document.getElementById("choosen-room").appendChild(roomText);
  document.getElementById("choosen-room").appendChild(price);
}

function createBooking(
  index: number,
  diffInDays: number,
  checkInValue: string,
  checkOutValue: string,
  kidsSelect: HTMLSelectElement,
  adultsSelect: HTMLSelectElement
) {
  let firstname: HTMLInputElement = document.getElementById(
    "firstname"
  ) as HTMLInputElement;
  let surname: HTMLInputElement = document.getElementById(
    "surname"
  ) as HTMLInputElement;
  let phone: HTMLInputElement = document.getElementById(
    "phone"
  ) as HTMLInputElement;
  let email: HTMLInputElement = document.getElementById(
    "email"
  ) as HTMLInputElement;

  if (firstname.value == "") {
    document.getElementById("required").innerHTML = "Glöm inte ditt förnamn";
    if (surname.value == "") {
      document.getElementById("required").innerHTML =
        "Glöm inte ditt förnamn & efternamn";

      if (email.value == "") {
        document.getElementById("required").innerHTML =
          "Glöm inte ditt förnamn, efternamn & email";

        if (phone.value == "") {
          document.getElementById("required").innerHTML =
            "Glöm inte ditt förnamn, efternamn, email & telefonnummer";
        }
      }
    } else if (email.value == "") {
      document.getElementById("required").innerHTML =
        "Glöm inte ditt förnamn & email";

      if (phone.value == "") {
        document.getElementById("required").innerHTML =
          "Glöm inte ditt förnamnm, email & telefonnummer";
      }
    } else if (phone.value == "") {
      document.getElementById("required").innerHTML =
        "Glöm inte ditt förnamn & telefonnummer";
    } else {
    }
  } else if (surname.value == "") {
    document.getElementById("required").innerHTML = "Glöm inte ditt efternamn";

    if (email.value == "") {
      document.getElementById("required").innerHTML =
        "Glöm inte din efternamn & email";

      if (phone.value == "") {
        document.getElementById("required").innerHTML =
          "Glöm inte din efternamn, email & telefonnummer";
      }
    }
  } else if (email.value == "") {
    document.getElementById("required").innerHTML = "Glöm inte din email";
    if (phone.value == "") {
      document.getElementById("required").innerHTML =
        "Glöm inte din email & telefonnummer";
    }
  } else if (phone.value == "") {
    document.getElementById("required").innerHTML =
      "Glöm inte ditt telefonnummer";
  } else {
    let newBook = new bookRoom(
      checkInValue,
      checkOutValue,
      diffInDays,
      adultsSelect.value,
      kidsSelect.value,
      firstname.value,
      surname.value,
      email.value,
      phone.value
    );

    console.log(newBook);

    if (!localStorage.getItem("bookRoomList")) {
      localStorage.setItem("bookRoomList", "[]");
    }
    let bookRoomListArray: string = localStorage.getItem("bookRoomList");
    let localStorageArray: bookRoom[] = JSON.parse(bookRoomListArray);

    localStorageArray.push(newBook);

    let localStorageArrayString: string = JSON.stringify(localStorageArray);
    localStorage.setItem("bookRoomList", localStorageArrayString);
  }
}
