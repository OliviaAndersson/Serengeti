export interface lodge {
  name: string;
  adults: number;
  kids: number;
  features: string[];
  url: string;
  price: number;
}

export let lodges: lodge[] = [
  {
    name: "Baobabs lodge",
    adults: 2,
    kids: 2,
    features: [
      "Bo på vår resort och ha fler komforter!",
      "Trädkoja",
      "Privat badrum",
      "Stor privat balkong",
    ],
    url: "https://i.ibb.co/sJCx1YT/room1ok.jpg",
    price: 4500,
  },

  {
    name: "Giza lodge",
    adults: 2,
    kids: 0,
    features: [
      "Bo på savannen och se djuren från ditt fönster!",
      "Delat badrum",
      "Privat terass med sittarea",
    ],
    url: "https://i.ibb.co/HppWLph/room17.jpg",
    price: 2000,
  },

  {
    name: "Okavango lodge",
    adults: 2,
    kids: 1,
    features: [
      "Bo på savannen och se djuren från ditt fönster!",
      "Delat badrum",
      "Privat terass",
    ],
    url: "https://i.ibb.co/h23g5tR/room7.jpg",
    price: 3000,
  },

  {
    name: "Tiébélé lodge",
    adults: 2,
    kids: 0,
    features: [
      "Bo på savannen och se djuren från ditt tält!",
      "Privat badrum",
      "Privat terass",
    ],
    url: "https://i.ibb.co/7Gn2SNJ/room13.jpg",
    price: 2500,
  },
  {
    name: "Abuja lodge",
    adults: 2,
    kids: 2,
    features: [
      "Bo på savannen och se djuren från ditt fönster!",
      "Delat badrum",
      "Privat terass i tre riktningar",
    ],
    url: "https://i.ibb.co/Tm11Sy5/room19.jpg",
    price: 4500,
  },
  {
    name: "Kakum lodge",
    adults: 2,
    kids: 2,
    features: [
      "Bo på vår resort i den lyxigaste sviten!",
      "Privat badrum",
      "Stor privat terass i tre riktningar",
      "Privat pool",
    ],
    url: "https://i.ibb.co/DbGbSR8/room4.jpg",
    price: 5500,
  },
  {
    name: "Bo-Kaap lodge",
    adults: 2,
    kids: 0,
    features: [
      "Bo på savannen och se djuren från ditt fönster!",
      "Delat badrum",
      "Privat terass",
    ],
    url: "https://i.ibb.co/dkrDH6y/room8.jpg",
    price: 2200,
  },
];
