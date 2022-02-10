export class bookRoom {
  checkIn: string;
  checkOut: string;
  numberOfNights: number;
  adults: string;
  kids: string;
  firstname: string;
  surname: string;
  email: string;
  phone: string;

  constructor(
    checkIn: string,
    checkOut: string,
    numberOfNights: number,
    adults: string,
    kids: string,
    firstname: string,
    surname: string,
    email: string,
    phone: string
  ) {
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.numberOfNights = numberOfNights;
    this.adults = adults;
    this.kids = kids;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
  }
}

export class bookActivity {
  date: string;
  activity: string;
  people: string;

  constructor(date: string, activity: string, people: string) {
    this.date = date;
    this.activity = activity;
    this.people = people;
  }
}
