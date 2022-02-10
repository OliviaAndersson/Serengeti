import { lodges } from "./lodges";

export interface Imonth {
  january: number[];
  february: number[];
  march: number[];
  april: number[];
  may: number[];
  june: number[];
  july: number[];
  august: number[];
  september: number[];
  october: number[];
  november: number[];
  december: number[];
}

// export interface Iroom {
//   name: string;
//   dates: {
//     january: string[];
//     february: string[];
//     march: string[];
//     april: string[];
//     may: string[];
//     june: string[];
//     july: string[];
//     august: string[];
//     september: string[];
//     october: string[];
//     november: string[];
//     december: string[];
//   };
// }

export interface Iroom {
  name: string;
  available: boolean;
  dates: {
    january: number[];
    february: number[];
    march: number[];
    april: number[];
    may: number[];
    june: number[];
    july: number[];
    august: number[];
    september: number[];
    october: number[];
    november: number[];
    december: number[];
  };
}

export let rooms: Iroom[] = [
  {
    name: "Baobabs lodge",
    available: true,
    dates: {
      january: [12, 13, 14, 24, 25],
      february: [1, 2, 3, 27, 28, 29],
      march: [10, 11, 12],
      april: [20, 21, 22, 23],

      may: [5, 6, 7, 13, 14, 24, 25],
      june: [12, 13, 14],
      july: [3, 4, 5, 20, 21, 22],
      august: [5, 6, 28, 29, 30],
      september: [4, 5, 6, 23, 24, 25],
      october: [11, 12, 13],
      november: [1, 2, 3],
      december: [20, 21, 22],
    },
  },
  {
    name: "Giza lodge",
    available: true,
    dates: {
      january: [10, 11, 12],
      february: [10, 11, 13, 14],
      march: [5, 6, 7, 24, 25],
      april: [28, 29, 30],

      may: [1, 2, 3],
      june: [1, 2, 3, 27, 28, 29],
      july: [20, 21, 22],
      august: [20, 21, 22, 23],
      september: [10, 11, 12, 13],
      october: [4, 5, 6, 24, 25],
      november: [5, 6, 13, 14, 24, 25],
      december: [3, 4, 5, 20, 21],
    },
  },
  {
    name: "Okavango lodge",
    available: true,
    dates: {
      january: [10, 11, 12, 13],
      february: [5, 6, 7, 13, 14, 15],
      march: [20, 21],
      april: [1, 2, 3],
      may: [18, 19, 12, 29, 30],
      june: [1, 2, 3],
      july: [8, 9, 10],
      august: [1, 2, 29, 30],
      september: [15, 16, 23, 24],
      october: [24, 25],
      november: [5, 6],
      december: [30, 31],
    },
  },
  {
    name: "Tiébélé lodge",
    available: true,
    dates: {
      january: [1, 2, 3, 4, 12, 13, 14, 28, 29],
      february: [6, 7, 8],
      march: [19, 20, 30],
      april: [1, 2, 26, 27],

      may: [16, 17, 18, 29, 30],
      june: [1, 2],
      july: [5, 6],
      august: [30, 31],
      september: [17, 18],
      october: [19, 20, 21],
      november: [5, 6, 7],
      december: [1, 2, 3],
    },
  },
  {
    name: "Abuja lodge",
    available: true,
    dates: {
      january: [5, 6, 7, 8],
      february: [1, 2, 3, 27, 28, 29],
      march: [1, 2, 3],
      april: [5, 6, 7],

      may: [18, 19, 20, 29, 30],
      june: [1, 2, 3],
      july: [28, 29, 30],
      august: [16, 17, 18, 31],
      september: [1, 21, 22],
      october: [1, 2, 19, 20],
      november: [17, 18, 19],
      december: [3, 4],
    },
  },
  {
    name: "Kakum lodge",
    available: true,
    dates: {
      january: [10, 11, 31],
      february: [1, 17, 18, 19],
      march: [5, 6, 7],
      april: [25, 26, 27, 28],

      may: [1, 2, 3, 10, 11],
      june: [],
      july: [9, 10],
      august: [3, 4],
      september: [29, 30],
      october: [1, 2],
      november: [14, 15, 16],
      december: [2, 3, 7, 8],
    },
  },
  {
    name: "Bo-Kaap lodge",
    available: true,
    dates: {
      january: [],
      february: [13, 14],
      march: [17, 18, 19],
      april: [11, 12, 13],
      may: [3, 4, 25, 26],
      june: [1, 2, 3],
      july: [13, 14, 15],
      august: [23, 24],
      september: [11, 12],
      october: [4, 5, 6],
      november: [27, 28, 29],
      december: [27, 28],
    },
  },
];
