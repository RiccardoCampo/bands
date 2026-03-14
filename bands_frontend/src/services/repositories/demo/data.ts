export type DemoArtist = {
  id: number
  name: string
  link_url: string
  rating: number
}

export type DemoMetric = {
  id: number
  name: string
  type: number
  category: string
}

export type DemoScore = {
  id: number
  value: number
  artist_id: number
  metric_id: number
}

export const ARTISTS: DemoArtist[] = [
  {
    "id" : 1,
    "name" : "Nirvana",
    "link_url" : "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh",
    "rating" : 5
  },
  {
    "id" : 2,
    "name" : "John Coltrane",
    "link_url" : "https://open.spotify.com/artist/2hGh5VOeeqimQFxqXvfCUf",
    "rating" : 5
  },
  {
    "id" : 3,
    "name" : "Pink Floyd",
    "link_url" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
    "rating" : 5
  },
  {
    "id" : 4,
    "name" : "Sam Rivers",
    "link_url" : "https://open.spotify.com/artist/0DNuWm5ZBKuCIXLNmrzuk5",
    "rating" : 3
  },
  {
    "id" : 5,
    "name" : "Nick Walters",
    "link_url" : "https://open.spotify.com/artist/5a6sros3Ji7xS9QKav9il2",
    "rating" : 4
  },
  {
    "id" : 6,
    "name" : "Francesco Guaiana",
    "link_url" : "https://open.spotify.com/artist/5SdCrvzpgKM6rXCToW8WDG",
    "rating" : 3
  },
  {
    "id" : 7,
    "name" : "Slint",
    "link_url" : "https://open.spotify.com/artist/4IwOItqRhsIoRuD5HP4vyC",
    "rating" : 3
  },
  {
    "id" : 8,
    "name" : "Shellac",
    "link_url" : "https://open.spotify.com/artist/6I8R5MFTlez7rHCsH4cx0u",
    "rating" : 4
  },
  {
    "id" : 10,
    "name" : "Creedence Clearwater Revival",
    "link_url" : "https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd",
    "rating" : 4
  },
  {
    "id" : 11,
    "name" : "Bob Marley",
    "link_url" : "https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD",
    "rating" : 5
  },
  {
    "id" : 12,
    "name" : "Duke Ellington",
    "link_url" : "https://open.spotify.com/artist/4F7Q5NV6h5TSwCainz8S5A",
    "rating" : 5
  },
  {
    "id" : 13,
    "name" : "Ella Fitzgerald",
    "link_url" : "https://open.spotify.com/artist/5V0MlUE1Bft0mbLlND7FJz",
    "rating" : 5
  },
  {
    "id" : 14,
    "name" : "Dave Brubeck Quartet",
    "link_url" : "https://open.spotify.com/artist/4iRZAbYvBqnxrbs6K25aJ7",
    "rating" : 5
  },
  {
    "id" : 15,
    "name" : "Pixies",
    "link_url" : "https://open.spotify.com/artist/6zvul52xwTWzilBZl6BUbT",
    "rating" : 5
  },
  {
    "id" : 16,
    "name" : "Pearl Jam",
    "link_url" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56",
    "rating" : 5
  },
  {
    "id" : 17,
    "name" : "Peel Dream Magazine",
    "link_url" : "https://open.spotify.com/artist/0Un1afF0WG8Eh94e1NqOEd",
    "rating" : 4
  },
  {
    "id" : 18,
    "name" : "Built To Spill",
    "link_url" : "https://open.spotify.com/artist/3kbBWco9PZ5eSQsNScwG6U",
    "rating" : 4
  },
  {
    "id" : 19,
    "name" : "Herbie Hancock",
    "link_url" : "https://open.spotify.com/artist/2ZvrvbQNrHKwjT7qfGFFUW",
    "rating" : 5
  },
  {
    "id" : 20,
    "name" : "Wolf Parade",
    "link_url" : "https://open.spotify.com/artist/0XSqX2PB3C5dTMv7SZaxSm",
    "rating" : 5
  },
  {
    "id" : 22,
    "name" : "somesurprises",
    "link_url" : "https://open.spotify.com/artist/0qgRfYHnkX1aRKmlWOEJZV",
    "rating" : 3
  },
  {
    "id" : 23,
    "name" : "Lorelle Meets The Obsolete",
    "link_url" : "https://open.spotify.com/artist/79ckv9yY9WAKcH8KfrvmiP",
    "rating" : 4
  },
  {
    "id" : 24,
    "name" : "Sigur Ros",
    "link_url" : "https://open.spotify.com/artist/6UUrUCIZtQeOf8tC0WuzRy",
    "rating" : 3
  },
  {
    "id" : 25,
    "name" : "Blur",
    "link_url" : "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS",
    "rating" : 4
  },
  {
    "id" : 26,
    "name" : "Mojave 3",
    "link_url" : "https://open.spotify.com/artist/4jSYHcSo85heWskYvAULio",
    "rating" : 4
  },
  {
    "id" : 27,
    "name" : "Billie Holiday",
    "link_url" : "https://open.spotify.com/artist/1YzCsTRb22dQkh9lghPIrp",
    "rating" : 4
  },
  {
    "id" : 28,
    "name" : "Bill Evans Trio",
    "link_url" : "https://open.spotify.com/artist/3VEG6gxFIMfl4Cdog26avS",
    "rating" : 5
  },
  {
    "id" : 29,
    "name" : "Alice in Chains",
    "link_url" : "https://open.spotify.com/artist/64tNsm6TnZe2zpcMVMOoHL",
    "rating" : 5
  },
  {
    "id" : 30,
    "name" : "Yo La Tengo",
    "link_url" : "https://open.spotify.com/album/4NdINo3J9ncT8qeD7hfxJf",
    "rating" : 5
  },
  {
    "id" : 31,
    "name" : "English Teacher",
    "link_url" : "https://open.spotify.com/artist/5H9IFTRxSICj24uxO15ScU",
    "rating" : 5
  },
  {
    "id" : 32,
    "name" : "Chad VanGaalen",
    "link_url" : "https://open.spotify.com/artist/597yzFFRvWnxCtDInHwciZ",
    "rating" : 4
  },
  {
    "id" : 33,
    "name" : "Chris Cohen",
    "link_url" : "https://open.spotify.com/artist/2OYDcH3MLWeNjj7gQVUbEF",
    "rating" : 3
  },
  {
    "id" : 34,
    "name" : "Meat Puppets",
    "link_url" : "https://open.spotify.com/artist/2h9yQhKyqOMex3QFMVeq7F",
    "rating" : 3
  },
  {
    "id" : 35,
    "name" : "Flore Laurentienne",
    "link_url" : "https://open.spotify.com/artist/05ElmDRcpwbAIRmLqRw1Bv",
    "rating" : 5
  },
  {
    "id" : 36,
    "name" : "Naima Bock",
    "link_url" : "https://open.spotify.com/album/4FBlXgeZ4n0nwY0bXuZ8P2",
    "rating" : 4
  },
  {
    "id" : 37,
    "name" : "Ezra Feinberg",
    "link_url" : "https://open.spotify.com/artist/3TR2eEGzLPwTkCIcMXW01J",
    "rating" : 4
  },
  {
    "id" : 38,
    "name" : "Descartes A Kant",
    "link_url" : "https://open.spotify.com/artist/3f5vjwUNkT5TxEnFxwJh8j",
    "rating" : 3
  },
  {
    "id" : 39,
    "name" : "Wire",
    "link_url" : "https://open.spotify.com/artist/2i8ynmFv4qgRksyDlBgi6d",
    "rating" : 4
  },
  {
    "id" : 40,
    "name" : "Soundgarden",
    "link_url" : "https://open.spotify.com/intl-it/artist/5xUf6j4upBrXZPg6AI4MRK",
    "rating" : 5
  },
  {
    "id" : 41,
    "name" : "Lemon Boy",
    "link_url" : "https://open.spotify.com/album/3rvlcjp7Xd6cU9leRJF9xQ",
    "rating" : 3
  },
  {
    "id" : 42,
    "name" : "Les Savy Fav",
    "link_url" : "https://open.spotify.com/artist/5DZBnxCYzs32O2bbqK8KNg",
    "rating" : 3
  },
  {
    "id" : 43,
    "name" : "An Attendant Ana",
    "link_url" : "https://open.spotify.com/artist/7mKMQWOBVDivOhswm33WDL",
    "rating" : 4
  },
  {
    "id" : 44,
    "name" : "Nina Simone",
    "link_url" : "https://open.spotify.com/artist/7G1GBhoKtEPnP86X2PvEYO",
    "rating" : 4
  },
  {
    "id" : 45,
    "name" : "The Cranberries",
    "link_url" : "https://open.spotify.com/artist/7t0rwkOPGlDPEhaOcVtOt9",
    "rating" : 5
  },
  {
    "id" : 46,
    "name" : "The Skatalites",
    "link_url" : "https://open.spotify.com/artist/4og9jrin5xH5JiFPbeGUPb",
    "rating" : 5
  },
  {
    "id" : 47,
    "name" : "Genesis",
    "link_url" : "https://open.spotify.com/artist/3CkvROUTQ6nRi9yQOcsB50",
    "rating" : 5
  },
  {
    "id" : 48,
    "name" : "The Smashing Pumpkins",
    "link_url" : "https://open.spotify.com/artist/40Yq4vzPs9VNUrIBG5Jr2i",
    "rating" : 5
  },
  {
    "id" : 49,
    "name" : "Dinosaur Jr",
    "link_url" : "https://open.spotify.com/artist/267VY6GX5LyU5c9M85ECZQ",
    "rating" : 5
  },
  {
    "id" : 50,
    "name" : "The Smiths",
    "link_url" : "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8",
    "rating" : 3
  },
  {
    "id" : 51,
    "name" : "Sonic Youth",
    "link_url" : "https://open.spotify.com/artist/5UqTO8smerMvxHYA5xsXb6",
    "rating" : 5
  },
  {
    "id" : 52,
    "name" : "Slowdive",
    "link_url" : "https://open.spotify.com/artist/72X6FHxaShda0XeQw3vbeF",
    "rating" : 5
  },
  {
    "id" : 53,
    "name" : "Cocteau Twins",
    "link_url" : "https://open.spotify.com/artist/5Wabl1lPdNOeIn0SQ5A1mp",
    "rating" : 3
  },
  {
    "id" : 54,
    "name" : "Lester Bowie",
    "link_url" : "https://open.spotify.com/artist/3r0t2sPG17gaUgXDJyJmHf",
    "rating" : 5
  },
  {
    "id" : 55,
    "name" : "Ducks Ltd.",
    "link_url" : "https://open.spotify.com/artist/6PypZhdlKno9oouYu6roMG",
    "rating" : 2
  },
  {
    "id" : 56,
    "name" : "Don Cherry",
    "link_url" : "https://open.spotify.com/intl-it/artist/3uPWecBPNXAChysw1uOJwI",
    "rating" : 3
  },
  {
    "id" : 58,
    "name" : "Helmet",
    "link_url" : "https://open.spotify.com/intl-it/artist/0qB0cTENhSUc0feov5qbg0",
    "rating" : 4
  },
  {
    "id" : 59,
    "name" : "Yellowman",
    "link_url" : "https://open.spotify.com/intl-it/artist/6yTNMMqumesCWhMJ47HB2a",
    "rating" : 2
  },
  {
    "id" : 60,
    "name" : "David Bowie",
    "link_url" : "https://open.spotify.com/intl-it/artist/0oSGxfWSnnOXhD2fKuz2Gy",
    "rating" : 5
  },
  {
    "id" : 61,
    "name" : "Suede",
    "link_url" : "https://open.spotify.com/intl-it/artist/6PHIK3kjWggLtVygsOtpqS",
    "rating" : 3
  },
  {
    "id" : 62,
    "name" : "Nick Drake",
    "link_url" : "https://open.spotify.com/intl-it/artist/5c3GLXai8YOMid29ZEuR9y",
    "rating" : 5
  },
  {
    "id" : 63,
    "name" : "Mazzy Star",
    "link_url" : "https://open.spotify.com/intl-it/artist/37w38cCSGgKLdayTRjna4W",
    "rating" : 2
  },
  {
    "id" : 64,
    "name" : "Amycanbe",
    "link_url" : "https://open.spotify.com/intl-it/artist/585ZgcAEa3UzKqpI6p2uj9",
    "rating" : 4
  },
  {
    "id" : 65,
    "name" : "Snazzback",
    "link_url" : "https://open.spotify.com/intl-it/artist/3bD0qDLbGmvMvbaP8vHr9e",
    "rating" : 2
  },
  {
    "id" : 66,
    "name" : "Porcupine Tree",
    "link_url" : "https://open.spotify.com/intl-it/artist/5NXHXK6hOCotCF8lvGM1I0",
    "rating" : 5
  },
  {
    "id" : 67,
    "name" : "Jimmy Cliff",
    "link_url" : "https://open.spotify.com/artist/3rJ3m1tM6vUgiWLjfV8sRf",
    "rating" : 3
  },
  {
    "id" : 68,
    "name" : "Marcia Griffiths",
    "link_url" : "https://open.spotify.com/artist/4qLV9FR6ZVLS6W8drD78hM",
    "rating" : 3
  },
  {
    "id" : 69,
    "name" : "David Murray Octet",
    "link_url" : "https://open.spotify.com/artist/3l224efDR8MLI6S2N1LrZQ",
    "rating" : 4
  },
  {
    "id" : 70,
    "name" : "Sunset Rubdown",
    "link_url" : "https://open.spotify.com/artist/4kmq4NmMAD2EB24v6Il3qr",
    "rating" : 2
  },
  {
    "id" : 71,
    "name" : "The Ink Spots",
    "link_url" : "https://open.spotify.com/artist/5bOsFzuJ6QZMr86ezC4oXY",
    "rating" : 5
  },
  {
    "id" : 72,
    "name" : "Max Bruch",
    "link_url" : "https://open.spotify.com/album/4flm0ee5YBEwUpVAo63HXU",
    "rating" : 4
  },
  {
    "id" : 73,
    "name" : "Stone Temple Pilots",
    "link_url" : "https://open.spotify.com/artist/2UazAtjfzqBF0Nho2awK4z",
    "rating" : 3
  },
  {
    "id" : 74,
    "name" : "Clap Your Hands And Say Yeah",
    "link_url" : "https://open.spotify.com/artist/1jSaZgaKHmgc7VTgML528r",
    "rating" : 4
  },
  {
    "id" : 75,
    "name" : "Lush",
    "link_url" : "https://open.spotify.com/artist/3ysp8GwsheDcBxP9q65lBg",
    "rating" : 4
  },
  {
    "id" : 76,
    "name" : "Brad Mehldau",
    "link_url" : "https://open.spotify.com/artist/2vI9KFm0fwSfPrpEgOeIbq",
    "rating" : 1
  },
  {
    "id" : 77,
    "name" : "Pavement",
    "link_url" : "https://open.spotify.com/artist/3inCNiUr4R6XQ3W43s9Aqi",
    "rating" : 5
  },
  {
    "id" : 78,
    "name" : "The Mountain Goats",
    "link_url" : "https://open.spotify.com/artist/3hyGGjxu73JuzBa757H6R5",
    "rating" : 2
  },
  {
    "id" : 79,
    "name" : "Black Mountain",
    "link_url" : "https://open.spotify.com/artist/00sAr10UTV1JZtHqxsLVn4",
    "rating" : 4
  },
  {
    "id" : 80,
    "name" : "Fontaines D.C.",
    "link_url" : "https://open.spotify.com/artist/3SXwqSqAoBz9WCI9PDQzY6",
    "rating" : 3
  },
  {
    "id" : 81,
    "name" : "Elliot Smith",
    "link_url" : "https://open.spotify.com/artist/2ApaG60P4r0yhBoDCGD8YG",
    "rating" : 2
  },
  {
    "id" : 82,
    "name" : "Crumb",
    "link_url" : "https://open.spotify.com/artist/4kSGbjWGxTchKpIxXPJv0B",
    "rating" : 4
  },
  {
    "id" : 83,
    "name" : "Yard Act",
    "link_url" : "https://open.spotify.com/artist/2h3ooJn8m8X8cL2g1BZ1Rd",
    "rating" : 2
  },
  {
    "id" : 84,
    "name" : "High Pulp",
    "link_url" : "https://open.spotify.com/artist/7mcmohD0Iz3xqKHaMXt5Cf",
    "rating" : 1
  },
  {
    "id" : 85,
    "name" : "my bloody valentine",
    "link_url" : "https://open.spotify.com/artist/3G3Gdm0ZRAOxLrbyjfhii5",
    "rating" : 2
  },
  {
    "id" : 86,
    "name" : "Earl Greyhound",
    "link_url" : "https://open.spotify.com/artist/0P9JnbvZEtGD8vgRkBU8qn",
    "rating" : 1
  },
  {
    "id" : 87,
    "name" : "Rahsaan Roland Kirk",
    "link_url" : "https://open.spotify.com/artist/7De2eIqeHTw091YeAkkYXV",
    "rating" : 2
  },
  {
    "id" : 88,
    "name" : "Max Roach",
    "link_url" : "https://open.spotify.com/artist/6jrlNnS5B830kpi40j3S6g",
    "rating" : 4
  },
  {
    "id" : 89,
    "name" : "Andrew Hill",
    "link_url" : "https://open.spotify.com/artist/4ORSNkNYSzva169PBZCzvy",
    "rating" : 4
  },
  {
    "id" : 90,
    "name" : "Eric Dolphy",
    "link_url" : "https://open.spotify.com/artist/6rxxu32JCGDpKKMPHxnSJp",
    "rating" : 5
  },
  {
    "id" : 91,
    "name" : "Heatmiser",
    "link_url" : "https://open.spotify.com/artist/59IPo3F7aZifhZtHnoGHbo",
    "rating" : 2
  },
  {
    "id" : 92,
    "name" : "J Mascis",
    "link_url" : "https://open.spotify.com/intl-it/artist/1PokjXeIq2zVosXbTEaNlx",
    "rating" : 4
  },
  {
    "id" : 93,
    "name" : "Okkervil River",
    "link_url" : "https://open.spotify.com/intl-it/artist/5E7zSu46SqTmgKqsc0tFkY",
    "rating" : 4
  },
  {
    "id" : 94,
    "name" : "The Tragically Hip",
    "link_url" : "https://open.spotify.com/intl-it/artist/0YMeriqrS3zgsX24nfY0F0",
    "rating" : 2
  },
  {
    "id" : 95,
    "name" : "Blind Melon",
    "link_url" : "https://open.spotify.com/intl-it/artist/5sD1ZLf2dGQ9gQ3YJl1eAd",
    "rating" : 3
  },
  {
    "id" : 96,
    "name" : "Floored Faces",
    "link_url" : "https://open.spotify.com/intl-it/artist/1gI76sSrREGjDUurrsE1XI",
    "rating" : 2
  },
  {
    "id" : 97,
    "name" : "Ladaniva",
    "link_url" : "https://open.spotify.com/intl-it/artist/6nt7tWnBx4NqnXKO6vEByU",
    "rating" : 1
  },
  {
    "id" : 98,
    "name" : "PJ Harvey",
    "link_url" : "https://open.spotify.com/intl-it/artist/12VaqyEhgwDRuFfEqbnrpz",
    "rating" : 4
  },
  {
    "id" : 99,
    "name" : "Leo Parker",
    "link_url" : "https://open.spotify.com/intl-it/artist/5LQwJIY0TGUfJDS9vdpjmg",
    "rating" : 2
  },
  {
    "id" : 100,
    "name" : "Eels",
    "link_url" : "https://open.spotify.com/intl-it/artist/3zunDAtRDg7kflREzWAhxl",
    "rating" : 2
  },
  {
    "id" : 101,
    "name" : "The Modern Jazz Quartet",
    "link_url" : "https://open.spotify.com/intl-it/artist/7wBFjZMHsC6nfV0HOSd6uI",
    "rating" : 5
  },
  {
    "id" : 102,
    "name" : "Freddie Hubbard",
    "link_url" : "https://open.spotify.com/intl-it/artist/0fTHKjepK5HWOrb2rkS5Em",
    "rating" : 2
  },
  {
    "id" : 103,
    "name" : "fIREHOSE",
    "link_url" : "https://open.spotify.com/intl-it/artist/6MIbrfpc9aH6gsEl2yep68",
    "rating" : 4
  },
  {
    "id" : 104,
    "name" : "Minutemen",
    "link_url" : "https://open.spotify.com/intl-it/artist/0z6zRFzl5njXWLVAisXQBz",
    "rating" : 3
  },
  {
    "id" : 105,
    "name" : "R.E.M.",
    "link_url" : "https://open.spotify.com/intl-it/artist/4KWTAlx2RvbpseOGMEmROg",
    "rating" : 4
  },
  {
    "id" : 106,
    "name" : "The Clash",
    "link_url" : "https://open.spotify.com/intl-it/artist/3RGLhK1IP9jnYFH4BRFJBS",
    "rating" : 5
  },
  {
    "id" : 107,
    "name" : "Tapes 'n Tapes",
    "link_url" : "https://open.spotify.com/intl-it/artist/3PjtmMdeYx3Dg49ZRLS27J",
    "rating" : 3
  },
  {
    "id" : 108,
    "name" : "Sea Power",
    "link_url" : "https://open.spotify.com/intl-it/artist/5zhn89Em2jWUUWdpcLO3YL",
    "rating" : 4
  },
  {
    "id" : 109,
    "name" : "BODEGA",
    "link_url" : "https://open.spotify.com/intl-it/artist/3lnWfdMG9U0oVMC15SEbB5",
    "rating" : 4
  },
  {
    "id" : 110,
    "name" : "The Wedding Present",
    "link_url" : "https://open.spotify.com/intl-it/artist/4tyCvqG48h4LdcbFfWBjR9",
    "rating" : 2
  },
  {
    "id" : 111,
    "name" : "Sonny Rollins",
    "link_url" : "https://open.spotify.com/intl-it/artist/1VEzN9lxvG6KPR3QQGsebR",
    "rating" : 5
  },
  {
    "id" : 112,
    "name" : "Charles Mingus",
    "link_url" : "https://open.spotify.com/intl-it/artist/1W8TbFzNS15VwsempfY12H",
    "rating" : 5
  },
  {
    "id" : 113,
    "name" : "Thelonious Monk",
    "link_url" : "https://open.spotify.com/intl-it/artist/4PDpGtF16XpqvXxsrFwQnN",
    "rating" : 5
  },
  {
    "id" : 114,
    "name" : "Dizzy Gillespie",
    "link_url" : "https://open.spotify.com/intl-it/artist/5RzjqfPS0Bu4bUMkyNNDpn",
    "rating" : 5
  },
  {
    "id" : 115,
    "name" : "Ornette Coleman",
    "link_url" : "https://open.spotify.com/intl-it/artist/47odibUtrN3lnWx0p0pk2P",
    "rating" : 3
  },
  {
    "id" : 116,
    "name" : "Yusef Lateef",
    "link_url" : "https://open.spotify.com/intl-it/artist/33XkS6h90eeK7e6OJHw0mq",
    "rating" : 3
  },
  {
    "id" : 117,
    "name" : "Led Zeppelin",
    "link_url" : "https://open.spotify.com/intl-it/artist/36QJpDe2go2KgaRleHCDTp",
    "rating" : 5
  },
  {
    "id" : 118,
    "name" : "The Afghan Whigs",
    "link_url" : "https://open.spotify.com/intl-it/artist/7IDrRpDz0cOuUVC32c8PKD",
    "rating" : 4
  },
  {
    "id" : 119,
    "name" : "...And You Will Know Us By The Trail Of Dead",
    "link_url" : "https://open.spotify.com/intl-it/artist/6wBUn8gMP85n8dPu6LoUcF",
    "rating" : 2
  },
  {
    "id" : 120,
    "name" : "Dead Meadow",
    "link_url" : "https://open.spotify.com/intl-it/artist/0AI2um3PpFgOj7Yzmk2Xu0",
    "rating" : 3
  },
  {
    "id" : 121,
    "name" : "Pantera",
    "link_url" : "https://open.spotify.com/intl-it/artist/14pVkFUHDL207LzLHtSA18",
    "rating" : 5
  },
  {
    "id" : 122,
    "name" : "John Vanderslice",
    "link_url" : "https://open.spotify.com/intl-it/artist/2GOfAZEwmCpwPhX7kjMJYN",
    "rating" : 3
  },
  {
    "id" : 123,
    "name" : "Wilco",
    "link_url" : "https://open.spotify.com/intl-it/artist/2QoU3awHVdcHS8LrZEKvSM",
    "rating" : 5
  },
  {
    "id" : 124,
    "name" : "Big Thief",
    "link_url" : "https://open.spotify.com/intl-it/artist/5QdyldG4Fl4TPiOIeMNpBZ",
    "rating" : 5
  },
  {
    "id" : 125,
    "name" : "Songs: Ohia",
    "link_url" : "https://open.spotify.com/intl-it/artist/3uQ5cxFHxXddqPL58egs1z",
    "rating" : 4
  },
  {
    "id" : 126,
    "name" : "Scrawl",
    "link_url" : "https://open.spotify.com/intl-it/artist/6duNAcpIeQ2vydjbn1aXQG",
    "rating" : 4
  },
  {
    "id" : 127,
    "name" : "Somi",
    "link_url" : "https://open.spotify.com/intl-it/artist/6UYqtBD79GpmqjttbzV6iA",
    "rating" : 4
  },
  {
    "id" : 128,
    "name" : "Quasi",
    "link_url" : "https://open.spotify.com/intl-it/artist/0fiUV7n91Qqmgln2vQMVdO",
    "rating" : 4
  },
  {
    "id" : 129,
    "name" : "Snarky Puppy",
    "link_url" : "https://open.spotify.com/intl-it/artist/7ENzCHnmJUr20nUjoZ0zZ1",
    "rating" : 3
  },
  {
    "id" : 130,
    "name" : "Rhiannon Giddens",
    "link_url" : "https://open.spotify.com/intl-it/artist/1EI0NtLHoh9KBziYCeN1vM",
    "rating" : 5
  },
  {
    "id" : 131,
    "name" : "Mars Red Sky",
    "link_url" : "https://open.spotify.com/intl-it/artist/1vrCjYU0zXNXvLobueUTvQ",
    "rating" : 4
  },
  {
    "id" : 132,
    "name" : "Mission of Burma",
    "link_url" : "https://open.spotify.com/intl-it/artist/5UMQV83wwZCCvRSQCVjZw6",
    "rating" : 5
  },
  {
    "id" : 133,
    "name" : "Metz",
    "link_url" : "https://open.spotify.com/intl-it/artist/18TNVFTJ6WfeicsMRrdJHI",
    "rating" : 4
  },
  {
    "id" : 134,
    "name" : "Stephen Malkmus & The Jicks",
    "link_url" : "https://open.spotify.com/intl-it/artist/7wyRA7deGRxozTyBc6QXPe",
    "rating" : 5
  },
  {
    "id" : 135,
    "name" : "Grandaddy",
    "link_url" : "https://open.spotify.com/intl-it/artist/3W4xM5XYtUp4ifYYPVKVdk",
    "rating" : 5
  },
  {
    "id" : 136,
    "name" : "Gianni Gebbia",
    "link_url" : "https://open.spotify.com/intl-it/artist/5A4byx4cQgGgkNun0np2Py",
    "rating" : 3
  },
  {
    "id" : 137,
    "name" : "Broken Social Scene",
    "link_url" : "https://open.spotify.com/intl-it/artist/7lOJ7WXyopaxri0dbOiZkd",
    "rating" : 5
  },
  {
    "id" : 138,
    "name" : "Menomena",
    "link_url" : "https://open.spotify.com/intl-it/artist/676oR6vRgfSzaBibbPhLhH",
    "rating" : 1
  },
  {
    "id" : 139,
    "name" : "Art Ensemble Of Chicago",
    "link_url" : "https://open.spotify.com/intl-it/artist/0LTIwNcvI31Zf5wwFVRHyu",
    "rating" : 4
  },
  {
    "id" : 140,
    "name" : "Gerry Mulligan",
    "link_url" : "https://open.spotify.com/intl-it/artist/6l40OFJhuTbHQ9V12evc9K",
    "rating" : 2
  },
  {
    "id" : 141,
    "name" : "Deadletter",
    "link_url" : "https://open.spotify.com/intl-it/artist/4MfUQ99z2kgMnl9hAwffBx",
    "rating" : 1
  },
  {
    "id" : 142,
    "name" : "Comaneci",
    "link_url" : "https://open.spotify.com/intl-it/artist/5XSyRItUvo6WqfLhjYGF8F",
    "rating" : 3
  },
  {
    "id" : 143,
    "name" : "J.P. Bimeni",
    "link_url" : "https://open.spotify.com/intl-it/artist/3CzQotBuoiDb8B9VAkh5fx",
    "rating" : 3
  },
  {
    "id" : 144,
    "name" : "Bernard Wright",
    "link_url" : "https://open.spotify.com/intl-it/artist/2g8J4iI5qyYFMVHcpMcSsS",
    "rating" : 3
  },
  {
    "id" : 145,
    "name" : "Tom Browne",
    "link_url" : "https://open.spotify.com/intl-it/artist/4Ytvi4r3WPIZmEw1Ndmkp9",
    "rating" : 2
  },
  {
    "id" : 146,
    "name" : "Public Body",
    "link_url" : "https://open.spotify.com/intl-it/artist/0afEu0n4WzBeNOdyjfBU6X",
    "rating" : 3
  },
  {
    "id" : 147,
    "name" : "Do Nothing",
    "link_url" : "https://open.spotify.com/intl-it/artist/73N7cGNNww6Uod1d3IiBKP",
    "rating" : 2
  },
  {
    "id" : 148,
    "name" : "Cole Porter",
    "link_url" : "https://open.spotify.com/intl-it/artist/6rrwIOOzyvn76SDbkxjIjS",
    "rating" : 4
  },
  {
    "id" : 149,
    "name" : "Ryuichi Sakamoto",
    "link_url" : "https://open.spotify.com/intl-it/artist/1tcgfoMTT1szjUeaikxRjA",
    "rating" : 5
  },
  {
    "id" : 150,
    "name" : "Blue Smiley",
    "link_url" : "https://open.spotify.com/intl-it/artist/4zaUiALGzCjfr0s9WKXCXL",
    "rating" : 3
  },
  {
    "id" : 151,
    "name" : "Cathedral Bells",
    "link_url" : "https://open.spotify.com/intl-it/artist/0a7RruzBySceAPGfmFZtQ2",
    "rating" : 3
  },
  {
    "id" : 152,
    "name" : "Goat Girl",
    "link_url" : "https://open.spotify.com/intl-it/artist/1ukEEwzjucRtFTxiw2DrDZ",
    "rating" : 3
  },
  {
    "id" : 153,
    "name" : "Stove",
    "link_url" : "https://open.spotify.com/intl-it/artist/4rkMcjdyDpeG57mT7lZNKs",
    "rating" : 4
  },
  {
    "id" : 154,
    "name" : "Lester Young",
    "link_url" : "https://open.spotify.com/intl-it/artist/05E3NBxNMdnrPtxF9oraJm",
    "rating" : 5
  },
  {
    "id" : 155,
    "name" : "TRAAMS",
    "link_url" : "https://open.spotify.com/intl-it/artist/1lhhqEZ24FB2eQfDajpQG8",
    "rating" : 5
  },
  {
    "id" : 156,
    "name" : "Louis Armstrong",
    "link_url" : "https://open.spotify.com/intl-it/artist/19eLuQmk9aCobbVDHc6eek",
    "rating" : 5
  },
  {
    "id" : 157,
    "name" : "Kiwi jr.",
    "link_url" : "https://open.spotify.com/intl-it/artist/4CMdLKWNEoNSLpaJ6QMWYy",
    "rating" : 4
  },
  {
    "id" : 160,
    "name" : "King Hannah",
    "link_url" : "https://open.spotify.com/intl-it/artist/7t00AYOoiQrcgNlpTkNer6",
    "rating" : 2
  },
  {
    "id" : 161,
    "name" : "Bud Powell",
    "link_url" : "https://open.spotify.com/intl-it/artist/570vCzcespB48HIQyTbDO6",
    "rating" : 3
  },
  {
    "id" : 162,
    "name" : "Porridge Radio",
    "link_url" : "https://open.spotify.com/intl-it/artist/4vAQ4M7vgItwBtmBTgRu48",
    "rating" : 5
  },
  {
    "id" : 163,
    "name" : "Marco Cerri Ciommei",
    "link_url" : "https://open.spotify.com/artist/77wp2SXRvyVg8gdZnAidD7",
    "rating" : 5
  },
  {
    "id" : 164,
    "name" : "Wayne Shorter",
    "link_url" : "https://open.spotify.com/intl-it/artist/0ZqhrTXYPA9DZR527ZnFdO",
    "rating" : 5
  },
  {
    "id" : 165,
    "name" : "Sarah Vaughan",
    "link_url" : "https://open.spotify.com/intl-it/artist/1bgyxtWjZwA5PQlDsvs9b8",
    "rating" : 5
  },
  {
    "id" : 166,
    "name" : "III Considered",
    "link_url" : "https://open.spotify.com/intl-it/artist/2nSY0EIzz3eM6Y6Pc7VXkO",
    "rating" : 3
  },
  {
    "id" : 167,
    "name" : "The Black Angels",
    "link_url" : "https://open.spotify.com/intl-it/artist/0VNWuGf8SMVU2AerpdhMbP",
    "rating" : 2
  },
  {
    "id" : 168,
    "name" : "Deeper",
    "link_url" : "https://open.spotify.com/intl-it/artist/2OdkcNnvSRbVRcziM3OK2S",
    "rating" : 4
  },
  {
    "id" : 169,
    "name" : "Sweeping Promises",
    "link_url" : "https://open.spotify.com/intl-it/artist/5k9qBHdkzsibPmFJp1XIAt",
    "rating" : 3
  },
  {
    "id" : 170,
    "name" : "Weird Nightmare",
    "link_url" : "https://open.spotify.com/intl-it/artist/2dRm7hmP96rgIGGGX1wiLc",
    "rating" : 2
  },
  {
    "id" : 171,
    "name" : "Pissed Jeans",
    "link_url" : "https://open.spotify.com/intl-it/artist/6FTONkEJQsCSpoDHqaAP1V",
    "rating" : 5
  },
  {
    "id" : 172,
    "name" : "Mudhoney",
    "link_url" : "https://open.spotify.com/intl-it/artist/7LuYiSXiWs86rwWJjEEgB9",
    "rating" : 5
  },
  {
    "id" : 173,
    "name" : "Art Tatum",
    "link_url" : "https://open.spotify.com/intl-it/artist/3DtSOCXYU6o4EV0K1NgIKq",
    "rating" : 4
  },
  {
    "id" : 174,
    "name" : "Emerson, Lake & Palmer",
    "link_url" : "https://open.spotify.com/intl-it/artist/0nCiidE5GgDrc5kWN3NZgZ",
    "rating" : 3
  },
  {
    "id" : 175,
    "name" : "Guided By Voices",
    "link_url" : "https://open.spotify.com/intl-it/artist/4oV5EVJ0XFWsJKoOvdRPvl",
    "rating" : 3
  },
  {
    "id" : 176,
    "name" : "Miles Davis",
    "link_url" : "https://open.spotify.com/intl-it/artist/0kbYTNQb4Pb1rPbbaF0pT4",
    "rating" : 5
  },
  {
    "id" : 177,
    "name" : "Fazer",
    "link_url" : "https://open.spotify.com/intl-it/artist/0HoPjo2Li9pqBLkR50p63C",
    "rating" : 2
  },
  {
    "id" : 178,
    "name" : "Toranji Quartet",
    "link_url" : "https://open.spotify.com/intl-it/artist/3UWqcXlm85vrJE9hxytmSS",
    "rating" : 2
  },
  {
    "id" : 179,
    "name" : "McCoy Tyner",
    "link_url" : "https://open.spotify.com/intl-it/artist/2EsmKkHsXK0WMNGOtIhbxr",
    "rating" : 3
  },
  {
    "id" : 180,
    "name" : "Omni",
    "link_url" : "https://open.spotify.com/intl-it/artist/4wBhllC5Nto10UefzXVMt9",
    "rating" : 5
  },
  {
    "id" : 181,
    "name" : "The American Analog Set",
    "link_url" : "https://open.spotify.com/intl-it/artist/376EkILFaF7BFBHr9Rzn7A",
    "rating" : 3
  },
  {
    "id" : 182,
    "name" : "The Evens",
    "link_url" : "https://open.spotify.com/intl-it/artist/0D20qC9WhCXDlPBFZf7cmP",
    "rating" : 3
  },
  {
    "id" : 183,
    "name" : "Life Without Buildings",
    "link_url" : "https://open.spotify.com/intl-it/artist/16tbi6bWXBzJ9pOMZ5gIC7",
    "rating" : 5
  },
  {
    "id" : 184,
    "name" : "Bully",
    "link_url" : "https://open.spotify.com/intl-it/artist/34LdbFt5sVXKTJOzf1iExQ",
    "rating" : 2
  },
  {
    "id" : 185,
    "name" : "Anouar Brahem",
    "link_url" : "https://open.spotify.com/intl-it/artist/1aO9NulHwrE9pxHXFfCIoM",
    "rating" : 2
  },
  {
    "id" : 186,
    "name" : "Panchiko",
    "link_url" : "https://open.spotify.com/intl-it/artist/4KEHIUSoWCcqrk8AddTE1O",
    "rating" : 2
  },
  {
    "id" : 187,
    "name" : "The Breeders",
    "link_url" : "https://open.spotify.com/intl-it/artist/1xgFexIwrf2QjbU0buCNnp",
    "rating" : 5
  },
  {
    "id" : 188,
    "name" : "Ahmad Jamal",
    "link_url" : "https://open.spotify.com/intl-it/artist/6gc6oo3u2f7SqTd4mhe81O",
    "rating" : 2
  },
  {
    "id" : 189,
    "name" : "The Amps",
    "link_url" : "https://open.spotify.com/intl-it/artist/65ddkMzdFBeuNMfzp3c7vv",
    "rating" : 2
  },
  {
    "id" : 190,
    "name" : "The Velvet Underground",
    "link_url" : "https://open.spotify.com/intl-it/artist/1nJvji2KIlWSseXRSlNYsC",
    "rating" : 4
  },
  {
    "id" : 191,
    "name" : "Sun Kil Moon",
    "link_url" : "https://open.spotify.com/intl-it/artist/4G0XDEk7RbA4BBCTs917U9",
    "rating" : 2
  },
  {
    "id" : 192,
    "name" : "Alexander Scriabin",
    "link_url" : "https://open.spotify.com/intl-it/artist/6nZiWg5ZB511S24WmB7TCV",
    "rating" : 2
  },
  {
    "id" : 193,
    "name" : "Art Blackey",
    "link_url" : "https://open.spotify.com/intl-it/artist/6QQuESLtKhAOcLW2TeWC2t",
    "rating" : 4
  },
  {
    "id" : 194,
    "name" : "Esben and the Witch",
    "link_url" : "https://open.spotify.com/intl-it/artist/5e9048O5CDVvCgSmUEJA06",
    "rating" : 5
  },
  {
    "id" : 195,
    "name" : "Mike Reed",
    "link_url" : "https://open.spotify.com/intl-it/artist/4U6clFEHqqGtTM89DZpJ9u",
    "rating" : 3
  },
  {
    "id" : 196,
    "name" : "Jaimie Branch",
    "link_url" : "https://open.spotify.com/intl-it/artist/54T6Gso8zGPk4czyWlnUw5",
    "rating" : 4
  },
  {
    "id" : 197,
    "name" : "Natural Information Society",
    "link_url" : "https://open.spotify.com/intl-it/artist/7uVynPDWBSuIkL6uTAQSxt",
    "rating" : 2
  },
  {
    "id" : 198,
    "name" : "Ovlov",
    "link_url" : "https://open.spotify.com/intl-it/artist/2Iy7tZpp5qQudlg5cbcgH8",
    "rating" : 3
  },
  {
    "id" : 199,
    "name" : "Mohammad Zatari Trio",
    "link_url" : "https://open.spotify.com/intl-it/artist/3ILZgVrRV9R1BmTXgzS58I",
    "rating" : 2
  },
  {
    "id" : 200,
    "name" : "Josephine Foster",
    "link_url" : "https://open.spotify.com/intl-it/artist/1fVyf1LbeIEE4DUT4dZhHL",
    "rating" : 1
  },
  {
    "id" : 201,
    "name" : "Deerhunter",
    "link_url" : "https://open.spotify.com/intl-it/artist/38zTZcuN7nFvVJ6auhc6V3",
    "rating" : 2
  },
  {
    "id" : 202,
    "name" : "Parquet Courts",
    "link_url" : "https://open.spotify.com/intl-it/artist/23NIwARd4vPbxt3wwNnJ6k",
    "rating" : 2
  },
  {
    "id" : 203,
    "name" : "The Thermals",
    "link_url" : "https://open.spotify.com/intl-it/artist/4qAJ54O4V0W8SQcSz0bl1C",
    "rating" : 2
  },
  {
    "id" : 204,
    "name" : "Deep Purple",
    "link_url" : "https://open.spotify.com/intl-it/artist/568ZhdwyaiCyOGJRtNYhWf",
    "rating" : 5
  },
  {
    "id" : 205,
    "name" : "The End",
    "link_url" : "https://open.spotify.com/intl-it/artist/3NE7fgy4WnsPePJZn9rsw0",
    "rating" : 2
  },
  {
    "id" : 206,
    "name" : "Bex Bruch",
    "link_url" : "https://open.spotify.com/intl-it/artist/1tdT4MNoOC6sagnhU2XEbQ",
    "rating" : 4
  },
  {
    "id" : 207,
    "name" : "Aja Monet",
    "link_url" : "https://open.spotify.com/intl-it/artist/6dclGxWbiv1ScMQwT5INQF",
    "rating" : 1
  },
  {
    "id" : 208,
    "name" : "Yussef Dayes",
    "link_url" : "https://open.spotify.com/intl-it/artist/2rspptKP0lPBdlJJAJHqht",
    "rating" : 3
  },
  {
    "id" : 209,
    "name" : "Ingrid Laubrock",
    "link_url" : "https://open.spotify.com/intl-it/artist/4n3p3rphFq8JTS80phtOS0",
    "rating" : 1
  },
  {
    "id" : 210,
    "name" : "The Messthetics",
    "link_url" : "https://open.spotify.com/intl-it/artist/61wWE8w2nqaoNmKCOjJ4Hm",
    "rating" : 2
  },
  {
    "id" : 211,
    "name" : "Fire! Orchestra",
    "link_url" : "https://open.spotify.com/intl-it/artist/50BFEG33gYorCS5zbNbLRb",
    "rating" : 4
  },
  {
    "id" : 212,
    "name" : "Boeckner",
    "link_url" : "https://open.spotify.com/intl-it/artist/1SdWYxZBt4RjvyXcMbtxyE",
    "rating" : 3
  },
  {
    "id" : 213,
    "name" : "The Necks",
    "link_url" : "https://open.spotify.com/artist/2S0D6Vlt9T6z5MNm1UBJgf",
    "rating" : 5
  },
  {
    "id" : 214,
    "name" : "Vanishing Twin",
    "link_url" : "https://open.spotify.com/artist/4idG41ELGGRKuiHLc3VLc5",
    "rating" : 2
  },
  {
    "id" : 215,
    "name" : "Sleaford Mods",
    "link_url" : "https://open.spotify.com/artist/0otAqZw8htTsGHfqR491Yh",
    "rating" : 3
  },
  {
    "id" : 216,
    "name" : "Quicksand",
    "link_url" : "https://open.spotify.com/artist/1GDjwZ2zwNZizuNJPmH3mE",
    "rating" : 4
  },
  {
    "id" : 217,
    "name" : "No-No Boy",
    "link_url" : "https://open.spotify.com/artist/37oH7lMYDNAY3eDDl7HozD",
    "rating" : 1
  },
  {
    "id" : 218,
    "name" : "Ndox Electrique",
    "link_url" : "https://open.spotify.com/artist/0rV5HHDPP4U5fkYOWu0m2u",
    "rating" : 3
  },
  {
    "id" : 219,
    "name" : "En Attendant Ana",
    "link_url" : "https://open.spotify.com/artist/7mKMQWOBVDivOhswm33WDL",
    "rating" : 3
  },
  {
    "id" : 220,
    "name" : "La Luz",
    "link_url" : "https://open.spotify.com/intl-it/artist/6QRlkjrHz5A62mqeNZz7t3",
    "rating" : 4
  },
  {
    "id" : 221,
    "name" : "Bardo Pond",
    "link_url" : "https://open.spotify.com/intl-it/artist/2ZHNwvYaMbD8zuObAXVHEr",
    "rating" : 5
  },
  {
    "id" : 222,
    "name" : "Dobrinka Tabakova",
    "link_url" : "https://open.spotify.com/intl-it/artist/1zLIRG57NYJF3ckNxrQLzp",
    "rating" : 4
  },
  {
    "id" : 223,
    "name" : "Pijn",
    "link_url" : "https://open.spotify.com/intl-it/artist/088AzItIc1cw6IsZWCyLvw",
    "rating" : 2
  },
  {
    "id" : 224,
    "name" : "Helms Alee",
    "link_url" : "https://open.spotify.com/intl-it/artist/11O8jS9NNmewQkpiGXu0eb",
    "rating" : 4
  },
  {
    "id" : 225,
    "name" : "Flyying Colours",
    "link_url" : "https://open.spotify.com/intl-it/artist/3gsBHfj2Ps8IiXEPSexY0Z",
    "rating" : 4
  },
  {
    "id" : 226,
    "name" : "Soul Glo",
    "link_url" : "https://open.spotify.com/intl-it/artist/0mWrp0C4ShdOjs7P29Gzan",
    "rating" : 4
  },
  {
    "id" : 227,
    "name" : "Bad Brains",
    "link_url" : "https://open.spotify.com/intl-it/artist/1oVj9JmPUPg4SQ2uerV2xc",
    "rating" : 2
  },
  {
    "id" : 228,
    "name" : "FACS",
    "link_url" : "https://open.spotify.com/intl-it/artist/2h0hfblKFcjOdz52vre1OV",
    "rating" : 3
  },
  {
    "id" : 229,
    "name" : "Cola",
    "link_url" : "https://open.spotify.com/intl-it/artist/1KCSUZBJy1bAsIz7wUYkd8",
    "rating" : 3
  },
  {
    "id" : 230,
    "name" : "Flat Worms",
    "link_url" : "https://open.spotify.com/intl-it/artist/5Ssue4NKgXFwte9xe6azsu",
    "rating" : 2
  },
  {
    "id" : 231,
    "name" : "Silverbacks",
    "link_url" : "https://open.spotify.com/intl-it/artist/4HrCsxMRWFsSi8Vf0qBjK4",
    "rating" : 5
  },
  {
    "id" : 232,
    "name" : "Sleater-Kinney",
    "link_url" : "https://open.spotify.com/intl-it/artist/4wLIbcoqmqI4WZHDiBxeCB",
    "rating" : 3
  },
  {
    "id" : 233,
    "name" : "Protomartyr",
    "link_url" : "https://open.spotify.com/intl-it/artist/2YFBqMMiIIL4XyiEwqySUQ",
    "rating" : 2
  },
  {
    "id" : 234,
    "name" : "Coleman Hawkings",
    "link_url" : "https://open.spotify.com/intl-it/artist/0JM134st8VY7Ld9T2wQiH0",
    "rating" : 4
  },
  {
    "id" : 235,
    "name" : "Hanry",
    "link_url" : "https://open.spotify.com/intl-it/artist/6VEWdRiLxnGarTUorAflG1",
    "rating" : 2
  },
  {
    "id" : 238,
    "name" : "Explosions In The Sky",
    "link_url" : "https://open.spotify.com/intl-it/artist/1uQWmt1OhuHGRKmZ2ZcL6p",
    "rating" : 4
  },
  {
    "id" : 239,
    "name" : "Royel Otis",
    "link_url" : "https://open.spotify.com/intl-it/artist/5b5bt4mZQpJMoCRbiQ7diH",
    "rating" : 3
  },
  {
    "id" : 240,
    "name" : "Egyptian Blue",
    "link_url" : "https://open.spotify.com/intl-it/artist/3IW8WBsi0vGrcdMNsXS6Bi",
    "rating" : 3
  },
  {
    "id" : 241,
    "name" : "Jerry Cantrell",
    "link_url" : "https://open.spotify.com/intl-it/artist/5HUFo8AH9ZILmlyKFfEMNP",
    "rating" : 3
  },
  {
    "id" : 242,
    "name" : "Patio",
    "link_url" : "https://open.spotify.com/intl-it/artist/2mln4aJfJQaYzFUUQ3Ji9N",
    "rating" : 1
  },
  {
    "id" : 243,
    "name" : "Film School",
    "link_url" : "https://open.spotify.com/intl-it/artist/3Q5JOuj2Zs59ujPp1njIWS",
    "rating" : 5
  },
  {
    "id" : 244,
    "name" : "Pale Sun",
    "link_url" : "https://open.spotify.com/intl-it/artist/4m26ZWVORIBmP49w8KFkij",
    "rating" : 1
  },
  {
    "id" : 245,
    "name" : "Steve Lacy",
    "link_url" : "https://open.spotify.com/intl-it/artist/1BEsuwAkTQMG50TeHB5qny",
    "rating" : 3
  },
  {
    "id" : 246,
    "name" : "Hugh Masekela",
    "link_url" : "https://open.spotify.com/intl-it/artist/1b3F5FI7TX4IWTNA4P1kWp",
    "rating" : 5
  },
  {
    "id" : 247,
    "name" : "Mulatu Astatke",
    "link_url" : "https://open.spotify.com/intl-it/artist/7HGFXtBhRq3g1Ma3nH4Rgv",
    "rating" : 5
  },
  {
    "id" : 248,
    "name" : "Gary Bartz",
    "link_url" : "https://open.spotify.com/intl-it/artist/5ArqvMflDEhxdqW8sBBQUQ",
    "rating" : 3
  },
  {
    "id" : 249,
    "name" : "I Got You On Tape",
    "link_url" : "https://open.spotify.com/intl-it/artist/3HR5AnPFqtwPA8XvCw7VL5",
    "rating" : 3
  },
  {
    "id" : 250,
    "name" : "El Ten Eleven",
    "link_url" : "https://open.spotify.com/intl-it/artist/0d1j4VJ7gzAJaDslzmjTF0",
    "rating" : 3
  },
  {
    "id" : 251,
    "name" : "Superchunk",
    "link_url" : "https://open.spotify.com/intl-it/artist/7lmde7T1WJPFwv1eR6melP",
    "rating" : 5
  },
  {
    "id" : 252,
    "name" : "bdrmm",
    "link_url" : "https://open.spotify.com/intl-it/artist/4Cx5LnF4WNJIn9SSqyeq9C",
    "rating" : 1
  },
  {
    "id" : 253,
    "name" : "764-Hero",
    "link_url" : "https://open.spotify.com/intl-it/artist/5Ry1XTLx2Yf9CydAkKIdgX",
    "rating" : 4
  },
  {
    "id" : 254,
    "name" : "Militarie Gun",
    "link_url" : "https://open.spotify.com/intl-it/artist/4us4NMG5wuqdUZvthZrj0Q",
    "rating" : 2
  },
  {
    "id" : 255,
    "name" : "Hot Snakes",
    "link_url" : "https://open.spotify.com/intl-it/artist/5hEP2P4E1FjoFYdhhxe7vi",
    "rating" : 2
  },
  {
    "id" : 256,
    "name" : "Heartworms",
    "link_url" : "https://open.spotify.com/intl-it/artist/1slmc4uUMOsz7J3pQqeWPP",
    "rating" : 4
  },
  {
    "id" : 259,
    "name" : "Chalk",
    "link_url" : "https://open.spotify.com/intl-it/artist/3qa9pv6B0dmiBVETLQOCpi",
    "rating" : 1
  },
  {
    "id" : 260,
    "name" : "Wombo",
    "link_url" : "https://open.spotify.com/intl-it/artist/67GGyFejJ19UWUjJlLhJq4",
    "rating" : 3
  },
  {
    "id" : 261,
    "name" : "Meatbodies",
    "link_url" : "https://open.spotify.com/intl-it/artist/21ltygJ3rGHmnqaUzqnsku",
    "rating" : 2
  },
  {
    "id" : 262,
    "name" : "mega cat",
    "link_url" : "https://open.spotify.com/intl-it/artist/6MqD2dmJGZNlkmlXE9xvkp",
    "rating" : 1
  },
  {
    "id" : 263,
    "name" : "Loma",
    "link_url" : "https://open.spotify.com/intl-it/artist/4oCcCzMjKNCjQTzxtVlOJT",
    "rating" : 5
  },
  {
    "id" : 264,
    "name" : "Handsome Furs",
    "link_url" : "https://open.spotify.com/intl-it/artist/022mO8Zbj0IPDhn3bD3Ukm",
    "rating" : 2
  },
  {
    "id" : 265,
    "name" : "The Decemberists",
    "link_url" : "https://open.spotify.com/intl-it/artist/7ITd48RbLVpUfheE7B86o2",
    "rating" : 3
  },
  {
    "id" : 266,
    "name" : "Jason Lytle",
    "link_url" : "https://open.spotify.com/intl-it/artist/2BqjUvq3HLFWNi1buGVxem",
    "rating" : 3
  },
  {
    "id" : 267,
    "name" : "Polvo",
    "link_url" : "https://open.spotify.com/intl-it/artist/0pbIqPTefLfuOcbM2ojXdl",
    "rating" : 3
  },
  {
    "id" : 268,
    "name" : "Pachyman",
    "link_url" : "https://open.spotify.com/intl-it/artist/515f4vsvg0JQWrmt7qpR6l",
    "rating" : 5
  },
  {
    "id" : 269,
    "name" : "Velocity Girl",
    "link_url" : "https://open.spotify.com/intl-it/artist/1fXw2uWfwAlNxlDsW8cKIS",
    "rating" : 2
  },
  {
    "id" : 270,
    "name" : "Grace Cummings",
    "link_url" : "https://open.spotify.com/intl-it/artist/3uAWPonHw80gRQRUjhdW5a",
    "rating" : 4
  },
  {
    "id" : 271,
    "name" : "Patricia Wolf",
    "link_url" : "https://open.spotify.com/intl-it/artist/5U2PKpLxoEwfOnPAwzPt5T",
    "rating" : 2
  },
  {
    "id" : 272,
    "name" : "J.R.C.G.",
    "link_url" : "https://open.spotify.com/intl-it/artist/4aNwMw5llWDwwA67i4sO7J",
    "rating" : 5
  },
  {
    "id" : 273,
    "name" : "Thee Sinseers",
    "link_url" : "https://open.spotify.com/intl-it/artist/5unhEp2PoIxAgEFNEyYdJS",
    "rating" : 2
  },
  {
    "id" : 274,
    "name" : "Kairos Creature Club",
    "link_url" : "https://open.spotify.com/intl-it/artist/2LE6yIUdUoLkxKlqfARZ0d",
    "rating" : 2
  },
  {
    "id" : 275,
    "name" : "Teenage Fanclub",
    "link_url" : "https://open.spotify.com/intl-it/artist/2Sp19cOHSqAUlE64hekARW",
    "rating" : 1
  },
  {
    "id" : 276,
    "name" : "Folly Group",
    "link_url" : "https://open.spotify.com/intl-it/artist/39RnqcMpFSK4e7tbODSsaP",
    "rating" : 2
  },
  {
    "id" : 277,
    "name" : "The Rugged Nuggets",
    "link_url" : "https://open.spotify.com/intl-it/artist/5kPBcUdkq1hxUdpdyc1X0Y",
    "rating" : 2
  },
  {
    "id" : 278,
    "name" : "Neutral Milk Hotel",
    "link_url" : "https://open.spotify.com/intl-it/artist/2ooIqOf4X2uz4mMptXCtie",
    "rating" : 3
  },
  {
    "id" : 279,
    "name" : "Leyla McCalla",
    "link_url" : "https://open.spotify.com/intl-it/artist/2Roq56H3IIvY3DZUKrGO7Y",
    "rating" : 4
  },
  {
    "id" : 280,
    "name" : "Jean Sibelius",
    "link_url" : "https://open.spotify.com/intl-it/artist/7jzR5qj8vFnSu5JHaXgFEr",
    "rating" : 2
  },
  {
    "id" : 281,
    "name" : "Archers Of Loaf",
    "link_url" : "https://open.spotify.com/intl-it/artist/0pNaVvqSvldpJl7pHpNoM9",
    "rating" : 4
  },
  {
    "id" : 282,
    "name" : "Shearwater",
    "link_url" : "https://open.spotify.com/intl-it/artist/0CoiIc6ZLBvF9Cjmb1Cj49",
    "rating" : 3
  },
  {
    "id" : 283,
    "name" : "DIIV",
    "link_url" : "https://open.spotify.com/intl-it/artist/4OrizGCKhOrW6iDDJHN9xd",
    "rating" : 4
  },
  {
    "id" : 284,
    "name" : "Smile Machine",
    "link_url" : "https://open.spotify.com/intl-it/artist/2PDOGxyEFCz8qN8ISBNVYH",
    "rating" : 2
  },
  {
    "id" : 285,
    "name" : "Jackal Onasis",
    "link_url" : "https://open.spotify.com/intl-it/artist/5toJygw5DWOuMfxBNKX0St",
    "rating" : 2
  },
  {
    "id" : 286,
    "name" : "The Umbrellas",
    "link_url" : "https://open.spotify.com/intl-it/artist/13qLXVHwUqLFWPYdNOyZwZ",
    "rating" : 2
  },
  {
    "id" : 287,
    "name" : "Mannequin Pussy",
    "link_url" : "https://open.spotify.com/intl-it/artist/33yje3hgpNfdXpqdJQcrt9",
    "rating" : 5
  },
  {
    "id" : 288,
    "name" : "Hana Vu",
    "link_url" : "https://open.spotify.com/intl-it/artist/3diDUq8QMCCtx8a4Jy42aO",
    "rating" : 1
  },
  {
    "id" : 289,
    "name" : "Oruã",
    "link_url" : "https://open.spotify.com/intl-it/artist/2Wya1Moi5k4EX1dRpCf4Dm",
    "rating" : 5
  },
  {
    "id" : 290,
    "name" : "Las Nubes",
    "link_url" : "https://open.spotify.com/intl-it/artist/0HvajeNY14cesq6TNWPQIk",
    "rating" : 4
  },
  {
    "id" : 291,
    "name" : "Quivers",
    "link_url" : "https://open.spotify.com/intl-it/artist/0YUqHKQEwFgGaDVSaHTS55",
    "rating" : 1
  },
  {
    "id" : 292,
    "name" : "Flock",
    "link_url" : "https://open.spotify.com/intl-it/artist/5c4ETn2xdmdKYUm29Ht3kN",
    "rating" : 4
  },
  {
    "id" : 293,
    "name" : "Uzeda",
    "link_url" : "https://open.spotify.com/intl-it/artist/1k98AIGp4WNciHn7DNB9a8",
    "rating" : 4
  },
  {
    "id" : 294,
    "name" : "Afrocop",
    "link_url" : "https://open.spotify.com/intl-it/artist/5T8HMlfoKDt35nfMJEmSVs",
    "rating" : 2
  },
  {
    "id" : 295,
    "name" : "Loose Fur",
    "link_url" : "https://open.spotify.com/intl-it/artist/4OogVxC2vWAsXsTYXctXi1",
    "rating" : 3
  },
  {
    "id" : 296,
    "name" : "The Doors",
    "link_url" : "https://open.spotify.com/intl-it/artist/22WZ7M8sxp5THdruNY3gXt",
    "rating" : 5
  },
  {
    "id" : 297,
    "name" : "Brijean",
    "link_url" : "https://open.spotify.com/intl-it/artist/2TRNyrjoKJnqSc9G8jCZfb",
    "rating" : 4
  },
  {
    "id" : 298,
    "name" : "Lambrini Girls",
    "link_url" : "https://open.spotify.com/intl-it/artist/6VR4TJ20WGiho2xZWMuuWb",
    "rating" : 4
  },
  {
    "id" : 299,
    "name" : "Fugazi",
    "link_url" : "https://open.spotify.com/intl-it/artist/62sC6lUEWRjbFqXpMmOk4G",
    "rating" : 4
  },
  {
    "id" : 300,
    "name" : "The Gits",
    "link_url" : "https://open.spotify.com/intl-it/artist/4uHoGHfHZep6Z8YUn8ji5m",
    "rating" : 4
  },
  {
    "id" : 301,
    "name" : "The Lijadu Sisters",
    "link_url" : "https://open.spotify.com/intl-it/artist/1iElGdidl4zFXOpaaem4wZ",
    "rating" : 2
  },
  {
    "id" : 302,
    "name" : "Corridor",
    "link_url" : "https://open.spotify.com/intl-it/artist/4nn9uUq4K1vStqxe8t1CD4",
    "rating" : 5
  },
  {
    "id" : 303,
    "name" : "Les Filles de Illighadad",
    "link_url" : "https://open.spotify.com/intl-it/artist/45EoOvcenErsYkaJUnqjJv",
    "rating" : 2
  },
  {
    "id" : 304,
    "name" : "The Headhunters",
    "link_url" : "https://open.spotify.com/intl-it/artist/5JzA5RES9AMM9bK3oDyulT",
    "rating" : 3
  },
  {
    "id" : 305,
    "name" : "Haiulu Mergia",
    "link_url" : "https://open.spotify.com/intl-it/artist/0rsN9DKQhTCvkgbByOOBIm",
    "rating" : 2
  },
  {
    "id" : 306,
    "name" : "The Bug Club",
    "link_url" : "https://open.spotify.com/intl-it/artist/7eiTMbuHYUPjrAMjIhAVDB",
    "rating" : 3
  },
  {
    "id" : 307,
    "name" : "Amulets",
    "link_url" : "https://open.spotify.com/intl-it/artist/5e96t65iOLrmqH2gzEXhIt",
    "rating" : 3
  },
  {
    "id" : 308,
    "name" : "Enumclaw",
    "link_url" : "https://open.spotify.com/intl-it/artist/79yETfINxnDl54mTKLZUlb",
    "rating" : 4
  },
  {
    "id" : 309,
    "name" : "Ulrika Spacek",
    "link_url" : "https://open.spotify.com/intl-it/artist/07vC6cutbett8UknXnqxsu",
    "rating" : 4
  },
  {
    "id" : 310,
    "name" : "Parlor Greens",
    "link_url" : "https://open.spotify.com/intl-it/artist/4c6oXo4PWpSqSnuLqFUxLm",
    "rating" : 3
  },
  {
    "id" : 311,
    "name" : "Bibi Club",
    "link_url" : "https://open.spotify.com/intl-it/artist/3TcKgwcrTy4oLOQoEq3tGD",
    "rating" : 4
  },
  {
    "id" : 312,
    "name" : "The Folk Implosion",
    "link_url" : "https://open.spotify.com/intl-it/artist/6DM1YETeVIN3ce24DhnMhU",
    "rating" : 4
  },
  {
    "id" : 313,
    "name" : "Black Pumas",
    "link_url" : "https://open.spotify.com/intl-it/artist/6eU0jV2eEZ8XTM7EmlguK6",
    "rating" : 1
  },
  {
    "id" : 314,
    "name" : "youbet",
    "link_url" : "https://open.spotify.com/intl-it/artist/6KVAGRLT6LHvatyFDZr1aI",
    "rating" : 3
  },
  {
    "id" : 315,
    "name" : "Omar Sosa",
    "link_url" : "https://open.spotify.com/intl-it/artist/2zyVwasA2QkaVopBFZ2RfX",
    "rating" : 2
  },
  {
    "id" : 316,
    "name" : "SPIRIT OF THE BEEHIVE",
    "link_url" : "https://open.spotify.com/intl-it/artist/25CgccXK9hJBTuaMF44zeR",
    "rating" : 3
  },
  {
    "id" : 317,
    "name" : "Sheherazaad",
    "link_url" : "https://open.spotify.com/intl-it/artist/7pHput1tbvgyLsIYu7GM1p",
    "rating" : 2
  },
  {
    "id" : 318,
    "name" : "Antelope",
    "link_url" : "https://open.spotify.com/intl-it/artist/4lSlPRplvabiorNKIn3NNR",
    "rating" : 2
  },
  {
    "id" : 319,
    "name" : "Lou Barlow",
    "link_url" : "https://open.spotify.com/intl-it/artist/73ITRDqlSE4huQlrKuqrBU",
    "rating" : 3
  },
  {
    "id" : 320,
    "name" : "Swell",
    "link_url" : "https://open.spotify.com/intl-it/artist/4EaWgdL8zvu4JvDZY4ED5Q",
    "rating" : 2
  },
  {
    "id" : 321,
    "name" : "Akron/Family",
    "link_url" : "https://open.spotify.com/intl-it/artist/64l9cD8tQscYZCGRLlNm3f",
    "rating" : 1
  },
  {
    "id" : 322,
    "name" : "Kokoroko",
    "link_url" : "https://open.spotify.com/intl-it/artist/3u9rbdcmA6CxjxOAkjaeFr",
    "rating" : 1
  },
  {
    "id" : 323,
    "name" : "Chinese Football",
    "link_url" : "https://open.spotify.com/intl-it/artist/65qWysYTXcTL8nqZzg84Hk",
    "rating" : 4
  },
  {
    "id" : 324,
    "name" : "Nate Mercerau",
    "link_url" : "https://open.spotify.com/intl-it/artist/5fUnrD4Bwhct3etEOPID7X",
    "rating" : 3
  },
  {
    "id" : 325,
    "name" : "Music Hall",
    "link_url" : "https://open.spotify.com/intl-it/artist/0awumhwRVHMdvFZL2pZxOx",
    "rating" : 1
  },
  {
    "id" : 326,
    "name" : "Dehd",
    "link_url" : "https://open.spotify.com/intl-it/artist/6yzuBFtT6dK2aQMZJZtcB1",
    "rating" : 2
  },
  {
    "id" : 327,
    "name" : "Johan Berthling",
    "link_url" : "https://open.spotify.com/intl-it/artist/38aUI0eoAJAgRHtcYARlCT",
    "rating" : 3
  },
  {
    "id" : 328,
    "name" : "Rafael Toral",
    "link_url" : "https://open.spotify.com/intl-it/artist/3fRnSqMRklmNPLM9gEiIq7",
    "rating" : 2
  },
  {
    "id" : 329,
    "name" : "Ibelisse Guardia Ferragutti",
    "link_url" : "https://open.spotify.com/intl-it/artist/0shMltxCEpoQWgg6KSJRHO",
    "rating" : 3
  },
  {
    "id" : 330,
    "name" : "Shabaka",
    "link_url" : "https://open.spotify.com/intl-it/artist/6ywMpa6AmGJpV5Sbyy58Js",
    "rating" : 2
  },
  {
    "id" : 331,
    "name" : "Charles Lloyd",
    "link_url" : "https://open.spotify.com/intl-it/artist/0GC1oqEWpiAjfE7jm5LQO5",
    "rating" : 3
  },
  {
    "id" : 332,
    "name" : "Fabiano do Nascimento",
    "link_url" : "https://open.spotify.com/intl-it/artist/5GNLaaEOwaEaXJfK7XnD8j",
    "rating" : 1
  },
  {
    "id" : 333,
    "name" : "Mount Eerie",
    "link_url" : "https://open.spotify.com/artist/4Sw0SFu1fFdYXdAEVdrqnO",
    "rating" : 3
  },
  {
    "id" : 334,
    "name" : "Nala Sinephro",
    "link_url" : "https://open.spotify.com/artist/2h5syT5XdsQgKLq8Yn1klO",
    "rating" : 1
  },
  {
    "id" : 335,
    "name" : "Patricia Brennan",
    "link_url" : "https://open.spotify.com/artist/4Q7mKhsHlU8ku3jEL0oVee",
    "rating" : 2
  },
  {
    "id" : 336,
    "name" : "Joy Guidry",
    "link_url" : "https://open.spotify.com/artist/1xtLlHD0Fzp23P5nEHAfFk",
    "rating" : 2
  },
  {
    "id" : 337,
    "name" : "Gustaf",
    "link_url" : "",
    "rating" : 3
  },
  {
    "id" : 338,
    "name" : "Ganavya",
    "link_url" : "https://open.spotify.com/artist/1NXSMPrdftOB0I4LeSkwjz",
    "rating" : 2
  },
  {
    "id" : 339,
    "name" : "Godspeed You! Black Emperor",
    "link_url" : "https://open.spotify.com/artist/4svpOyfmQKuWpHLjgy4cdK",
    "rating" : 4
  },
  {
    "id" : 340,
    "name" : "Amyl and The Sniffers",
    "link_url" : "https://open.spotify.com/artist/3NqV2DJoAWsjl787bWaHW7",
    "rating" : 3
  },
  {
    "id" : 341,
    "name" : "Divide And Dissolve",
    "link_url" : "https://open.spotify.com/artist/4YmPo9Zke9OYNmV5WW7CMS",
    "rating" : 2
  },
  {
    "id" : 342,
    "name" : "Oluko Imo",
    "link_url" : "https://open.spotify.com/artist/6c057StaFUYiLW4FBgF8Vr",
    "rating" : 2
  },
  {
    "id" : 343,
    "name" : "Lee Scratch Perry",
    "link_url" : "https://open.spotify.com/artist/1TsG4AumsMt1Tcq2nHpov9",
    "rating" : 3
  },
  {
    "id" : 344,
    "name" : "Melos Kalpa",
    "link_url" : "https://open.spotify.com/artist/7z71fk9irZZh7kguh7ZTfL",
    "rating" : 3
  },
  {
    "id" : 345,
    "name" : "Moin",
    "link_url" : "https://open.spotify.com/artist/3HKbW1X4Aj2RZU6ruh3a0e",
    "rating" : 4
  },
  {
    "id" : 346,
    "name" : "Arooj Aftab",
    "link_url" : "https://open.spotify.com/artist/00JAfwtx5gNiiqyor88Dr5",
    "rating" : 2
  },
  {
    "id" : 347,
    "name" : "Jeff Parker",
    "link_url" : "https://open.spotify.com/artist/3AaY5O1qS0tcNPHwwMwplt",
    "rating" : 2
  },
  {
    "id" : 348,
    "name" : "Oren Ambarchi",
    "link_url" : "https://open.spotify.com/artist/1fIzM2bmsXG77E5EMPtdKW",
    "rating" : 3
  },
  {
    "id" : 349,
    "name" : "Orchestre Tout Puissant Marcel Duchamp",
    "link_url" : "https://open.spotify.com/artist/7L8bsKFWYTMJj9c5HIPNtR",
    "rating" : 4
  },
  {
    "id" : 350,
    "name" : "Yara Asmar",
    "link_url" : "https://open.spotify.com/artist/5gtMPcBy3Mp4I4zF1fVmch",
    "rating" : 3
  },
  {
    "id" : 351,
    "name" : "Salami Rose Joe Louis",
    "link_url" : "https://open.spotify.com/artist/6EHS9kZ9PpeXaJ4wZO3FSX",
    "rating" : 1
  },
  {
    "id" : 352,
    "name" : "Alex Vile",
    "link_url" : "https://open.spotify.com/artist/4i3YqXXd0dRAYMNcWH0na7",
    "rating" : 2
  },
  {
    "id" : 353,
    "name" : "Toe",
    "link_url" : "https://open.spotify.com/artist/0rpKM0MniNkXM1SLSglYUZ",
    "rating" : 2
  },
  {
    "id" : 354,
    "name" : "Black Ends",
    "link_url" : "https://open.spotify.com/artist/5D8NXuzLwBMIZuL8o6U8q3",
    "rating" : 4
  },
  {
    "id" : 355,
    "name" : "Chat Pile",
    "link_url" : "https://open.spotify.com/artist/4yRSUmhuSJ3KcIMljdh4fH",
    "rating" : 3
  },
  {
    "id" : 356,
    "name" : "Nic T",
    "link_url" : "https://open.spotify.com/artist/0W8wnYUmoJ3GiItE1VY7rO",
    "rating" : 2
  },
  {
    "id" : 357,
    "name" : "Helen Money",
    "link_url" : "https://open.spotify.com/artist/7u30P8TzAIVEMkBACjZjPs",
    "rating" : 3
  },
  {
    "id" : 358,
    "name" : "C. Diab",
    "link_url" : "https://open.spotify.com/artist/4jIb1FKwE3QlPyNYTBLPSA",
    "rating" : 3
  },
  {
    "id" : 359,
    "name" : "Yomi Ship",
    "link_url" : "https://open.spotify.com/artist/15tGSRQIcaaUae1tuZsuL5",
    "rating" : 3
  },
  {
    "id" : 360,
    "name" : "BIG|BRAVE",
    "link_url" : "https://open.spotify.com/artist/5nlpqhz47LYv7KvarJdh44",
    "rating" : 4
  },
  {
    "id" : 361,
    "name" : "La Ciencia Simple",
    "link_url" : "https://open.spotify.com/artist/1QBzzMyJtrjIGr3NSKp1A3",
    "rating" : 4
  },
  {
    "id" : 362,
    "name" : "Bike",
    "link_url" : "https://open.spotify.com/artist/7nUTiIfqotUDu3HCqWMqcS",
    "rating" : 2
  },
  {
    "id" : 363,
    "name" : "Niños Del Cerro",
    "link_url" : "https://open.spotify.com/artist/1RpIuXeUsxfYBdQIg19QSy",
    "rating" : 3
  },
  {
    "id" : 364,
    "name" : "Jon McKiel",
    "link_url" : "https://open.spotify.com/artist/42tgL54E6Mh70eIaikDven",
    "rating" : 2
  },
  {
    "id" : 365,
    "name" : "Tobin Sprout",
    "link_url" : "https://open.spotify.com/artist/2LsbZ4vhm7aWOEqBLZQfbX",
    "rating" : 2
  },
  {
    "id" : 366,
    "name" : "Shida Shahabi",
    "link_url" : "https://open.spotify.com/artist/72kYzyvgJS9izgSp2ttqdm",
    "rating" : 4
  },
  {
    "id" : 367,
    "name" : "Caroline Shaw",
    "link_url" : "https://open.spotify.com/artist/3uUFClFtbjbjQQIq4BjY2C",
    "rating" : 3
  },
  {
    "id" : 368,
    "name" : "Basic Partner",
    "link_url" : "https://open.spotify.com/artist/4mO0SduTbxEusUepUcjNj3",
    "rating" : 2
  },
  {
    "id" : 369,
    "name" : "Television",
    "link_url" : "https://open.spotify.com/artist/0S7Zur2g8YhqlzqtlYStli",
    "rating" : 1
  },
  {
    "id" : 370,
    "name" : "Deep Sea Diver",
    "link_url" : "https://open.spotify.com/artist/6CD0HbcaKmuVB3NHJJgSdH",
    "rating" : 4
  },
  {
    "id" : 371,
    "name" : "Palomino Blond",
    "link_url" : "https://open.spotify.com/artist/0oNZ5XN1TT4aWlxHhx8oWe",
    "rating" : 2
  },
  {
    "id" : 372,
    "name" : "X-Ray Spex",
    "link_url" : "https://open.spotify.com/artist/5BgWMOdEUJYdUBH3WXfMWt",
    "rating" : 4
  },
  {
    "id" : 373,
    "name" : "Henrik Lindstrand",
    "link_url" : "https://open.spotify.com/artist/1jdUu8RsoIhTGLeJvzoACP",
    "rating" : 5
  },
  {
    "id" : 374,
    "name" : "Den Der Hale",
    "link_url" : "https://open.spotify.com/artist/3ckoZBhv3loAIC409aRlFE",
    "rating" : 3
  },
  {
    "id" : 375,
    "name" : "Frankie Cosmos",
    "link_url" : "https://open.spotify.com/artist/0x4xCoWaOFd3WsKarzaxnW",
    "rating" : 4
  },
  {
    "id" : 376,
    "name" : "Nilufer Yanya",
    "link_url" : "https://open.spotify.com/artist/09kXLeOXRyfNQMXRaDO4qA",
    "rating" : 2
  },
  {
    "id" : 377,
    "name" : "Kinski",
    "link_url" : "https://open.spotify.com/artist/4WGpFPOeW71MpVHKJurgrj",
    "rating" : 4
  },
  {
    "id" : 378,
    "name" : "Summer Cannibals",
    "link_url" : "https://open.spotify.com/artist/2KXSm6sLmPwUCXpq4OrHHZ",
    "rating" : 2
  },
  {
    "id" : 379,
    "name" : "Polkadot",
    "link_url" : "https://open.spotify.com/artist/3imGR8BOPd0OheY0jgxz8n",
    "rating" : 2
  },
  {
    "id" : 380,
    "name" : "Lungfish",
    "link_url" : "https://open.spotify.com/artist/2aeccL0hsJAfsP56dRdrBI",
    "rating" : 3
  },
  {
    "id" : 381,
    "name" : "Flying Saucer Attack",
    "link_url" : "https://open.spotify.com/artist/336fB3AJgK8AvHX5bD8d9A",
    "rating" : 2
  },
  {
    "id" : 382,
    "name" : "Lakecia Benjamin",
    "link_url" : "https://open.spotify.com/artist/6hvjxbUASJd6bHds2Teaul",
    "rating" : 3
  },
  {
    "id" : 383,
    "name" : "Brandee Younger",
    "link_url" : "https://open.spotify.com/artist/1DT11FntvMnaU47ZZWlTpB",
    "rating" : 3
  },
  {
    "id" : 384,
    "name" : "Daniela Pes",
    "link_url" : "https://open.spotify.com/artist/6DEkxQm6GxNV26tUMfVf6c",
    "rating" : 1
  },
  {
    "id" : 385,
    "name" : "Spering & Schulz",
    "link_url" : "https://open.spotify.com/artist/37uKehkKdPCOszw8fhrYiB",
    "rating" : 2
  },
  {
    "id" : 386,
    "name" : "M(h)aol",
    "link_url" : "https://open.spotify.com/artist/3YQdlHhWbhvV46g0bDtaFN",
    "rating" : 4
  },
  {
    "id" : 387,
    "name" : "The Nocturnes",
    "link_url" : "https://open.spotify.com/artist/675mGrlyTJeyWVj31SUk9g?si=c1z730xrQE-IQentEEOAxg",
    "rating" : 2
  },
  {
    "id" : 388,
    "name" : "Marriages",
    "link_url" : "https://open.spotify.com/artist/7lAYeGtgIQjUZ5mw0XxEZ2?si=4QGblVOBRm2vgpIp_EGnfA",
    "rating" : 2
  },
  {
    "id" : 389,
    "name" : "Spent",
    "link_url" : "https://open.spotify.com/artist/1JIkIpwyYD7ASNNI40onxO?si=EEKeMwD9QgGbvEECgIdsUQ",
    "rating" : 2
  },
  {
    "id" : 390,
    "name" : "Scowl",
    "link_url" : "https://open.spotify.com/artist/6hW33nVHPElaXuG2hQ0QOp?si=n3zSbw_ETTGT9Ptxa6PVOg",
    "rating" : 2
  },
  {
    "id" : 391,
    "name" : "Guv'ner",
    "link_url" : "https://open.spotify.com/artist/0nt4Tol65jI2HFfFtuofg1?si=irklLeGRRCCvIEhuQlmyrg",
    "rating" : 2
  },
  {
    "id" : 392,
    "name" : "The Wrens",
    "link_url" : "https://open.spotify.com/artist/04cetTUz2JTzXBqFKO5YB5?si=iHaKmydjQjm287d_OfbSeg",
    "rating" : 3
  },
  {
    "id" : 393,
    "name" : "maya ongaku",
    "link_url" : "https://open.spotify.com/artist/2dYBechVJjAf6bTo5se1N5?si=tbScDUBLTu2lNLTEgP-Wcg",
    "rating" : 3
  },
  {
    "id" : 394,
    "name" : "Isaiah Collier",
    "link_url" : "https://open.spotify.com/artist/7LxYxXTbSSkx480oIp3EYU?si=oK3xXUdFSJKvHLTsnI7-iQ",
    "rating" : 4
  },
  {
    "id" : 395,
    "name" : "Ichiko Aoba",
    "link_url" : "https://open.spotify.com/artist/6ignRjbPmLvKdtMLj9a5Xs?si=vSWz-7WJSiaLj25vrm9OBw",
    "rating" : 2
  },
  {
    "id" : 396,
    "name" : "Tsunami",
    "link_url" : "https://open.spotify.com/artist/4nYZwJrT4QukNO5FqaDcW3?si=EXyr6dqLQp6uyZEPbbte-g",
    "rating" : 4
  },
  {
    "id" : 397,
    "name" : "Ida",
    "link_url" : "https://open.spotify.com/artist/59sabZEdH1o4BqCUzXGmd7?si=x7hejmVmQJWnkxQQK85ljg",
    "rating" : 4
  },
  {
    "id" : 398,
    "name" : "Risley",
    "link_url" : "https://open.spotify.com/artist/3OBCS2pc06HxS2fxBZoAyg?si=GEAVP76mRMK3io90U-2NuQ",
    "rating" : 1
  },
  {
    "id" : 399,
    "name" : "Joe Zawinul",
    "link_url" : "https://open.spotify.com/artist/3DkK9XA1CI1i7U7ovpAo1G?si=rmOR6IkPRmugcirrlv15ew",
    "rating" : 3
  },
  {
    "id" : 400,
    "name" : "All Them Witches",
    "link_url" : "https://open.spotify.com/artist/29Wmfm1CojrjQ3aQP0FI65?si=zO0m_PfDRUCakj0rkJDH5g",
    "rating" : 3
  },
  {
    "id" : 401,
    "name" : "Sandy Denny",
    "link_url" : "https://open.spotify.com/artist/1kYd37riIExqdm9g0juqGJ?si=XLKG8I4IRp6RFod6ux-1ZA",
    "rating" : 4
  },
  {
    "id" : 402,
    "name" : "Pinkshinyultrablast",
    "link_url" : "https://open.spotify.com/artist/3pJuDuFyP5uxCHDpXPczf4?si=Iah52AWKT7iVLVXmg5PGbw",
    "rating" : 4
  },
  {
    "id" : 403,
    "name" : "Jacob Alon",
    "link_url" : "https://open.spotify.com/artist/6wef18QJfuh9f0C4v3TEVH?si=qbg3BhttSw2X9t8S8jFGrw",
    "rating" : 2
  },
  {
    "id" : 404,
    "name" : "Deary",
    "link_url" : "https://open.spotify.com/artist/5Pir3nnrulz7WMyC9bFhkL?si=FkTNPvK6QtWj9kJGqQ7dKw",
    "rating" : 3
  },
  {
    "id" : 405,
    "name" : "Black Country, New Road",
    "link_url" : "",
    "rating" : 4
  },
  {
    "id" : 407,
    "name" : "Cumulus",
    "link_url" : "https://open.spotify.com/intl-it/artist/5kO4scXJTa1QzbxqG55xFK?si=aftMzxuoQu6-UeXE4g0LVw",
    "rating" : 2
  },
  {
    "id" : 408,
    "name" : "Makaya McCraven",
    "link_url" : "https://open.spotify.com/intl-it/artist/5FnpXrrMdJVZCK54oHWqUa?si=cUA4wqo5SxGphlc8iM6Evw",
    "rating" : 4
  },
  {
    "id" : 409,
    "name" : "Cymande",
    "link_url" : "https://open.spotify.com/artist/4hfcSstwnyuBoek1dQwLkG?si=LVQAhw_eQtCI4aIc0-25_w",
    "rating" : 3
  },
  {
    "id" : 410,
    "name" : "Spencer Zahn",
    "link_url" : "https://open.spotify.com/artist/7Besl9VdibJqiIjJ40fphx?si=PTvpbM0zQa2-M2qEYGgYCA",
    "rating" : 2
  },
  {
    "id" : 411,
    "name" : "Fake Fruit",
    "link_url" : "https://open.spotify.com/artist/3WpGIqLvk5kAcvvxEHztL9?si=ZjGbyCC8RICXKaXwVHoE9Q",
    "rating" : 3
  },
  {
    "id" : 412,
    "name" : "Jakob Dinesen",
    "link_url" : "https://open.spotify.com/artist/0zXQ9vdekvX8v0BlR5DuU0?si=ZmX_GttVQRWlZFaHGkN3tQ",
    "rating" : 2
  },
  {
    "id" : 413,
    "name" : "Ben Webster",
    "link_url" : "https://open.spotify.com/artist/34W7ZCX0LZeJd8q6boKGOk?si=uh3Wo29KSPuVbQFdC8qwpQ",
    "rating" : 4
  },
  {
    "id" : 414,
    "name" : "The Tubs",
    "link_url" : "https://open.spotify.com/artist/6kdAf6E0EouXKBpBZN1Sx9?si=SULkXba3RD6GBee_F9KMDQ",
    "rating" : 3
  },
  {
    "id" : 415,
    "name" : "Coral Grief",
    "link_url" : "https://open.spotify.com/artist/0O5Q3XbLXsSkQ4sM42c66a?si=JWymFiu3RlCy0Xwn7sAZ4A",
    "rating" : 2
  },
  {
    "id" : 416,
    "name" : "Fairport Convention",
    "link_url" : "https://open.spotify.com/artist/2LIdnZDzySb04oH40be1fR?si=aSZ6Mh4_ROaXN4_5TI3QnQ",
    "rating" : 4
  },
  {
    "id" : 417,
    "name" : "Westside Cowboy",
    "link_url" : "https://open.spotify.com/artist/5LfO4rbJarBvHjB34mU9m2?si=t9ZcTXZmSaaZZpkHss_ebw",
    "rating" : 3
  },
  {
    "id" : 418,
    "name" : "Tropical Fuck Storm",
    "link_url" : "https://open.spotify.com/artist/0mL6LBSQ4bHe6hWq90KzHL?si=T7IPLvW2SaykCAW4aHT7sw",
    "rating" : 5
  },
  {
    "id" : 419,
    "name" : "Public Service Broadcasting",
    "link_url" : "https://open.spotify.com/artist/6VsiDFMZJlJ053P1uO4A6h?si=VZT-5jtsR7GWSvy_sQoOlA",
    "rating" : 4
  },
  {
    "id" : 420,
    "name" : "Gouge Away",
    "link_url" : "https://open.spotify.com/artist/1Gi5tHYi0ptGG0G3tX9PkU?si=g3s-lVZTQWKuY78Lp0SNkA",
    "rating" : 4
  },
  {
    "id" : 421,
    "name" : "Mei Semones",
    "link_url" : "https://open.spotify.com/artist/3Cp20KSVlMlFuOdqiqHFGR?si=uVxWJ9OuQyy72j-vckc6Yg",
    "rating" : 2
  },
  {
    "id" : 422,
    "name" : "Tunde Adebimpe",
    "link_url" : "https://open.spotify.com/artist/3and7uje1nuMnKJczCKox9?si=LeTBr4pYQ_yq3rc8VODNrA",
    "rating" : 4
  },
  {
    "id" : 423,
    "name" : "Sparklehorse",
    "link_url" : "https://open.spotify.com/artist/64tVHZVSAZhDEiOJxnb6hE?si=NxJoqYcqTYyekBQjDrAPgg",
    "rating" : 2
  },
  {
    "id" : 424,
    "name" : "Rival Schools",
    "link_url" : "https://open.spotify.com/artist/558fch9H4BrW99aTfvtYrz?si=2GUvRFp8R3yPpqZmCcVd7Qr",
    "rating" : 3
  },
  {
    "id" : 425,
    "name" : "Verloren Shatten",
    "link_url" : "https://open.spotify.com/artist/2Jdp4cWmcQBos5DcXAksGi?si=-niZpvqTRgGmihWij51CaA",
    "rating" : 3
  },
  {
    "id" : 426,
    "name" : "Indigo De Souza",
    "link_url" : "https://open.spotify.com/artist/3ir2pF2mkiEWqyPenKTh5e?si=JalivXdyR9654p-ratpe3g",
    "rating" : 2
  },
  {
    "id" : 427,
    "name" : "Levitation Orchestra",
    "link_url" : "https://open.spotify.com/artist/6srubtmEXe7rR1mRoALixs?si=zXp4smzdRaexYbB7HMAmcQ",
    "rating" : 4
  },
  {
    "id" : 428,
    "name" : "Beach House",
    "link_url" : "https://open.spotify.com/artist/56ZTgzPBDge0OvCGgMO3OY?si=p9OzDgw5QEumuauiWOkwBQ",
    "rating" : 2
  },
  {
    "id" : 429,
    "name" : "The Beths",
    "link_url" : "https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin?si=vk09a0kBQwiseChUCgAIsw",
    "rating" : 3
  },
  {
    "id" : 430,
    "name" : "The Passions",
    "link_url" : "https://open.spotify.com/artist/6emLiLQsxkbmQMs0Bn51h3?si=RhylC9xES22WYc27_WY1hw",
    "rating" : 3
  },
  {
    "id" : 431,
    "name" : "WITCH",
    "link_url" : "https://open.spotify.com/artist/0LMkPoi2xIgpOPUSJMftqM?si=9PGN6fZjSAOjYFVCWZrG9Q",
    "rating" : 3
  },
  {
    "id" : 432,
    "name" : "OU",
    "link_url" : "https://open.spotify.com/artist/1U2znevBys5LVQqSWBQ7Cl?si=hHBdrvFjSX6cTDWPLk3z8Q",
    "rating" : 2
  },
  {
    "id" : 433,
    "name" : "Clock's Pointer Dance",
    "link_url" : "https://open.spotify.com/artist/5d0LfHzs3WBsvjcU9oIXFQ?si=efgx_qxYSpCEvy75HbC5kA",
    "rating" : 2
  },
  {
    "id" : 434,
    "name" : "Ensemble Nist-Nah",
    "link_url" : "",
    "rating" : 3
  },
  {
    "id" : 435,
    "name" : "Gyedu-Blay Ambolley",
    "link_url" : "https://open.spotify.com/artist/3K7G8Czqv2acbaWlxFfjbj?si=J0xMUBlkTtK0Icwn6EmKhw",
    "rating" : 3
  },
  {
    "id" : 436,
    "name" : "Barrington Levy",
    "link_url" : "https://open.spotify.com/artist/5mMuiFhh7faS7qxnTLRA6u?si=nJrphzpYTNS8ZaNCepNf4Q",
    "rating" : 2
  },
  {
    "id" : 437,
    "name" : "William Eaton",
    "link_url" : "https://open.spotify.com/artist/6U5U0rNdnTCf88dAyCpmjg?si=QbBrFdf0QOm7QUDyRoRFEA",
    "rating" : 3
  },
  {
    "id" : 438,
    "name" : "Egoless",
    "link_url" : "https://open.spotify.com/artist/06kZZb0f2O9zUfFrkI7rKg?si=Zx1Xiv_rQ1ODtWUztDX6SQ",
    "rating" : 3
  },
  {
    "id" : 439,
    "name" : "The Alien Dub Orchestra",
    "link_url" : "https://open.spotify.com/artist/3Lffk3bvAPWCGvD2EXxFRV?si=3eYD-eIZQV2yVQUZS6CAOw",
    "rating" : 2
  },
  {
    "id" : 440,
    "name" : "Soul Syndicate",
    "link_url" : "https://open.spotify.com/artist/4uXSwBs3vbrgDMXGMCIGoQ?si=gpMZbawTSjOOMRibG_Y4oQ",
    "rating" : 3
  },
  {
    "id" : 441,
    "name" : "King Tubby",
    "link_url" : "https://open.spotify.com/artist/1AMMMSq3rJdZtFGnBXEkz7?si=9eTFu_UwRp6-rJx7CJvpOQ",
    "rating" : 2
  }
]

export const METRICS: DemoMetric[] = [
      {
    "id" : 2,
    "name" : "rock",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 3,
    "name" : "jazz",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 4,
    "name" : "classical",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 5,
    "name" : "indie",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 6,
    "name" : "punk",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 7,
    "name" : "grunge",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 8,
    "name" : "metal",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 9,
    "name" : "noise",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 10,
    "name" : "calm",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 11,
    "name" : "sweet",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 12,
    "name" : "anger",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 13,
    "name" : "sad",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 14,
    "name" : "upbeat",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 15,
    "name" : "complex",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 16,
    "name" : "experimental",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 17,
    "name" : "female singer",
    "type" : 0,
    "category" : "other"
  },
  {
    "id" : 18,
    "name" : "male singer",
    "type" : 0,
    "category" : "other"
  },
  {
    "id" : 19,
    "name" : "instrumental",
    "type" : 0,
    "category" : "other"
  },
  {
    "id" : 20,
    "name" : "bop",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 21,
    "name" : "cool jazz",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 22,
    "name" : "free jazz",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 23,
    "name" : "jazz with singer",
    "type" : 0,
    "category" : "other"
  },
  {
    "id" : 24,
    "name" : "ambient",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 25,
    "name" : "psychedelic",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 26,
    "name" : "new jazz",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 27,
    "name" : "country rock",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 28,
    "name" : "hardrock",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 29,
    "name" : "raggae",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 30,
    "name" : "swing",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 31,
    "name" : "funk",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 32,
    "name" : "electronic",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 33,
    "name" : "shoegaze",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 34,
    "name" : "pop",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 35,
    "name" : "acoustic",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 36,
    "name" : "blues",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 37,
    "name" : "eclectic",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 38,
    "name" : "energetic",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 39,
    "name" : "ska",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 40,
    "name" : "britpop",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 41,
    "name" : "prog",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 42,
    "name" : "rap",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 43,
    "name" : "solemn",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 44,
    "name" : "rough",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 45,
    "name" : "classic rock",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 46,
    "name" : "traditional",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 47,
    "name" : "exotic",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 48,
    "name" : "folk",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 49,
    "name" : "soul",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 50,
    "name" : "unsettling",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 51,
    "name" : "dreamy",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 52,
    "name" : "emo",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 53,
    "name" : "dub",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 54,
    "name" : "lofi",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 55,
    "name" : "witty",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 56,
    "name" : "speak-singing",
    "type" : 0,
    "category" : "other"
  },
  {
    "id" : 57,
    "name" : "melodic",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 58,
    "name" : "gloomy",
    "type" : 1,
    "category" : "emotions"
  },
  {
    "id" : 59,
    "name" : "fusion",
    "type" : 1,
    "category" : "genre"
  },
  {
    "id" : 60,
    "name" : "smooth",
    "type" : 1,
    "category" : "other"
  },
  {
    "id" : 61,
    "name" : "bossanova",
    "type" : 1,
    "category" : "genre"
  }
]

export const SCORES: DemoScore[] = [
      {
    "id" : 2,
    "value" : 5,
    "artist_id" : 1,
    "metric_id" : 2
  },
  {
    "id" : 3,
    "value" : 5,
    "artist_id" : 1,
    "metric_id" : 7
  },
  {
    "id" : 4,
    "value" : 3,
    "artist_id" : 1,
    "metric_id" : 9
  },
  {
    "id" : 5,
    "value" : 4,
    "artist_id" : 1,
    "metric_id" : 12
  },
  {
    "id" : 7,
    "value" : 5,
    "artist_id" : 2,
    "metric_id" : 3
  },
  {
    "id" : 8,
    "value" : 3,
    "artist_id" : 2,
    "metric_id" : 9
  },
  {
    "id" : 9,
    "value" : 2,
    "artist_id" : 2,
    "metric_id" : 11
  },
  {
    "id" : 10,
    "value" : 3,
    "artist_id" : 2,
    "metric_id" : 15
  },
  {
    "id" : 11,
    "value" : 1,
    "artist_id" : 2,
    "metric_id" : 19
  },
  {
    "id" : 12,
    "value" : 5,
    "artist_id" : 2,
    "metric_id" : 21
  },
  {
    "id" : 13,
    "value" : 4,
    "artist_id" : 2,
    "metric_id" : 22
  },
  {
    "id" : 15,
    "value" : 4,
    "artist_id" : 3,
    "metric_id" : 2
  },
  {
    "id" : 16,
    "value" : 2,
    "artist_id" : 3,
    "metric_id" : 10
  },
  {
    "id" : 17,
    "value" : 2,
    "artist_id" : 3,
    "metric_id" : 15
  },
  {
    "id" : 23,
    "value" : 5,
    "artist_id" : 3,
    "metric_id" : 25
  },
  {
    "id" : 25,
    "value" : 5,
    "artist_id" : 4,
    "metric_id" : 3
  },
  {
    "id" : 26,
    "value" : 4,
    "artist_id" : 4,
    "metric_id" : 21
  },
  {
    "id" : 27,
    "value" : 3,
    "artist_id" : 4,
    "metric_id" : 22
  },
  {
    "id" : 28,
    "value" : 1,
    "artist_id" : 4,
    "metric_id" : 19
  },
  {
    "id" : 29,
    "value" : 3,
    "artist_id" : 4,
    "metric_id" : 15
  },
  {
    "id" : 31,
    "value" : 4,
    "artist_id" : 5,
    "metric_id" : 3
  },
  {
    "id" : 32,
    "value" : 1,
    "artist_id" : 5,
    "metric_id" : 19
  },
  {
    "id" : 33,
    "value" : 1,
    "artist_id" : 5,
    "metric_id" : 15
  },
  {
    "id" : 34,
    "value" : 2,
    "artist_id" : 5,
    "metric_id" : 10
  },
  {
    "id" : 35,
    "value" : 5,
    "artist_id" : 5,
    "metric_id" : 26
  },
  {
    "id" : 37,
    "value" : 4,
    "artist_id" : 6,
    "metric_id" : 3
  },
  {
    "id" : 38,
    "value" : 4,
    "artist_id" : 6,
    "metric_id" : 26
  },
  {
    "id" : 39,
    "value" : 2,
    "artist_id" : 6,
    "metric_id" : 10
  },
  {
    "id" : 40,
    "value" : 3,
    "artist_id" : 6,
    "metric_id" : 15
  },
  {
    "id" : 42,
    "value" : 4,
    "artist_id" : 7,
    "metric_id" : 2
  },
  {
    "id" : 43,
    "value" : 3,
    "artist_id" : 7,
    "metric_id" : 9
  },
  {
    "id" : 44,
    "value" : 2,
    "artist_id" : 7,
    "metric_id" : 15
  },
  {
    "id" : 45,
    "value" : 2,
    "artist_id" : 7,
    "metric_id" : 13
  },
  {
    "id" : 47,
    "value" : 4,
    "artist_id" : 8,
    "metric_id" : 2
  },
  {
    "id" : 48,
    "value" : 2,
    "artist_id" : 8,
    "metric_id" : 7
  },
  {
    "id" : 49,
    "value" : 4,
    "artist_id" : 8,
    "metric_id" : 9
  },
  {
    "id" : 50,
    "value" : 3,
    "artist_id" : 8,
    "metric_id" : 12
  },
  {
    "id" : 51,
    "value" : 3,
    "artist_id" : 8,
    "metric_id" : 15
  },
  {
    "id" : 52,
    "value" : 3,
    "artist_id" : 8,
    "metric_id" : 16
  },
  {
    "id" : 58,
    "value" : 5,
    "artist_id" : 10,
    "metric_id" : 2
  },
  {
    "id" : 59,
    "value" : 3,
    "artist_id" : 10,
    "metric_id" : 27
  },
  {
    "id" : 60,
    "value" : 2,
    "artist_id" : 10,
    "metric_id" : 28
  },
  {
    "id" : 61,
    "value" : 4,
    "artist_id" : 10,
    "metric_id" : 14
  },
  {
    "id" : 65,
    "value" : 5,
    "artist_id" : 11,
    "metric_id" : 29
  },
  {
    "id" : 66,
    "value" : 2,
    "artist_id" : 11,
    "metric_id" : 2
  },
  {
    "id" : 67,
    "value" : 4,
    "artist_id" : 11,
    "metric_id" : 14
  },
  {
    "id" : 69,
    "value" : 5,
    "artist_id" : 12,
    "metric_id" : 3
  },
  {
    "id" : 70,
    "value" : 2,
    "artist_id" : 12,
    "metric_id" : 20
  },
  {
    "id" : 71,
    "value" : 2,
    "artist_id" : 12,
    "metric_id" : 13
  },
  {
    "id" : 72,
    "value" : 2,
    "artist_id" : 12,
    "metric_id" : 11
  },
  {
    "id" : 73,
    "value" : 4,
    "artist_id" : 12,
    "metric_id" : 14
  },
  {
    "id" : 75,
    "value" : 5,
    "artist_id" : 13,
    "metric_id" : 3
  },
  {
    "id" : 76,
    "value" : 1,
    "artist_id" : 13,
    "metric_id" : 17
  },
  {
    "id" : 77,
    "value" : 2,
    "artist_id" : 13,
    "metric_id" : 13
  },
  {
    "id" : 78,
    "value" : 3,
    "artist_id" : 13,
    "metric_id" : 11
  },
  {
    "id" : 79,
    "value" : 5,
    "artist_id" : 13,
    "metric_id" : 14
  },
  {
    "id" : 80,
    "value" : 4,
    "artist_id" : 12,
    "metric_id" : 30
  },
  {
    "id" : 81,
    "value" : 5,
    "artist_id" : 13,
    "metric_id" : 30
  },
  {
    "id" : 82,
    "value" : 1,
    "artist_id" : 13,
    "metric_id" : 23
  },
  {
    "id" : 87,
    "value" : 5,
    "artist_id" : 14,
    "metric_id" : 3
  },
  {
    "id" : 88,
    "value" : 3,
    "artist_id" : 14,
    "metric_id" : 14
  },
  {
    "id" : 89,
    "value" : 5,
    "artist_id" : 14,
    "metric_id" : 21
  },
  {
    "id" : 90,
    "value" : 2,
    "artist_id" : 14,
    "metric_id" : 15
  },
  {
    "id" : 91,
    "value" : 1,
    "artist_id" : 14,
    "metric_id" : 19
  },
  {
    "id" : 92,
    "value" : 1,
    "artist_id" : 14,
    "metric_id" : 4
  },
  {
    "id" : 93,
    "value" : 3,
    "artist_id" : 14,
    "metric_id" : 10
  },
  {
    "id" : 95,
    "value" : 4,
    "artist_id" : 15,
    "metric_id" : 2
  },
  {
    "id" : 96,
    "value" : 4,
    "artist_id" : 15,
    "metric_id" : 5
  },
  {
    "id" : 97,
    "value" : 3,
    "artist_id" : 15,
    "metric_id" : 6
  },
  {
    "id" : 98,
    "value" : 3,
    "artist_id" : 15,
    "metric_id" : 9
  },
  {
    "id" : 99,
    "value" : 3,
    "artist_id" : 15,
    "metric_id" : 12
  },
  {
    "id" : 100,
    "value" : 1,
    "artist_id" : 15,
    "metric_id" : 18
  },
  {
    "id" : 101,
    "value" : 1,
    "artist_id" : 15,
    "metric_id" : 17
  },
  {
    "id" : 103,
    "value" : 4,
    "artist_id" : 16,
    "metric_id" : 2
  },
  {
    "id" : 104,
    "value" : 3,
    "artist_id" : 16,
    "metric_id" : 7
  },
  {
    "id" : 105,
    "value" : 3,
    "artist_id" : 16,
    "metric_id" : 14
  },
  {
    "id" : 106,
    "value" : 2,
    "artist_id" : 16,
    "metric_id" : 11
  },
  {
    "id" : 108,
    "value" : 2,
    "artist_id" : 17,
    "metric_id" : 2
  },
  {
    "id" : 109,
    "value" : 2,
    "artist_id" : 17,
    "metric_id" : 14
  },
  {
    "id" : 110,
    "value" : 4,
    "artist_id" : 17,
    "metric_id" : 10
  },
  {
    "id" : 111,
    "value" : 3,
    "artist_id" : 17,
    "metric_id" : 11
  },
  {
    "id" : 112,
    "value" : 1,
    "artist_id" : 17,
    "metric_id" : 17
  },
  {
    "id" : 113,
    "value" : 1,
    "artist_id" : 17,
    "metric_id" : 18
  },
  {
    "id" : 115,
    "value" : 4,
    "artist_id" : 18,
    "metric_id" : 2
  },
  {
    "id" : 116,
    "value" : 4,
    "artist_id" : 18,
    "metric_id" : 5
  },
  {
    "id" : 117,
    "value" : 1,
    "artist_id" : 18,
    "metric_id" : 9
  },
  {
    "id" : 118,
    "value" : 3,
    "artist_id" : 18,
    "metric_id" : 14
  },
  {
    "id" : 119,
    "value" : 3,
    "artist_id" : 18,
    "metric_id" : 11
  },
  {
    "id" : 120,
    "value" : 3,
    "artist_id" : 18,
    "metric_id" : 13
  },
  {
    "id" : 122,
    "value" : 5,
    "artist_id" : 19,
    "metric_id" : 3
  },
  {
    "id" : 123,
    "value" : 3,
    "artist_id" : 19,
    "metric_id" : 31
  },
  {
    "id" : 124,
    "value" : 4,
    "artist_id" : 19,
    "metric_id" : 21
  },
  {
    "id" : 125,
    "value" : 1,
    "artist_id" : 19,
    "metric_id" : 19
  },
  {
    "id" : 126,
    "value" : 3,
    "artist_id" : 19,
    "metric_id" : 10
  },
  {
    "id" : 127,
    "value" : 2,
    "artist_id" : 19,
    "metric_id" : 14
  },
  {
    "id" : 128,
    "value" : 4,
    "artist_id" : 19,
    "metric_id" : 15
  },
  {
    "id" : 130,
    "value" : 4,
    "artist_id" : 20,
    "metric_id" : 2
  },
  {
    "id" : 132,
    "value" : 5,
    "artist_id" : 20,
    "metric_id" : 5
  },
  {
    "id" : 135,
    "value" : 1,
    "artist_id" : 20,
    "metric_id" : 9
  },
  {
    "id" : 136,
    "value" : 3,
    "artist_id" : 20,
    "metric_id" : 14
  },
  {
    "id" : 137,
    "value" : 2,
    "artist_id" : 20,
    "metric_id" : 15
  },
  {
    "id" : 138,
    "value" : 2,
    "artist_id" : 20,
    "metric_id" : 16
  },
  {
    "id" : 139,
    "value" : 1,
    "artist_id" : 20,
    "metric_id" : 18
  },
  {
    "id" : 140,
    "value" : 2,
    "artist_id" : 20,
    "metric_id" : 32
  },
  {
    "id" : 141,
    "value" : 1,
    "artist_id" : 20,
    "metric_id" : 13
  },
  {
    "id" : 143,
    "value" : 3,
    "artist_id" : 22,
    "metric_id" : 2
  },
  {
    "id" : 144,
    "value" : 4,
    "artist_id" : 22,
    "metric_id" : 33
  },
  {
    "id" : 145,
    "value" : 4,
    "artist_id" : 22,
    "metric_id" : 10
  },
  {
    "id" : 146,
    "value" : 1,
    "artist_id" : 22,
    "metric_id" : 11
  },
  {
    "id" : 147,
    "value" : 1,
    "artist_id" : 22,
    "metric_id" : 13
  },
  {
    "id" : 148,
    "value" : 3,
    "artist_id" : 22,
    "metric_id" : 5
  },
  {
    "id" : 149,
    "value" : 1,
    "artist_id" : 22,
    "metric_id" : 17
  },
  {
    "id" : 150,
    "value" : 1,
    "artist_id" : 18,
    "metric_id" : 18
  },
  {
    "id" : 156,
    "value" : 3,
    "artist_id" : 23,
    "metric_id" : 2
  },
  {
    "id" : 157,
    "value" : 5,
    "artist_id" : 23,
    "metric_id" : 5
  },
  {
    "id" : 158,
    "value" : 2,
    "artist_id" : 23,
    "metric_id" : 15
  },
  {
    "id" : 159,
    "value" : 1,
    "artist_id" : 23,
    "metric_id" : 17
  },
  {
    "id" : 160,
    "value" : 3,
    "artist_id" : 23,
    "metric_id" : 32
  },
  {
    "id" : 161,
    "value" : 1,
    "artist_id" : 23,
    "metric_id" : 33
  },
  {
    "id" : 162,
    "value" : 2,
    "artist_id" : 23,
    "metric_id" : 9
  },
  {
    "id" : 164,
    "value" : 3,
    "artist_id" : 24,
    "metric_id" : 11
  },
  {
    "id" : 165,
    "value" : 1,
    "artist_id" : 24,
    "metric_id" : 13
  },
  {
    "id" : 166,
    "value" : 1,
    "artist_id" : 24,
    "metric_id" : 2
  },
  {
    "id" : 167,
    "value" : 1,
    "artist_id" : 24,
    "metric_id" : 18
  },
  {
    "id" : 168,
    "value" : 3,
    "artist_id" : 24,
    "metric_id" : 16
  },
  {
    "id" : 169,
    "value" : 1,
    "artist_id" : 24,
    "metric_id" : 24
  },
  {
    "id" : 171,
    "value" : 4,
    "artist_id" : 25,
    "metric_id" : 2
  },
  {
    "id" : 172,
    "value" : 3,
    "artist_id" : 25,
    "metric_id" : 14
  },
  {
    "id" : 174,
    "value" : 2,
    "artist_id" : 26,
    "metric_id" : 2
  },
  {
    "id" : 175,
    "value" : 3,
    "artist_id" : 26,
    "metric_id" : 5
  },
  {
    "id" : 176,
    "value" : 5,
    "artist_id" : 26,
    "metric_id" : 10
  },
  {
    "id" : 177,
    "value" : 4,
    "artist_id" : 26,
    "metric_id" : 11
  },
  {
    "id" : 178,
    "value" : 3,
    "artist_id" : 26,
    "metric_id" : 13
  },
  {
    "id" : 179,
    "value" : 1,
    "artist_id" : 26,
    "metric_id" : 17
  },
  {
    "id" : 180,
    "value" : 1,
    "artist_id" : 26,
    "metric_id" : 18
  },
  {
    "id" : 181,
    "value" : 2,
    "artist_id" : 26,
    "metric_id" : 27
  },
  {
    "id" : 183,
    "value" : 5,
    "artist_id" : 27,
    "metric_id" : 3
  },
  {
    "id" : 184,
    "value" : 2,
    "artist_id" : 27,
    "metric_id" : 11
  },
  {
    "id" : 185,
    "value" : 1,
    "artist_id" : 27,
    "metric_id" : 13
  },
  {
    "id" : 186,
    "value" : 4,
    "artist_id" : 27,
    "metric_id" : 14
  },
  {
    "id" : 187,
    "value" : 1,
    "artist_id" : 27,
    "metric_id" : 17
  },
  {
    "id" : 188,
    "value" : 1,
    "artist_id" : 27,
    "metric_id" : 23
  },
  {
    "id" : 189,
    "value" : 5,
    "artist_id" : 27,
    "metric_id" : 30
  },
  {
    "id" : 191,
    "value" : 5,
    "artist_id" : 28,
    "metric_id" : 3
  },
  {
    "id" : 192,
    "value" : 4,
    "artist_id" : 28,
    "metric_id" : 10
  },
  {
    "id" : 193,
    "value" : 2,
    "artist_id" : 28,
    "metric_id" : 11
  },
  {
    "id" : 194,
    "value" : 3,
    "artist_id" : 28,
    "metric_id" : 13
  },
  {
    "id" : 195,
    "value" : 2,
    "artist_id" : 28,
    "metric_id" : 15
  },
  {
    "id" : 196,
    "value" : 1,
    "artist_id" : 28,
    "metric_id" : 19
  },
  {
    "id" : 197,
    "value" : 5,
    "artist_id" : 28,
    "metric_id" : 21
  },
  {
    "id" : 199,
    "value" : 5,
    "artist_id" : 29,
    "metric_id" : 2
  },
  {
    "id" : 200,
    "value" : 5,
    "artist_id" : 29,
    "metric_id" : 7
  },
  {
    "id" : 201,
    "value" : 2,
    "artist_id" : 29,
    "metric_id" : 9
  },
  {
    "id" : 202,
    "value" : 4,
    "artist_id" : 29,
    "metric_id" : 12
  },
  {
    "id" : 203,
    "value" : 2,
    "artist_id" : 29,
    "metric_id" : 13
  },
  {
    "id" : 204,
    "value" : 2,
    "artist_id" : 29,
    "metric_id" : 8
  },
  {
    "id" : 205,
    "value" : 1,
    "artist_id" : 29,
    "metric_id" : 18
  },
  {
    "id" : 207,
    "value" : 2,
    "artist_id" : 30,
    "metric_id" : 2
  },
  {
    "id" : 208,
    "value" : 5,
    "artist_id" : 30,
    "metric_id" : 5
  },
  {
    "id" : 209,
    "value" : 3,
    "artist_id" : 30,
    "metric_id" : 9
  },
  {
    "id" : 210,
    "value" : 5,
    "artist_id" : 30,
    "metric_id" : 10
  },
  {
    "id" : 211,
    "value" : 3,
    "artist_id" : 30,
    "metric_id" : 11
  },
  {
    "id" : 212,
    "value" : 2,
    "artist_id" : 30,
    "metric_id" : 13
  },
  {
    "id" : 213,
    "value" : 1,
    "artist_id" : 30,
    "metric_id" : 14
  },
  {
    "id" : 214,
    "value" : 1,
    "artist_id" : 30,
    "metric_id" : 17
  },
  {
    "id" : 215,
    "value" : 1,
    "artist_id" : 30,
    "metric_id" : 18
  },
  {
    "id" : 217,
    "value" : 3,
    "artist_id" : 31,
    "metric_id" : 2
  },
  {
    "id" : 218,
    "value" : 4,
    "artist_id" : 31,
    "metric_id" : 5
  },
  {
    "id" : 219,
    "value" : 2,
    "artist_id" : 31,
    "metric_id" : 11
  },
  {
    "id" : 220,
    "value" : 3,
    "artist_id" : 31,
    "metric_id" : 14
  },
  {
    "id" : 221,
    "value" : 2,
    "artist_id" : 31,
    "metric_id" : 15
  },
  {
    "id" : 222,
    "value" : 1,
    "artist_id" : 31,
    "metric_id" : 17
  },
  {
    "id" : 223,
    "value" : 2,
    "artist_id" : 31,
    "metric_id" : 34
  },
  {
    "id" : 226,
    "value" : 2,
    "artist_id" : 32,
    "metric_id" : 2
  },
  {
    "id" : 227,
    "value" : 4,
    "artist_id" : 32,
    "metric_id" : 5
  },
  {
    "id" : 228,
    "value" : 3,
    "artist_id" : 32,
    "metric_id" : 10
  },
  {
    "id" : 229,
    "value" : 2,
    "artist_id" : 32,
    "metric_id" : 11
  },
  {
    "id" : 230,
    "value" : 2,
    "artist_id" : 32,
    "metric_id" : 13
  },
  {
    "id" : 231,
    "value" : 1,
    "artist_id" : 32,
    "metric_id" : 15
  },
  {
    "id" : 232,
    "value" : 1,
    "artist_id" : 32,
    "metric_id" : 16
  },
  {
    "id" : 233,
    "value" : 1,
    "artist_id" : 32,
    "metric_id" : 18
  },
  {
    "id" : 234,
    "value" : 3,
    "artist_id" : 32,
    "metric_id" : 35
  },
  {
    "id" : 237,
    "value" : 1,
    "artist_id" : 32,
    "metric_id" : 6
  },
  {
    "id" : 238,
    "value" : 1,
    "artist_id" : 32,
    "metric_id" : 32
  },
  {
    "id" : 240,
    "value" : 2,
    "artist_id" : 33,
    "metric_id" : 2
  },
  {
    "id" : 241,
    "value" : 4,
    "artist_id" : 33,
    "metric_id" : 5
  },
  {
    "id" : 242,
    "value" : 4,
    "artist_id" : 33,
    "metric_id" : 10
  },
  {
    "id" : 243,
    "value" : 3,
    "artist_id" : 33,
    "metric_id" : 11
  },
  {
    "id" : 244,
    "value" : 2,
    "artist_id" : 33,
    "metric_id" : 13
  },
  {
    "id" : 245,
    "value" : 3,
    "artist_id" : 33,
    "metric_id" : 35
  },
  {
    "id" : 246,
    "value" : 1,
    "artist_id" : 33,
    "metric_id" : 18
  },
  {
    "id" : 248,
    "value" : 4,
    "artist_id" : 34,
    "metric_id" : 2
  },
  {
    "id" : 249,
    "value" : 2,
    "artist_id" : 34,
    "metric_id" : 7
  },
  {
    "id" : 250,
    "value" : 1,
    "artist_id" : 34,
    "metric_id" : 9
  },
  {
    "id" : 251,
    "value" : 3,
    "artist_id" : 34,
    "metric_id" : 14
  },
  {
    "id" : 252,
    "value" : 4,
    "artist_id" : 34,
    "metric_id" : 27
  },
  {
    "id" : 253,
    "value" : 1,
    "artist_id" : 34,
    "metric_id" : 18
  },
  {
    "id" : 254,
    "value" : 3,
    "artist_id" : 34,
    "metric_id" : 36
  },
  {
    "id" : 256,
    "value" : 3,
    "artist_id" : 35,
    "metric_id" : 4
  },
  {
    "id" : 257,
    "value" : 3,
    "artist_id" : 35,
    "metric_id" : 5
  },
  {
    "id" : 258,
    "value" : 5,
    "artist_id" : 35,
    "metric_id" : 10
  },
  {
    "id" : 259,
    "value" : 2,
    "artist_id" : 35,
    "metric_id" : 11
  },
  {
    "id" : 260,
    "value" : 2,
    "artist_id" : 35,
    "metric_id" : 15
  },
  {
    "id" : 261,
    "value" : 1,
    "artist_id" : 35,
    "metric_id" : 19
  },
  {
    "id" : 262,
    "value" : 5,
    "artist_id" : 35,
    "metric_id" : 24
  },
  {
    "id" : 264,
    "value" : 4,
    "artist_id" : 36,
    "metric_id" : 5
  },
  {
    "id" : 265,
    "value" : 1,
    "artist_id" : 36,
    "metric_id" : 3
  },
  {
    "id" : 266,
    "value" : 4,
    "artist_id" : 36,
    "metric_id" : 10
  },
  {
    "id" : 267,
    "value" : 3,
    "artist_id" : 36,
    "metric_id" : 11
  },
  {
    "id" : 268,
    "value" : 3,
    "artist_id" : 36,
    "metric_id" : 13
  },
  {
    "id" : 269,
    "value" : 1,
    "artist_id" : 36,
    "metric_id" : 17
  },
  {
    "id" : 270,
    "value" : 4,
    "artist_id" : 36,
    "metric_id" : 35
  },
  {
    "id" : 271,
    "value" : 3,
    "artist_id" : 36,
    "metric_id" : 37
  },
  {
    "id" : 274,
    "value" : 1,
    "artist_id" : 36,
    "metric_id" : 2
  },
  {
    "id" : 276,
    "value" : 1,
    "artist_id" : 37,
    "metric_id" : 2
  },
  {
    "id" : 277,
    "value" : 3,
    "artist_id" : 37,
    "metric_id" : 5
  },
  {
    "id" : 278,
    "value" : 4,
    "artist_id" : 37,
    "metric_id" : 10
  },
  {
    "id" : 279,
    "value" : 2,
    "artist_id" : 37,
    "metric_id" : 15
  },
  {
    "id" : 280,
    "value" : 1,
    "artist_id" : 37,
    "metric_id" : 16
  },
  {
    "id" : 281,
    "value" : 1,
    "artist_id" : 37,
    "metric_id" : 19
  },
  {
    "id" : 282,
    "value" : 3,
    "artist_id" : 37,
    "metric_id" : 24
  },
  {
    "id" : 283,
    "value" : 3,
    "artist_id" : 37,
    "metric_id" : 25
  },
  {
    "id" : 284,
    "value" : 2,
    "artist_id" : 37,
    "metric_id" : 32
  },
  {
    "id" : 286,
    "value" : 4,
    "artist_id" : 38,
    "metric_id" : 2
  },
  {
    "id" : 287,
    "value" : 2,
    "artist_id" : 38,
    "metric_id" : 5
  },
  {
    "id" : 288,
    "value" : 4,
    "artist_id" : 38,
    "metric_id" : 6
  },
  {
    "id" : 289,
    "value" : 2,
    "artist_id" : 38,
    "metric_id" : 8
  },
  {
    "id" : 290,
    "value" : 2,
    "artist_id" : 38,
    "metric_id" : 9
  },
  {
    "id" : 291,
    "value" : 3,
    "artist_id" : 38,
    "metric_id" : 12
  },
  {
    "id" : 292,
    "value" : 1,
    "artist_id" : 38,
    "metric_id" : 17
  },
  {
    "id" : 293,
    "value" : 4,
    "artist_id" : 38,
    "metric_id" : 37
  },
  {
    "id" : 294,
    "value" : 2,
    "artist_id" : 38,
    "metric_id" : 16
  },
  {
    "id" : 295,
    "value" : 1,
    "artist_id" : 38,
    "metric_id" : 32
  },
  {
    "id" : 297,
    "value" : 5,
    "artist_id" : 39,
    "metric_id" : 2
  },
  {
    "id" : 298,
    "value" : 4,
    "artist_id" : 39,
    "metric_id" : 6
  },
  {
    "id" : 299,
    "value" : 3,
    "artist_id" : 39,
    "metric_id" : 12
  },
  {
    "id" : 300,
    "value" : 1,
    "artist_id" : 39,
    "metric_id" : 18
  },
  {
    "id" : 301,
    "value" : 2,
    "artist_id" : 39,
    "metric_id" : 9
  },
  {
    "id" : 303,
    "value" : 5,
    "artist_id" : 40,
    "metric_id" : 2
  },
  {
    "id" : 304,
    "value" : 5,
    "artist_id" : 40,
    "metric_id" : 7
  },
  {
    "id" : 305,
    "value" : 3,
    "artist_id" : 40,
    "metric_id" : 12
  },
  {
    "id" : 306,
    "value" : 2,
    "artist_id" : 40,
    "metric_id" : 9
  },
  {
    "id" : 307,
    "value" : 1,
    "artist_id" : 40,
    "metric_id" : 18
  },
  {
    "id" : 308,
    "value" : 4,
    "artist_id" : 40,
    "metric_id" : 38
  },
  {
    "id" : 310,
    "value" : 5,
    "artist_id" : 41,
    "metric_id" : 2
  },
  {
    "id" : 311,
    "value" : 4,
    "artist_id" : 41,
    "metric_id" : 6
  },
  {
    "id" : 312,
    "value" : 2,
    "artist_id" : 41,
    "metric_id" : 5
  },
  {
    "id" : 313,
    "value" : 2,
    "artist_id" : 41,
    "metric_id" : 11
  },
  {
    "id" : 314,
    "value" : 3,
    "artist_id" : 41,
    "metric_id" : 12
  },
  {
    "id" : 315,
    "value" : 4,
    "artist_id" : 41,
    "metric_id" : 14
  },
  {
    "id" : 316,
    "value" : 1,
    "artist_id" : 41,
    "metric_id" : 17
  },
  {
    "id" : 317,
    "value" : 2,
    "artist_id" : 41,
    "metric_id" : 34
  },
  {
    "id" : 318,
    "value" : 4,
    "artist_id" : 41,
    "metric_id" : 38
  },
  {
    "id" : 320,
    "value" : 5,
    "artist_id" : 42,
    "metric_id" : 2
  },
  {
    "id" : 321,
    "value" : 4,
    "artist_id" : 42,
    "metric_id" : 6
  },
  {
    "id" : 322,
    "value" : 2,
    "artist_id" : 42,
    "metric_id" : 5
  },
  {
    "id" : 323,
    "value" : 4,
    "artist_id" : 42,
    "metric_id" : 14
  },
  {
    "id" : 324,
    "value" : 1,
    "artist_id" : 42,
    "metric_id" : 18
  },
  {
    "id" : 325,
    "value" : 5,
    "artist_id" : 42,
    "metric_id" : 38
  },
  {
    "id" : 327,
    "value" : 3,
    "artist_id" : 43,
    "metric_id" : 2
  },
  {
    "id" : 328,
    "value" : 5,
    "artist_id" : 43,
    "metric_id" : 5
  },
  {
    "id" : 329,
    "value" : 1,
    "artist_id" : 43,
    "metric_id" : 10
  },
  {
    "id" : 330,
    "value" : 2,
    "artist_id" : 43,
    "metric_id" : 11
  },
  {
    "id" : 331,
    "value" : 3,
    "artist_id" : 43,
    "metric_id" : 14
  },
  {
    "id" : 332,
    "value" : 1,
    "artist_id" : 43,
    "metric_id" : 16
  },
  {
    "id" : 333,
    "value" : 1,
    "artist_id" : 43,
    "metric_id" : 17
  },
  {
    "id" : 334,
    "value" : 1,
    "artist_id" : 43,
    "metric_id" : 15
  },
  {
    "id" : 336,
    "value" : 4,
    "artist_id" : 44,
    "metric_id" : 3
  },
  {
    "id" : 337,
    "value" : 2,
    "artist_id" : 44,
    "metric_id" : 11
  },
  {
    "id" : 338,
    "value" : 3,
    "artist_id" : 44,
    "metric_id" : 13
  },
  {
    "id" : 339,
    "value" : 2,
    "artist_id" : 44,
    "metric_id" : 14
  },
  {
    "id" : 340,
    "value" : 1,
    "artist_id" : 44,
    "metric_id" : 23
  },
  {
    "id" : 341,
    "value" : 2,
    "artist_id" : 44,
    "metric_id" : 30
  },
  {
    "id" : 342,
    "value" : 3,
    "artist_id" : 44,
    "metric_id" : 21
  },
  {
    "id" : 345,
    "value" : 3,
    "artist_id" : 45,
    "metric_id" : 2
  },
  {
    "id" : 346,
    "value" : 2,
    "artist_id" : 45,
    "metric_id" : 10
  },
  {
    "id" : 347,
    "value" : 4,
    "artist_id" : 45,
    "metric_id" : 11
  },
  {
    "id" : 348,
    "value" : 3,
    "artist_id" : 45,
    "metric_id" : 14
  },
  {
    "id" : 349,
    "value" : 1,
    "artist_id" : 45,
    "metric_id" : 13
  },
  {
    "id" : 350,
    "value" : 1,
    "artist_id" : 45,
    "metric_id" : 17
  },
  {
    "id" : 351,
    "value" : 4,
    "artist_id" : 45,
    "metric_id" : 34
  },
  {
    "id" : 353,
    "value" : 5,
    "artist_id" : 46,
    "metric_id" : 39
  },
  {
    "id" : 354,
    "value" : 4,
    "artist_id" : 46,
    "metric_id" : 29
  },
  {
    "id" : 355,
    "value" : 1,
    "artist_id" : 46,
    "metric_id" : 19
  },
  {
    "id" : 356,
    "value" : 5,
    "artist_id" : 46,
    "metric_id" : 14
  },
  {
    "id" : 357,
    "value" : 3,
    "artist_id" : 46,
    "metric_id" : 38
  },
  {
    "id" : 359,
    "value" : 3,
    "artist_id" : 47,
    "metric_id" : 2
  },
  {
    "id" : 360,
    "value" : 5,
    "artist_id" : 47,
    "metric_id" : 25
  },
  {
    "id" : 361,
    "value" : 3,
    "artist_id" : 47,
    "metric_id" : 15
  },
  {
    "id" : 362,
    "value" : 1,
    "artist_id" : 47,
    "metric_id" : 18
  },
  {
    "id" : 363,
    "value" : 2,
    "artist_id" : 47,
    "metric_id" : 11
  },
  {
    "id" : 364,
    "value" : 3,
    "artist_id" : 47,
    "metric_id" : 14
  },
  {
    "id" : 366,
    "value" : 4,
    "artist_id" : 48,
    "metric_id" : 2
  },
  {
    "id" : 367,
    "value" : 5,
    "artist_id" : 48,
    "metric_id" : 7
  },
  {
    "id" : 368,
    "value" : 3,
    "artist_id" : 48,
    "metric_id" : 9
  },
  {
    "id" : 369,
    "value" : 3,
    "artist_id" : 48,
    "metric_id" : 11
  },
  {
    "id" : 370,
    "value" : 3,
    "artist_id" : 48,
    "metric_id" : 12
  },
  {
    "id" : 371,
    "value" : 3,
    "artist_id" : 48,
    "metric_id" : 14
  },
  {
    "id" : 372,
    "value" : 2,
    "artist_id" : 48,
    "metric_id" : 13
  },
  {
    "id" : 373,
    "value" : 1,
    "artist_id" : 48,
    "metric_id" : 10
  },
  {
    "id" : 374,
    "value" : 1,
    "artist_id" : 48,
    "metric_id" : 18
  },
  {
    "id" : 376,
    "value" : 5,
    "artist_id" : 49,
    "metric_id" : 2
  },
  {
    "id" : 377,
    "value" : 4,
    "artist_id" : 49,
    "metric_id" : 7
  },
  {
    "id" : 378,
    "value" : 2,
    "artist_id" : 49,
    "metric_id" : 6
  },
  {
    "id" : 379,
    "value" : 3,
    "artist_id" : 49,
    "metric_id" : 5
  },
  {
    "id" : 380,
    "value" : 4,
    "artist_id" : 49,
    "metric_id" : 9
  },
  {
    "id" : 381,
    "value" : 3,
    "artist_id" : 49,
    "metric_id" : 11
  },
  {
    "id" : 382,
    "value" : 3,
    "artist_id" : 49,
    "metric_id" : 13
  },
  {
    "id" : 383,
    "value" : 1,
    "artist_id" : 49,
    "metric_id" : 18
  },
  {
    "id" : 385,
    "value" : 3,
    "artist_id" : 50,
    "metric_id" : 2
  },
  {
    "id" : 386,
    "value" : 2,
    "artist_id" : 50,
    "metric_id" : 11
  },
  {
    "id" : 387,
    "value" : 1,
    "artist_id" : 50,
    "metric_id" : 34
  },
  {
    "id" : 388,
    "value" : 1,
    "artist_id" : 50,
    "metric_id" : 18
  },
  {
    "id" : 389,
    "value" : 3,
    "artist_id" : 50,
    "metric_id" : 13
  },
  {
    "id" : 391,
    "value" : 4,
    "artist_id" : 51,
    "metric_id" : 2
  },
  {
    "id" : 392,
    "value" : 3,
    "artist_id" : 51,
    "metric_id" : 12
  },
  {
    "id" : 393,
    "value" : 2,
    "artist_id" : 51,
    "metric_id" : 13
  },
  {
    "id" : 394,
    "value" : 4,
    "artist_id" : 51,
    "metric_id" : 15
  },
  {
    "id" : 395,
    "value" : 4,
    "artist_id" : 51,
    "metric_id" : 16
  },
  {
    "id" : 396,
    "value" : 1,
    "artist_id" : 51,
    "metric_id" : 17
  },
  {
    "id" : 397,
    "value" : 1,
    "artist_id" : 51,
    "metric_id" : 18
  },
  {
    "id" : 398,
    "value" : 4,
    "artist_id" : 51,
    "metric_id" : 9
  },
  {
    "id" : 400,
    "value" : 3,
    "artist_id" : 52,
    "metric_id" : 2
  },
  {
    "id" : 401,
    "value" : 4,
    "artist_id" : 52,
    "metric_id" : 5
  },
  {
    "id" : 402,
    "value" : 5,
    "artist_id" : 52,
    "metric_id" : 33
  },
  {
    "id" : 403,
    "value" : 3,
    "artist_id" : 52,
    "metric_id" : 13
  },
  {
    "id" : 404,
    "value" : 5,
    "artist_id" : 52,
    "metric_id" : 10
  },
  {
    "id" : 405,
    "value" : 4,
    "artist_id" : 52,
    "metric_id" : 11
  },
  {
    "id" : 406,
    "value" : 1,
    "artist_id" : 52,
    "metric_id" : 17
  },
  {
    "id" : 407,
    "value" : 1,
    "artist_id" : 52,
    "metric_id" : 18
  },
  {
    "id" : 409,
    "value" : 3,
    "artist_id" : 53,
    "metric_id" : 2
  },
  {
    "id" : 410,
    "value" : 3,
    "artist_id" : 53,
    "metric_id" : 34
  },
  {
    "id" : 411,
    "value" : 3,
    "artist_id" : 53,
    "metric_id" : 11
  },
  {
    "id" : 412,
    "value" : 4,
    "artist_id" : 53,
    "metric_id" : 14
  },
  {
    "id" : 413,
    "value" : 1,
    "artist_id" : 53,
    "metric_id" : 17
  },
  {
    "id" : 415,
    "value" : 5,
    "artist_id" : 54,
    "metric_id" : 3
  },
  {
    "id" : 416,
    "value" : 2,
    "artist_id" : 54,
    "metric_id" : 22
  },
  {
    "id" : 417,
    "value" : 4,
    "artist_id" : 54,
    "metric_id" : 21
  },
  {
    "id" : 419,
    "value" : 4,
    "artist_id" : 54,
    "metric_id" : 11
  },
  {
    "id" : 420,
    "value" : 4,
    "artist_id" : 54,
    "metric_id" : 13
  },
  {
    "id" : 421,
    "value" : 2,
    "artist_id" : 54,
    "metric_id" : 14
  },
  {
    "id" : 422,
    "value" : 1,
    "artist_id" : 54,
    "metric_id" : 19
  },
  {
    "id" : 423,
    "value" : 3,
    "artist_id" : 54,
    "metric_id" : 15
  },
  {
    "id" : 425,
    "value" : 4,
    "artist_id" : 55,
    "metric_id" : 2
  },
  {
    "id" : 426,
    "value" : 3,
    "artist_id" : 55,
    "metric_id" : 5
  },
  {
    "id" : 427,
    "value" : 2,
    "artist_id" : 55,
    "metric_id" : 11
  },
  {
    "id" : 428,
    "value" : 4,
    "artist_id" : 55,
    "metric_id" : 14
  },
  {
    "id" : 429,
    "value" : 1,
    "artist_id" : 55,
    "metric_id" : 34
  },
  {
    "id" : 431,
    "value" : 5,
    "artist_id" : 56,
    "metric_id" : 3
  },
  {
    "id" : 432,
    "value" : 5,
    "artist_id" : 56,
    "metric_id" : 15
  },
  {
    "id" : 433,
    "value" : 5,
    "artist_id" : 56,
    "metric_id" : 16
  },
  {
    "id" : 434,
    "value" : 3,
    "artist_id" : 56,
    "metric_id" : 21
  },
  {
    "id" : 435,
    "value" : 3,
    "artist_id" : 56,
    "metric_id" : 22
  },
  {
    "id" : 437,
    "value" : 5,
    "artist_id" : 58,
    "metric_id" : 2
  },
  {
    "id" : 438,
    "value" : 4,
    "artist_id" : 58,
    "metric_id" : 8
  },
  {
    "id" : 439,
    "value" : 2,
    "artist_id" : 58,
    "metric_id" : 7
  },
  {
    "id" : 440,
    "value" : 4,
    "artist_id" : 58,
    "metric_id" : 9
  },
  {
    "id" : 441,
    "value" : 5,
    "artist_id" : 58,
    "metric_id" : 12
  },
  {
    "id" : 442,
    "value" : 3,
    "artist_id" : 58,
    "metric_id" : 38
  },
  {
    "id" : 445,
    "value" : 5,
    "artist_id" : 59,
    "metric_id" : 29
  },
  {
    "id" : 446,
    "value" : 2,
    "artist_id" : 59,
    "metric_id" : 34
  },
  {
    "id" : 447,
    "value" : 4,
    "artist_id" : 59,
    "metric_id" : 14
  },
  {
    "id" : 448,
    "value" : 1,
    "artist_id" : 59,
    "metric_id" : 18
  },
  {
    "id" : 450,
    "value" : 4,
    "artist_id" : 60,
    "metric_id" : 2
  },
  {
    "id" : 451,
    "value" : 4,
    "artist_id" : 60,
    "metric_id" : 34
  },
  {
    "id" : 452,
    "value" : 2,
    "artist_id" : 60,
    "metric_id" : 11
  },
  {
    "id" : 453,
    "value" : 2,
    "artist_id" : 60,
    "metric_id" : 13
  },
  {
    "id" : 454,
    "value" : 4,
    "artist_id" : 60,
    "metric_id" : 14
  },
  {
    "id" : 456,
    "value" : 3,
    "artist_id" : 61,
    "metric_id" : 2
  },
  {
    "id" : 457,
    "value" : 3,
    "artist_id" : 61,
    "metric_id" : 13
  },
  {
    "id" : 458,
    "value" : 3,
    "artist_id" : 61,
    "metric_id" : 14
  },
  {
    "id" : 459,
    "value" : 1,
    "artist_id" : 61,
    "metric_id" : 18
  },
  {
    "id" : 460,
    "value" : 3,
    "artist_id" : 61,
    "metric_id" : 34
  },
  {
    "id" : 461,
    "value" : 5,
    "artist_id" : 61,
    "metric_id" : 40
  },
  {
    "id" : 463,
    "value" : 2,
    "artist_id" : 62,
    "metric_id" : 2
  },
  {
    "id" : 464,
    "value" : 4,
    "artist_id" : 62,
    "metric_id" : 10
  },
  {
    "id" : 465,
    "value" : 4,
    "artist_id" : 62,
    "metric_id" : 11
  },
  {
    "id" : 466,
    "value" : 5,
    "artist_id" : 62,
    "metric_id" : 13
  },
  {
    "id" : 467,
    "value" : 1,
    "artist_id" : 62,
    "metric_id" : 16
  },
  {
    "id" : 468,
    "value" : 4,
    "artist_id" : 62,
    "metric_id" : 35
  },
  {
    "id" : 469,
    "value" : 3,
    "artist_id" : 62,
    "metric_id" : 34
  },
  {
    "id" : 471,
    "value" : 4,
    "artist_id" : 63,
    "metric_id" : 2
  },
  {
    "id" : 472,
    "value" : 3,
    "artist_id" : 63,
    "metric_id" : 35
  },
  {
    "id" : 473,
    "value" : 1,
    "artist_id" : 63,
    "metric_id" : 17
  },
  {
    "id" : 474,
    "value" : 3,
    "artist_id" : 63,
    "metric_id" : 10
  },
  {
    "id" : 475,
    "value" : 4,
    "artist_id" : 63,
    "metric_id" : 13
  },
  {
    "id" : 477,
    "value" : 2,
    "artist_id" : 64,
    "metric_id" : 2
  },
  {
    "id" : 478,
    "value" : 3,
    "artist_id" : 64,
    "metric_id" : 32
  },
  {
    "id" : 479,
    "value" : 2,
    "artist_id" : 64,
    "metric_id" : 35
  },
  {
    "id" : 480,
    "value" : 3,
    "artist_id" : 64,
    "metric_id" : 10
  },
  {
    "id" : 481,
    "value" : 3,
    "artist_id" : 64,
    "metric_id" : 11
  },
  {
    "id" : 482,
    "value" : 3,
    "artist_id" : 64,
    "metric_id" : 13
  },
  {
    "id" : 483,
    "value" : 2,
    "artist_id" : 64,
    "metric_id" : 16
  },
  {
    "id" : 485,
    "value" : 3,
    "artist_id" : 65,
    "metric_id" : 3
  },
  {
    "id" : 486,
    "value" : 3,
    "artist_id" : 65,
    "metric_id" : 38
  },
  {
    "id" : 487,
    "value" : 5,
    "artist_id" : 65,
    "metric_id" : 26
  },
  {
    "id" : 488,
    "value" : 3,
    "artist_id" : 65,
    "metric_id" : 31
  },
  {
    "id" : 489,
    "value" : 4,
    "artist_id" : 65,
    "metric_id" : 14
  },
  {
    "id" : 491,
    "value" : 4,
    "artist_id" : 66,
    "metric_id" : 2
  },
  {
    "id" : 492,
    "value" : 4,
    "artist_id" : 66,
    "metric_id" : 41
  },
  {
    "id" : 493,
    "value" : 2,
    "artist_id" : 66,
    "metric_id" : 8
  },
  {
    "id" : 495,
    "value" : 4,
    "artist_id" : 66,
    "metric_id" : 13
  },
  {
    "id" : 496,
    "value" : 1,
    "artist_id" : 66,
    "metric_id" : 32
  },
  {
    "id" : 497,
    "value" : 1,
    "artist_id" : 66,
    "metric_id" : 16
  },
  {
    "id" : 498,
    "value" : 2,
    "artist_id" : 66,
    "metric_id" : 15
  },
  {
    "id" : 499,
    "value" : 1,
    "artist_id" : 66,
    "metric_id" : 18
  },
  {
    "id" : 502,
    "value" : 4,
    "artist_id" : 67,
    "metric_id" : 14
  },
  {
    "id" : 503,
    "value" : 1,
    "artist_id" : 67,
    "metric_id" : 18
  },
  {
    "id" : 504,
    "value" : 5,
    "artist_id" : 67,
    "metric_id" : 29
  },
  {
    "id" : 505,
    "value" : 1,
    "artist_id" : 67,
    "metric_id" : 39
  },
  {
    "id" : 506,
    "value" : 3,
    "artist_id" : 67,
    "metric_id" : 34
  },
  {
    "id" : 508,
    "value" : 4,
    "artist_id" : 68,
    "metric_id" : 14
  },
  {
    "id" : 509,
    "value" : 4,
    "artist_id" : 68,
    "metric_id" : 29
  },
  {
    "id" : 510,
    "value" : 4,
    "artist_id" : 68,
    "metric_id" : 34
  },
  {
    "id" : 511,
    "value" : 1,
    "artist_id" : 68,
    "metric_id" : 17
  },
  {
    "id" : 513,
    "value" : 5,
    "artist_id" : 69,
    "metric_id" : 3
  },
  {
    "id" : 514,
    "value" : 3,
    "artist_id" : 69,
    "metric_id" : 14
  },
  {
    "id" : 515,
    "value" : 2,
    "artist_id" : 69,
    "metric_id" : 15
  },
  {
    "id" : 516,
    "value" : 1,
    "artist_id" : 69,
    "metric_id" : 16
  },
  {
    "id" : 519,
    "value" : 1,
    "artist_id" : 69,
    "metric_id" : 38
  },
  {
    "id" : 520,
    "value" : 2,
    "artist_id" : 69,
    "metric_id" : 31
  },
  {
    "id" : 522,
    "value" : 3,
    "artist_id" : 70,
    "metric_id" : 2
  },
  {
    "id" : 523,
    "value" : 5,
    "artist_id" : 70,
    "metric_id" : 5
  },
  {
    "id" : 524,
    "value" : 3,
    "artist_id" : 70,
    "metric_id" : 14
  },
  {
    "id" : 525,
    "value" : 1,
    "artist_id" : 70,
    "metric_id" : 13
  },
  {
    "id" : 526,
    "value" : 3,
    "artist_id" : 70,
    "metric_id" : 15
  },
  {
    "id" : 527,
    "value" : 2,
    "artist_id" : 70,
    "metric_id" : 16
  },
  {
    "id" : 528,
    "value" : 1,
    "artist_id" : 70,
    "metric_id" : 18
  },
  {
    "id" : 530,
    "value" : 3,
    "artist_id" : 71,
    "metric_id" : 3
  },
  {
    "id" : 531,
    "value" : 3,
    "artist_id" : 71,
    "metric_id" : 11
  },
  {
    "id" : 532,
    "value" : 1,
    "artist_id" : 71,
    "metric_id" : 13
  },
  {
    "id" : 533,
    "value" : 4,
    "artist_id" : 71,
    "metric_id" : 14
  },
  {
    "id" : 534,
    "value" : 4,
    "artist_id" : 71,
    "metric_id" : 30
  },
  {
    "id" : 535,
    "value" : 1,
    "artist_id" : 71,
    "metric_id" : 23
  },
  {
    "id" : 536,
    "value" : 1,
    "artist_id" : 71,
    "metric_id" : 18
  },
  {
    "id" : 537,
    "value" : 5,
    "artist_id" : 72,
    "metric_id" : 4
  },
  {
    "id" : 538,
    "value" : 3,
    "artist_id" : 72,
    "metric_id" : 10
  },
  {
    "id" : 539,
    "value" : 4,
    "artist_id" : 72,
    "metric_id" : 15
  },
  {
    "id" : 540,
    "value" : 1,
    "artist_id" : 72,
    "metric_id" : 13
  },
  {
    "id" : 543,
    "value" : 5,
    "artist_id" : 73,
    "metric_id" : 2
  },
  {
    "id" : 544,
    "value" : 4,
    "artist_id" : 73,
    "metric_id" : 7
  },
  {
    "id" : 545,
    "value" : 2,
    "artist_id" : 73,
    "metric_id" : 13
  },
  {
    "id" : 546,
    "value" : 2,
    "artist_id" : 73,
    "metric_id" : 14
  },
  {
    "id" : 547,
    "value" : 3,
    "artist_id" : 73,
    "metric_id" : 12
  },
  {
    "id" : 548,
    "value" : 1,
    "artist_id" : 73,
    "metric_id" : 18
  },
  {
    "id" : 549,
    "value" : 3,
    "artist_id" : 74,
    "metric_id" : 2
  },
  {
    "id" : 550,
    "value" : 5,
    "artist_id" : 74,
    "metric_id" : 5
  },
  {
    "id" : 551,
    "value" : 1,
    "artist_id" : 74,
    "metric_id" : 9
  },
  {
    "id" : 552,
    "value" : 3,
    "artist_id" : 74,
    "metric_id" : 11
  },
  {
    "id" : 553,
    "value" : 4,
    "artist_id" : 74,
    "metric_id" : 14
  },
  {
    "id" : 554,
    "value" : 2,
    "artist_id" : 74,
    "metric_id" : 15
  },
  {
    "id" : 555,
    "value" : 1,
    "artist_id" : 74,
    "metric_id" : 18
  },
  {
    "id" : 557,
    "value" : 4,
    "artist_id" : 75,
    "metric_id" : 2
  },
  {
    "id" : 558,
    "value" : 2,
    "artist_id" : 75,
    "metric_id" : 11
  },
  {
    "id" : 559,
    "value" : 3,
    "artist_id" : 75,
    "metric_id" : 14
  },
  {
    "id" : 560,
    "value" : 2,
    "artist_id" : 75,
    "metric_id" : 13
  },
  {
    "id" : 561,
    "value" : 1,
    "artist_id" : 75,
    "metric_id" : 17
  },
  {
    "id" : 562,
    "value" : 2,
    "artist_id" : 75,
    "metric_id" : 33
  },
  {
    "id" : 563,
    "value" : 3,
    "artist_id" : 75,
    "metric_id" : 34
  },
  {
    "id" : 565,
    "value" : 4,
    "artist_id" : 76,
    "metric_id" : 3
  },
  {
    "id" : 566,
    "value" : 4,
    "artist_id" : 76,
    "metric_id" : 10
  },
  {
    "id" : 567,
    "value" : 2,
    "artist_id" : 76,
    "metric_id" : 14
  },
  {
    "id" : 568,
    "value" : 1,
    "artist_id" : 76,
    "metric_id" : 34
  },
  {
    "id" : 569,
    "value" : 4,
    "artist_id" : 76,
    "metric_id" : 37
  },
  {
    "id" : 571,
    "value" : 4,
    "artist_id" : 77,
    "metric_id" : 2
  },
  {
    "id" : 572,
    "value" : 2,
    "artist_id" : 77,
    "metric_id" : 5
  },
  {
    "id" : 573,
    "value" : 3,
    "artist_id" : 77,
    "metric_id" : 7
  },
  {
    "id" : 574,
    "value" : 2,
    "artist_id" : 77,
    "metric_id" : 9
  },
  {
    "id" : 575,
    "value" : 3,
    "artist_id" : 77,
    "metric_id" : 11
  },
  {
    "id" : 576,
    "value" : 2,
    "artist_id" : 77,
    "metric_id" : 12
  },
  {
    "id" : 577,
    "value" : 2,
    "artist_id" : 77,
    "metric_id" : 13
  },
  {
    "id" : 578,
    "value" : 1,
    "artist_id" : 77,
    "metric_id" : 18
  },
  {
    "id" : 580,
    "value" : 3,
    "artist_id" : 78,
    "metric_id" : 2
  },
  {
    "id" : 581,
    "value" : 2,
    "artist_id" : 78,
    "metric_id" : 5
  },
  {
    "id" : 582,
    "value" : 3,
    "artist_id" : 78,
    "metric_id" : 27
  },
  {
    "id" : 583,
    "value" : 2,
    "artist_id" : 78,
    "metric_id" : 35
  },
  {
    "id" : 584,
    "value" : 1,
    "artist_id" : 78,
    "metric_id" : 18
  },
  {
    "id" : 585,
    "value" : 2,
    "artist_id" : 78,
    "metric_id" : 11
  },
  {
    "id" : 586,
    "value" : 4,
    "artist_id" : 78,
    "metric_id" : 14
  },
  {
    "id" : 587,
    "value" : 3,
    "artist_id" : 78,
    "metric_id" : 13
  },
  {
    "id" : 589,
    "value" : 5,
    "artist_id" : 79,
    "metric_id" : 2
  },
  {
    "id" : 590,
    "value" : 2,
    "artist_id" : 79,
    "metric_id" : 5
  },
  {
    "id" : 591,
    "value" : 1,
    "artist_id" : 79,
    "metric_id" : 9
  },
  {
    "id" : 592,
    "value" : 2,
    "artist_id" : 79,
    "metric_id" : 13
  },
  {
    "id" : 593,
    "value" : 1,
    "artist_id" : 79,
    "metric_id" : 15
  },
  {
    "id" : 594,
    "value" : 1,
    "artist_id" : 79,
    "metric_id" : 18
  },
  {
    "id" : 595,
    "value" : 1,
    "artist_id" : 79,
    "metric_id" : 17
  },
  {
    "id" : 596,
    "value" : 4,
    "artist_id" : 79,
    "metric_id" : 25
  },
  {
    "id" : 598,
    "value" : 5,
    "artist_id" : 80,
    "metric_id" : 2
  },
  {
    "id" : 599,
    "value" : 1,
    "artist_id" : 80,
    "metric_id" : 6
  },
  {
    "id" : 600,
    "value" : 3,
    "artist_id" : 80,
    "metric_id" : 12
  },
  {
    "id" : 601,
    "value" : 3,
    "artist_id" : 80,
    "metric_id" : 14
  },
  {
    "id" : 602,
    "value" : 1,
    "artist_id" : 80,
    "metric_id" : 18
  },
  {
    "id" : 603,
    "value" : 1,
    "artist_id" : 80,
    "metric_id" : 34
  },
  {
    "id" : 605,
    "value" : 1,
    "artist_id" : 81,
    "metric_id" : 2
  },
  {
    "id" : 606,
    "value" : 4,
    "artist_id" : 81,
    "metric_id" : 11
  },
  {
    "id" : 607,
    "value" : 3,
    "artist_id" : 81,
    "metric_id" : 10
  },
  {
    "id" : 608,
    "value" : 5,
    "artist_id" : 81,
    "metric_id" : 13
  },
  {
    "id" : 609,
    "value" : 1,
    "artist_id" : 81,
    "metric_id" : 18
  },
  {
    "id" : 610,
    "value" : 1,
    "artist_id" : 81,
    "metric_id" : 27
  },
  {
    "id" : 611,
    "value" : 2,
    "artist_id" : 81,
    "metric_id" : 34
  },
  {
    "id" : 613,
    "value" : 2,
    "artist_id" : 82,
    "metric_id" : 2
  },
  {
    "id" : 614,
    "value" : 2,
    "artist_id" : 82,
    "metric_id" : 5
  },
  {
    "id" : 615,
    "value" : 4,
    "artist_id" : 82,
    "metric_id" : 10
  },
  {
    "id" : 616,
    "value" : 3,
    "artist_id" : 82,
    "metric_id" : 11
  },
  {
    "id" : 617,
    "value" : 1,
    "artist_id" : 82,
    "metric_id" : 17
  },
  {
    "id" : 618,
    "value" : 4,
    "artist_id" : 82,
    "metric_id" : 25
  },
  {
    "id" : 620,
    "value" : 2,
    "artist_id" : 83,
    "metric_id" : 2
  },
  {
    "id" : 621,
    "value" : 1,
    "artist_id" : 83,
    "metric_id" : 5
  },
  {
    "id" : 622,
    "value" : 2,
    "artist_id" : 83,
    "metric_id" : 6
  },
  {
    "id" : 623,
    "value" : 2,
    "artist_id" : 83,
    "metric_id" : 12
  },
  {
    "id" : 624,
    "value" : 3,
    "artist_id" : 83,
    "metric_id" : 14
  },
  {
    "id" : 625,
    "value" : 1,
    "artist_id" : 83,
    "metric_id" : 18
  },
  {
    "id" : 626,
    "value" : 3,
    "artist_id" : 83,
    "metric_id" : 37
  },
  {
    "id" : 627,
    "value" : 2,
    "artist_id" : 83,
    "metric_id" : 42
  },
  {
    "id" : 629,
    "value" : 3,
    "artist_id" : 84,
    "metric_id" : 3
  },
  {
    "id" : 630,
    "value" : 5,
    "artist_id" : 84,
    "metric_id" : 14
  },
  {
    "id" : 631,
    "value" : 2,
    "artist_id" : 84,
    "metric_id" : 15
  },
  {
    "id" : 632,
    "value" : 5,
    "artist_id" : 84,
    "metric_id" : 26
  },
  {
    "id" : 633,
    "value" : 3,
    "artist_id" : 84,
    "metric_id" : 31
  },
  {
    "id" : 635,
    "value" : 2,
    "artist_id" : 85,
    "metric_id" : 2
  },
  {
    "id" : 636,
    "value" : 3,
    "artist_id" : 85,
    "metric_id" : 5
  },
  {
    "id" : 637,
    "value" : 3,
    "artist_id" : 85,
    "metric_id" : 10
  },
  {
    "id" : 638,
    "value" : 4,
    "artist_id" : 85,
    "metric_id" : 13
  },
  {
    "id" : 639,
    "value" : 4,
    "artist_id" : 85,
    "metric_id" : 9
  },
  {
    "id" : 640,
    "value" : 1,
    "artist_id" : 85,
    "metric_id" : 17
  },
  {
    "id" : 641,
    "value" : 5,
    "artist_id" : 85,
    "metric_id" : 33
  },
  {
    "id" : 643,
    "value" : 5,
    "artist_id" : 86,
    "metric_id" : 2
  },
  {
    "id" : 644,
    "value" : 2,
    "artist_id" : 86,
    "metric_id" : 11
  },
  {
    "id" : 645,
    "value" : 3,
    "artist_id" : 86,
    "metric_id" : 12
  },
  {
    "id" : 646,
    "value" : 4,
    "artist_id" : 86,
    "metric_id" : 14
  },
  {
    "id" : 647,
    "value" : 1,
    "artist_id" : 86,
    "metric_id" : 17
  },
  {
    "id" : 648,
    "value" : 3,
    "artist_id" : 86,
    "metric_id" : 28
  },
  {
    "id" : 650,
    "value" : 3,
    "artist_id" : 85,
    "metric_id" : 11
  },
  {
    "id" : 651,
    "value" : 5,
    "artist_id" : 87,
    "metric_id" : 3
  },
  {
    "id" : 652,
    "value" : 3,
    "artist_id" : 87,
    "metric_id" : 21
  },
  {
    "id" : 653,
    "value" : 2,
    "artist_id" : 87,
    "metric_id" : 20
  },
  {
    "id" : 655,
    "value" : 5,
    "artist_id" : 88,
    "metric_id" : 3
  },
  {
    "id" : 656,
    "value" : 4,
    "artist_id" : 88,
    "metric_id" : 21
  },
  {
    "id" : 658,
    "value" : 5,
    "artist_id" : 89,
    "metric_id" : 3
  },
  {
    "id" : 659,
    "value" : 2,
    "artist_id" : 89,
    "metric_id" : 22
  },
  {
    "id" : 660,
    "value" : 4,
    "artist_id" : 89,
    "metric_id" : 21
  },
  {
    "id" : 661,
    "value" : 4,
    "artist_id" : 89,
    "metric_id" : 15
  },
  {
    "id" : 662,
    "value" : 3,
    "artist_id" : 89,
    "metric_id" : 13
  },
  {
    "id" : 664,
    "value" : 5,
    "artist_id" : 90,
    "metric_id" : 3
  },
  {
    "id" : 665,
    "value" : 2,
    "artist_id" : 90,
    "metric_id" : 10
  },
  {
    "id" : 666,
    "value" : 2,
    "artist_id" : 90,
    "metric_id" : 13
  },
  {
    "id" : 667,
    "value" : 3,
    "artist_id" : 90,
    "metric_id" : 15
  },
  {
    "id" : 668,
    "value" : 2,
    "artist_id" : 90,
    "metric_id" : 16
  },
  {
    "id" : 669,
    "value" : 4,
    "artist_id" : 90,
    "metric_id" : 21
  },
  {
    "id" : 670,
    "value" : 2,
    "artist_id" : 90,
    "metric_id" : 22
  },
  {
    "id" : 672,
    "value" : 3,
    "artist_id" : 91,
    "metric_id" : 2
  },
  {
    "id" : 673,
    "value" : 4,
    "artist_id" : 91,
    "metric_id" : 13
  },
  {
    "id" : 674,
    "value" : 2,
    "artist_id" : 91,
    "metric_id" : 14
  },
  {
    "id" : 675,
    "value" : 1,
    "artist_id" : 91,
    "metric_id" : 18
  },
  {
    "id" : 676,
    "value" : 2,
    "artist_id" : 91,
    "metric_id" : 34
  },
  {
    "id" : 678,
    "value" : 2,
    "artist_id" : 92,
    "metric_id" : 2
  },
  {
    "id" : 679,
    "value" : 3,
    "artist_id" : 92,
    "metric_id" : 5
  },
  {
    "id" : 680,
    "value" : 4,
    "artist_id" : 92,
    "metric_id" : 10
  },
  {
    "id" : 681,
    "value" : 4,
    "artist_id" : 92,
    "metric_id" : 11
  },
  {
    "id" : 682,
    "value" : 3,
    "artist_id" : 92,
    "metric_id" : 13
  },
  {
    "id" : 683,
    "value" : 4,
    "artist_id" : 92,
    "metric_id" : 35
  },
  {
    "id" : 684,
    "value" : 1,
    "artist_id" : 92,
    "metric_id" : 18
  },
  {
    "id" : 686,
    "value" : 2,
    "artist_id" : 93,
    "metric_id" : 2
  },
  {
    "id" : 687,
    "value" : 4,
    "artist_id" : 93,
    "metric_id" : 5
  },
  {
    "id" : 688,
    "value" : 2,
    "artist_id" : 93,
    "metric_id" : 10
  },
  {
    "id" : 689,
    "value" : 2,
    "artist_id" : 93,
    "metric_id" : 11
  },
  {
    "id" : 690,
    "value" : 3,
    "artist_id" : 93,
    "metric_id" : 13
  },
  {
    "id" : 691,
    "value" : 1,
    "artist_id" : 93,
    "metric_id" : 14
  },
  {
    "id" : 692,
    "value" : 1,
    "artist_id" : 93,
    "metric_id" : 18
  },
  {
    "id" : 693,
    "value" : 2,
    "artist_id" : 93,
    "metric_id" : 27
  },
  {
    "id" : 694,
    "value" : 3,
    "artist_id" : 93,
    "metric_id" : 35
  },
  {
    "id" : 696,
    "value" : 4,
    "artist_id" : 94,
    "metric_id" : 2
  },
  {
    "id" : 697,
    "value" : 3,
    "artist_id" : 94,
    "metric_id" : 11
  },
  {
    "id" : 698,
    "value" : 2,
    "artist_id" : 94,
    "metric_id" : 13
  },
  {
    "id" : 699,
    "value" : 2,
    "artist_id" : 94,
    "metric_id" : 14
  },
  {
    "id" : 700,
    "value" : 2,
    "artist_id" : 94,
    "metric_id" : 27
  },
  {
    "id" : 702,
    "value" : 5,
    "artist_id" : 95,
    "metric_id" : 2
  },
  {
    "id" : 703,
    "value" : 2,
    "artist_id" : 95,
    "metric_id" : 6
  },
  {
    "id" : 704,
    "value" : 3,
    "artist_id" : 95,
    "metric_id" : 7
  },
  {
    "id" : 705,
    "value" : 1,
    "artist_id" : 95,
    "metric_id" : 12
  },
  {
    "id" : 706,
    "value" : 3,
    "artist_id" : 95,
    "metric_id" : 14
  },
  {
    "id" : 707,
    "value" : 1,
    "artist_id" : 95,
    "metric_id" : 18
  },
  {
    "id" : 709,
    "value" : 5,
    "artist_id" : 96,
    "metric_id" : 2
  },
  {
    "id" : 710,
    "value" : 3,
    "artist_id" : 96,
    "metric_id" : 7
  },
  {
    "id" : 711,
    "value" : 1,
    "artist_id" : 96,
    "metric_id" : 38
  },
  {
    "id" : 712,
    "value" : 4,
    "artist_id" : 96,
    "metric_id" : 12
  },
  {
    "id" : 713,
    "value" : 1,
    "artist_id" : 96,
    "metric_id" : 18
  },
  {
    "id" : 715,
    "value" : 1,
    "artist_id" : 97,
    "metric_id" : 17
  },
  {
    "id" : 716,
    "value" : 5,
    "artist_id" : 97,
    "metric_id" : 34
  },
  {
    "id" : 717,
    "value" : 2,
    "artist_id" : 97,
    "metric_id" : 37
  },
  {
    "id" : 719,
    "value" : 5,
    "artist_id" : 98,
    "metric_id" : 2
  },
  {
    "id" : 720,
    "value" : 2,
    "artist_id" : 98,
    "metric_id" : 6
  },
  {
    "id" : 721,
    "value" : 2,
    "artist_id" : 98,
    "metric_id" : 7
  },
  {
    "id" : 722,
    "value" : 4,
    "artist_id" : 98,
    "metric_id" : 12
  },
  {
    "id" : 723,
    "value" : 1,
    "artist_id" : 98,
    "metric_id" : 17
  },
  {
    "id" : 725,
    "value" : 5,
    "artist_id" : 99,
    "metric_id" : 3
  },
  {
    "id" : 726,
    "value" : 4,
    "artist_id" : 99,
    "metric_id" : 14
  },
  {
    "id" : 727,
    "value" : 2,
    "artist_id" : 99,
    "metric_id" : 20
  },
  {
    "id" : 728,
    "value" : 3,
    "artist_id" : 99,
    "metric_id" : 21
  },
  {
    "id" : 730,
    "value" : 3,
    "artist_id" : 100,
    "metric_id" : 2
  },
  {
    "id" : 731,
    "value" : 2,
    "artist_id" : 100,
    "metric_id" : 5
  },
  {
    "id" : 732,
    "value" : 2,
    "artist_id" : 100,
    "metric_id" : 34
  },
  {
    "id" : 733,
    "value" : 4,
    "artist_id" : 100,
    "metric_id" : 14
  },
  {
    "id" : 734,
    "value" : 2,
    "artist_id" : 100,
    "metric_id" : 13
  },
  {
    "id" : 736,
    "value" : 5,
    "artist_id" : 101,
    "metric_id" : 3
  },
  {
    "id" : 737,
    "value" : 2,
    "artist_id" : 101,
    "metric_id" : 10
  },
  {
    "id" : 738,
    "value" : 3,
    "artist_id" : 101,
    "metric_id" : 14
  },
  {
    "id" : 739,
    "value" : 3,
    "artist_id" : 101,
    "metric_id" : 15
  },
  {
    "id" : 740,
    "value" : 4,
    "artist_id" : 101,
    "metric_id" : 21
  },
  {
    "id" : 742,
    "value" : 5,
    "artist_id" : 102,
    "metric_id" : 3
  },
  {
    "id" : 743,
    "value" : 1,
    "artist_id" : 102,
    "metric_id" : 20
  },
  {
    "id" : 744,
    "value" : 3,
    "artist_id" : 102,
    "metric_id" : 21
  },
  {
    "id" : 745,
    "value" : 1,
    "artist_id" : 102,
    "metric_id" : 31
  },
  {
    "id" : 747,
    "value" : 5,
    "artist_id" : 103,
    "metric_id" : 2
  },
  {
    "id" : 748,
    "value" : 3,
    "artist_id" : 103,
    "metric_id" : 6
  },
  {
    "id" : 749,
    "value" : 2,
    "artist_id" : 103,
    "metric_id" : 12
  },
  {
    "id" : 750,
    "value" : 3,
    "artist_id" : 103,
    "metric_id" : 14
  },
  {
    "id" : 751,
    "value" : 3,
    "artist_id" : 103,
    "metric_id" : 31
  },
  {
    "id" : 752,
    "value" : 1,
    "artist_id" : 103,
    "metric_id" : 18
  },
  {
    "id" : 754,
    "value" : 5,
    "artist_id" : 104,
    "metric_id" : 2
  },
  {
    "id" : 755,
    "value" : 2,
    "artist_id" : 104,
    "metric_id" : 6
  },
  {
    "id" : 756,
    "value" : 3,
    "artist_id" : 104,
    "metric_id" : 12
  },
  {
    "id" : 757,
    "value" : 3,
    "artist_id" : 104,
    "metric_id" : 31
  },
  {
    "id" : 758,
    "value" : 1,
    "artist_id" : 104,
    "metric_id" : 18
  },
  {
    "id" : 759,
    "value" : 4,
    "artist_id" : 104,
    "metric_id" : 14
  },
  {
    "id" : 761,
    "value" : 4,
    "artist_id" : 105,
    "metric_id" : 2
  },
  {
    "id" : 762,
    "value" : 2,
    "artist_id" : 105,
    "metric_id" : 13
  },
  {
    "id" : 763,
    "value" : 4,
    "artist_id" : 105,
    "metric_id" : 14
  },
  {
    "id" : 764,
    "value" : 1,
    "artist_id" : 105,
    "metric_id" : 6
  },
  {
    "id" : 765,
    "value" : 2,
    "artist_id" : 105,
    "metric_id" : 34
  },
  {
    "id" : 766,
    "value" : 1,
    "artist_id" : 105,
    "metric_id" : 18
  },
  {
    "id" : 768,
    "value" : 5,
    "artist_id" : 106,
    "metric_id" : 2
  },
  {
    "id" : 769,
    "value" : 5,
    "artist_id" : 106,
    "metric_id" : 6
  },
  {
    "id" : 770,
    "value" : 2,
    "artist_id" : 106,
    "metric_id" : 12
  },
  {
    "id" : 771,
    "value" : 1,
    "artist_id" : 106,
    "metric_id" : 11
  },
  {
    "id" : 772,
    "value" : 5,
    "artist_id" : 106,
    "metric_id" : 14
  },
  {
    "id" : 773,
    "value" : 1,
    "artist_id" : 106,
    "metric_id" : 18
  },
  {
    "id" : 774,
    "value" : 2,
    "artist_id" : 106,
    "metric_id" : 39
  },
  {
    "id" : 775,
    "value" : 1,
    "artist_id" : 106,
    "metric_id" : 29
  },
  {
    "id" : 777,
    "value" : 2,
    "artist_id" : 107,
    "metric_id" : 2
  },
  {
    "id" : 778,
    "value" : 5,
    "artist_id" : 107,
    "metric_id" : 5
  },
  {
    "id" : 779,
    "value" : 3,
    "artist_id" : 107,
    "metric_id" : 14
  },
  {
    "id" : 780,
    "value" : 2,
    "artist_id" : 107,
    "metric_id" : 15
  },
  {
    "id" : 781,
    "value" : 1,
    "artist_id" : 107,
    "metric_id" : 18
  },
  {
    "id" : 783,
    "value" : 5,
    "artist_id" : 108,
    "metric_id" : 2
  },
  {
    "id" : 784,
    "value" : 2,
    "artist_id" : 108,
    "metric_id" : 5
  },
  {
    "id" : 785,
    "value" : 2,
    "artist_id" : 108,
    "metric_id" : 11
  },
  {
    "id" : 786,
    "value" : 2,
    "artist_id" : 108,
    "metric_id" : 13
  },
  {
    "id" : 787,
    "value" : 3,
    "artist_id" : 108,
    "metric_id" : 14
  },
  {
    "id" : 788,
    "value" : 1,
    "artist_id" : 108,
    "metric_id" : 34
  },
  {
    "id" : 789,
    "value" : 1,
    "artist_id" : 108,
    "metric_id" : 18
  },
  {
    "id" : 791,
    "value" : 5,
    "artist_id" : 109,
    "metric_id" : 2
  },
  {
    "id" : 792,
    "value" : 4,
    "artist_id" : 109,
    "metric_id" : 6
  },
  {
    "id" : 793,
    "value" : 2,
    "artist_id" : 109,
    "metric_id" : 12
  },
  {
    "id" : 794,
    "value" : 4,
    "artist_id" : 109,
    "metric_id" : 14
  },
  {
    "id" : 795,
    "value" : 1,
    "artist_id" : 109,
    "metric_id" : 17
  },
  {
    "id" : 796,
    "value" : 1,
    "artist_id" : 109,
    "metric_id" : 18
  },
  {
    "id" : 797,
    "value" : 4,
    "artist_id" : 109,
    "metric_id" : 38
  },
  {
    "id" : 799,
    "value" : 5,
    "artist_id" : 110,
    "metric_id" : 2
  },
  {
    "id" : 800,
    "value" : 2,
    "artist_id" : 110,
    "metric_id" : 12
  },
  {
    "id" : 801,
    "value" : 2,
    "artist_id" : 110,
    "metric_id" : 13
  },
  {
    "id" : 802,
    "value" : 3,
    "artist_id" : 110,
    "metric_id" : 14
  },
  {
    "id" : 803,
    "value" : 1,
    "artist_id" : 110,
    "metric_id" : 18
  },
  {
    "id" : 804,
    "value" : 1,
    "artist_id" : 110,
    "metric_id" : 38
  },
  {
    "id" : 806,
    "value" : 5,
    "artist_id" : 111,
    "metric_id" : 3
  },
  {
    "id" : 807,
    "value" : 2,
    "artist_id" : 111,
    "metric_id" : 10
  },
  {
    "id" : 808,
    "value" : 3,
    "artist_id" : 111,
    "metric_id" : 11
  },
  {
    "id" : 809,
    "value" : 3,
    "artist_id" : 111,
    "metric_id" : 14
  },
  {
    "id" : 810,
    "value" : 5,
    "artist_id" : 111,
    "metric_id" : 21
  },
  {
    "id" : 812,
    "value" : 5,
    "artist_id" : 112,
    "metric_id" : 3
  },
  {
    "id" : 813,
    "value" : 2,
    "artist_id" : 112,
    "metric_id" : 15
  },
  {
    "id" : 814,
    "value" : 1,
    "artist_id" : 112,
    "metric_id" : 13
  },
  {
    "id" : 815,
    "value" : 2,
    "artist_id" : 112,
    "metric_id" : 16
  },
  {
    "id" : 816,
    "value" : 5,
    "artist_id" : 112,
    "metric_id" : 21
  },
  {
    "id" : 818,
    "value" : 5,
    "artist_id" : 113,
    "metric_id" : 3
  },
  {
    "id" : 819,
    "value" : 3,
    "artist_id" : 113,
    "metric_id" : 11
  },
  {
    "id" : 820,
    "value" : 3,
    "artist_id" : 113,
    "metric_id" : 13
  },
  {
    "id" : 821,
    "value" : 2,
    "artist_id" : 113,
    "metric_id" : 15
  },
  {
    "id" : 822,
    "value" : 3,
    "artist_id" : 113,
    "metric_id" : 21
  },
  {
    "id" : 824,
    "value" : 5,
    "artist_id" : 114,
    "metric_id" : 3
  },
  {
    "id" : 825,
    "value" : 5,
    "artist_id" : 114,
    "metric_id" : 14
  },
  {
    "id" : 826,
    "value" : 5,
    "artist_id" : 114,
    "metric_id" : 20
  },
  {
    "id" : 828,
    "value" : 5,
    "artist_id" : 115,
    "metric_id" : 3
  },
  {
    "id" : 829,
    "value" : 2,
    "artist_id" : 115,
    "metric_id" : 9
  },
  {
    "id" : 830,
    "value" : 4,
    "artist_id" : 115,
    "metric_id" : 15
  },
  {
    "id" : 831,
    "value" : 4,
    "artist_id" : 115,
    "metric_id" : 16
  },
  {
    "id" : 832,
    "value" : 5,
    "artist_id" : 115,
    "metric_id" : 22
  },
  {
    "id" : 834,
    "value" : 5,
    "artist_id" : 116,
    "metric_id" : 3
  },
  {
    "id" : 835,
    "value" : 4,
    "artist_id" : 116,
    "metric_id" : 10
  },
  {
    "id" : 836,
    "value" : 3,
    "artist_id" : 116,
    "metric_id" : 11
  },
  {
    "id" : 837,
    "value" : 3,
    "artist_id" : 116,
    "metric_id" : 13
  },
  {
    "id" : 838,
    "value" : 5,
    "artist_id" : 116,
    "metric_id" : 21
  },
  {
    "id" : 840,
    "value" : 5,
    "artist_id" : 117,
    "metric_id" : 2
  },
  {
    "id" : 841,
    "value" : 4,
    "artist_id" : 117,
    "metric_id" : 28
  },
  {
    "id" : 842,
    "value" : 4,
    "artist_id" : 117,
    "metric_id" : 14
  },
  {
    "id" : 843,
    "value" : 1,
    "artist_id" : 117,
    "metric_id" : 18
  },
  {
    "id" : 844,
    "value" : 2,
    "artist_id" : 117,
    "metric_id" : 25
  },
  {
    "id" : 845,
    "value" : 4,
    "artist_id" : 117,
    "metric_id" : 38
  },
  {
    "id" : 847,
    "value" : 5,
    "artist_id" : 118,
    "metric_id" : 2
  },
  {
    "id" : 848,
    "value" : 2,
    "artist_id" : 118,
    "metric_id" : 12
  },
  {
    "id" : 849,
    "value" : 3,
    "artist_id" : 118,
    "metric_id" : 13
  },
  {
    "id" : 850,
    "value" : 1,
    "artist_id" : 118,
    "metric_id" : 11
  },
  {
    "id" : 851,
    "value" : 1,
    "artist_id" : 118,
    "metric_id" : 18
  },
  {
    "id" : 852,
    "value" : 2,
    "artist_id" : 118,
    "metric_id" : 7
  },
  {
    "id" : 854,
    "value" : 5,
    "artist_id" : 119,
    "metric_id" : 2
  },
  {
    "id" : 855,
    "value" : 1,
    "artist_id" : 119,
    "metric_id" : 8
  },
  {
    "id" : 856,
    "value" : 3,
    "artist_id" : 119,
    "metric_id" : 12
  },
  {
    "id" : 857,
    "value" : 2,
    "artist_id" : 119,
    "metric_id" : 13
  },
  {
    "id" : 858,
    "value" : 2,
    "artist_id" : 119,
    "metric_id" : 9
  },
  {
    "id" : 859,
    "value" : 1,
    "artist_id" : 119,
    "metric_id" : 18
  },
  {
    "id" : 860,
    "value" : 3,
    "artist_id" : 119,
    "metric_id" : 38
  },
  {
    "id" : 862,
    "value" : 4,
    "artist_id" : 120,
    "metric_id" : 2
  },
  {
    "id" : 863,
    "value" : 2,
    "artist_id" : 120,
    "metric_id" : 5
  },
  {
    "id" : 864,
    "value" : 1,
    "artist_id" : 120,
    "metric_id" : 18
  },
  {
    "id" : 865,
    "value" : 2,
    "artist_id" : 120,
    "metric_id" : 25
  },
  {
    "id" : 867,
    "value" : 2,
    "artist_id" : 120,
    "metric_id" : 27
  },
  {
    "id" : 868,
    "value" : 5,
    "artist_id" : 121,
    "metric_id" : 2
  },
  {
    "id" : 869,
    "value" : 5,
    "artist_id" : 121,
    "metric_id" : 8
  },
  {
    "id" : 870,
    "value" : 5,
    "artist_id" : 121,
    "metric_id" : 12
  },
  {
    "id" : 871,
    "value" : 1,
    "artist_id" : 121,
    "metric_id" : 18
  },
  {
    "id" : 872,
    "value" : 3,
    "artist_id" : 121,
    "metric_id" : 38
  },
  {
    "id" : 874,
    "value" : 1,
    "artist_id" : 122,
    "metric_id" : 2
  },
  {
    "id" : 875,
    "value" : 4,
    "artist_id" : 122,
    "metric_id" : 5
  },
  {
    "id" : 876,
    "value" : 3,
    "artist_id" : 122,
    "metric_id" : 11
  },
  {
    "id" : 877,
    "value" : 2,
    "artist_id" : 122,
    "metric_id" : 13
  },
  {
    "id" : 878,
    "value" : 3,
    "artist_id" : 122,
    "metric_id" : 16
  },
  {
    "id" : 879,
    "value" : 1,
    "artist_id" : 122,
    "metric_id" : 18
  },
  {
    "id" : 880,
    "value" : 3,
    "artist_id" : 122,
    "metric_id" : 32
  },
  {
    "id" : 881,
    "value" : 3,
    "artist_id" : 122,
    "metric_id" : 37
  },
  {
    "id" : 883,
    "value" : 4,
    "artist_id" : 123,
    "metric_id" : 2
  },
  {
    "id" : 884,
    "value" : 3,
    "artist_id" : 123,
    "metric_id" : 5
  },
  {
    "id" : 885,
    "value" : 3,
    "artist_id" : 123,
    "metric_id" : 27
  },
  {
    "id" : 886,
    "value" : 4,
    "artist_id" : 123,
    "metric_id" : 11
  },
  {
    "id" : 887,
    "value" : 3,
    "artist_id" : 123,
    "metric_id" : 13
  },
  {
    "id" : 888,
    "value" : 1,
    "artist_id" : 123,
    "metric_id" : 9
  },
  {
    "id" : 889,
    "value" : 1,
    "artist_id" : 123,
    "metric_id" : 18
  },
  {
    "id" : 891,
    "value" : 3,
    "artist_id" : 124,
    "metric_id" : 2
  },
  {
    "id" : 892,
    "value" : 2,
    "artist_id" : 124,
    "metric_id" : 5
  },
  {
    "id" : 893,
    "value" : 3,
    "artist_id" : 124,
    "metric_id" : 10
  },
  {
    "id" : 894,
    "value" : 3,
    "artist_id" : 124,
    "metric_id" : 11
  },
  {
    "id" : 895,
    "value" : 4,
    "artist_id" : 124,
    "metric_id" : 13
  },
  {
    "id" : 896,
    "value" : 1,
    "artist_id" : 124,
    "metric_id" : 17
  },
  {
    "id" : 898,
    "value" : 3,
    "artist_id" : 125,
    "metric_id" : 2
  },
  {
    "id" : 899,
    "value" : 4,
    "artist_id" : 125,
    "metric_id" : 10
  },
  {
    "id" : 900,
    "value" : 3,
    "artist_id" : 125,
    "metric_id" : 13
  },
  {
    "id" : 901,
    "value" : 1,
    "artist_id" : 125,
    "metric_id" : 18
  },
  {
    "id" : 904,
    "value" : 2,
    "artist_id" : 125,
    "metric_id" : 36
  },
  {
    "id" : 908,
    "value" : 5,
    "artist_id" : 126,
    "metric_id" : 2
  },
  {
    "id" : 909,
    "value" : 3,
    "artist_id" : 126,
    "metric_id" : 7
  },
  {
    "id" : 910,
    "value" : 3,
    "artist_id" : 126,
    "metric_id" : 6
  },
  {
    "id" : 911,
    "value" : 2,
    "artist_id" : 126,
    "metric_id" : 12
  },
  {
    "id" : 912,
    "value" : 3,
    "artist_id" : 126,
    "metric_id" : 13
  },
  {
    "id" : 913,
    "value" : 1,
    "artist_id" : 126,
    "metric_id" : 17
  },
  {
    "id" : 914,
    "value" : 3,
    "artist_id" : 126,
    "metric_id" : 9
  },
  {
    "id" : 916,
    "value" : 3,
    "artist_id" : 127,
    "metric_id" : 3
  },
  {
    "id" : 917,
    "value" : 2,
    "artist_id" : 127,
    "metric_id" : 11
  },
  {
    "id" : 918,
    "value" : 1,
    "artist_id" : 127,
    "metric_id" : 17
  },
  {
    "id" : 919,
    "value" : 2,
    "artist_id" : 127,
    "metric_id" : 26
  },
  {
    "id" : 920,
    "value" : 3,
    "artist_id" : 127,
    "metric_id" : 34
  },
  {
    "id" : 921,
    "value" : 1,
    "artist_id" : 127,
    "metric_id" : 23
  },
  {
    "id" : 923,
    "value" : 3,
    "artist_id" : 128,
    "metric_id" : 2
  },
  {
    "id" : 924,
    "value" : 5,
    "artist_id" : 128,
    "metric_id" : 5
  },
  {
    "id" : 925,
    "value" : 1,
    "artist_id" : 128,
    "metric_id" : 6
  },
  {
    "id" : 926,
    "value" : 3,
    "artist_id" : 128,
    "metric_id" : 14
  },
  {
    "id" : 927,
    "value" : 1,
    "artist_id" : 128,
    "metric_id" : 17
  },
  {
    "id" : 928,
    "value" : 1,
    "artist_id" : 128,
    "metric_id" : 18
  },
  {
    "id" : 929,
    "value" : 2,
    "artist_id" : 128,
    "metric_id" : 16
  },
  {
    "id" : 931,
    "value" : 3,
    "artist_id" : 129,
    "metric_id" : 3
  },
  {
    "id" : 932,
    "value" : 2,
    "artist_id" : 129,
    "metric_id" : 15
  },
  {
    "id" : 933,
    "value" : 3,
    "artist_id" : 129,
    "metric_id" : 26
  },
  {
    "id" : 934,
    "value" : 4,
    "artist_id" : 129,
    "metric_id" : 31
  },
  {
    "id" : 936,
    "value" : 2,
    "artist_id" : 130,
    "metric_id" : 27
  },
  {
    "id" : 937,
    "value" : 2,
    "artist_id" : 130,
    "metric_id" : 36
  },
  {
    "id" : 938,
    "value" : 3,
    "artist_id" : 130,
    "metric_id" : 11
  },
  {
    "id" : 939,
    "value" : 2,
    "artist_id" : 130,
    "metric_id" : 13
  },
  {
    "id" : 940,
    "value" : 1,
    "artist_id" : 130,
    "metric_id" : 14
  },
  {
    "id" : 941,
    "value" : 2,
    "artist_id" : 130,
    "metric_id" : 15
  },
  {
    "id" : 942,
    "value" : 4,
    "artist_id" : 130,
    "metric_id" : 35
  },
  {
    "id" : 944,
    "value" : 5,
    "artist_id" : 131,
    "metric_id" : 2
  },
  {
    "id" : 945,
    "value" : 2,
    "artist_id" : 131,
    "metric_id" : 5
  },
  {
    "id" : 946,
    "value" : 2,
    "artist_id" : 131,
    "metric_id" : 8
  },
  {
    "id" : 947,
    "value" : 3,
    "artist_id" : 131,
    "metric_id" : 9
  },
  {
    "id" : 948,
    "value" : 4,
    "artist_id" : 131,
    "metric_id" : 43
  },
  {
    "id" : 949,
    "value" : 1,
    "artist_id" : 131,
    "metric_id" : 18
  },
  {
    "id" : 951,
    "value" : 5,
    "artist_id" : 132,
    "metric_id" : 2
  },
  {
    "id" : 952,
    "value" : 4,
    "artist_id" : 132,
    "metric_id" : 6
  },
  {
    "id" : 953,
    "value" : 4,
    "artist_id" : 132,
    "metric_id" : 12
  },
  {
    "id" : 954,
    "value" : 2,
    "artist_id" : 132,
    "metric_id" : 14
  },
  {
    "id" : 955,
    "value" : 1,
    "artist_id" : 132,
    "metric_id" : 18
  },
  {
    "id" : 957,
    "value" : 5,
    "artist_id" : 133,
    "metric_id" : 2
  },
  {
    "id" : 958,
    "value" : 3,
    "artist_id" : 133,
    "metric_id" : 5
  },
  {
    "id" : 959,
    "value" : 1,
    "artist_id" : 133,
    "metric_id" : 8
  },
  {
    "id" : 960,
    "value" : 5,
    "artist_id" : 133,
    "metric_id" : 9
  },
  {
    "id" : 961,
    "value" : 3,
    "artist_id" : 133,
    "metric_id" : 12
  },
  {
    "id" : 962,
    "value" : 1,
    "artist_id" : 133,
    "metric_id" : 13
  },
  {
    "id" : 963,
    "value" : 2,
    "artist_id" : 133,
    "metric_id" : 38
  },
  {
    "id" : 965,
    "value" : 3,
    "artist_id" : 134,
    "metric_id" : 2
  },
  {
    "id" : 966,
    "value" : 2,
    "artist_id" : 134,
    "metric_id" : 5
  },
  {
    "id" : 967,
    "value" : 2,
    "artist_id" : 134,
    "metric_id" : 11
  },
  {
    "id" : 968,
    "value" : 1,
    "artist_id" : 134,
    "metric_id" : 10
  },
  {
    "id" : 969,
    "value" : 4,
    "artist_id" : 134,
    "metric_id" : 14
  },
  {
    "id" : 971,
    "value" : 3,
    "artist_id" : 135,
    "metric_id" : 2
  },
  {
    "id" : 972,
    "value" : 4,
    "artist_id" : 135,
    "metric_id" : 5
  },
  {
    "id" : 973,
    "value" : 3,
    "artist_id" : 135,
    "metric_id" : 9
  },
  {
    "id" : 974,
    "value" : 2,
    "artist_id" : 135,
    "metric_id" : 10
  },
  {
    "id" : 975,
    "value" : 4,
    "artist_id" : 135,
    "metric_id" : 11
  },
  {
    "id" : 976,
    "value" : 2,
    "artist_id" : 135,
    "metric_id" : 13
  },
  {
    "id" : 977,
    "value" : 1,
    "artist_id" : 135,
    "metric_id" : 18
  },
  {
    "id" : 978,
    "value" : 1,
    "artist_id" : 135,
    "metric_id" : 32
  },
  {
    "id" : 980,
    "value" : 5,
    "artist_id" : 136,
    "metric_id" : 3
  },
  {
    "id" : 981,
    "value" : 1,
    "artist_id" : 136,
    "metric_id" : 22
  },
  {
    "id" : 982,
    "value" : 2,
    "artist_id" : 136,
    "metric_id" : 16
  },
  {
    "id" : 983,
    "value" : 4,
    "artist_id" : 136,
    "metric_id" : 15
  },
  {
    "id" : 985,
    "value" : 2,
    "artist_id" : 137,
    "metric_id" : 2
  },
  {
    "id" : 986,
    "value" : 4,
    "artist_id" : 137,
    "metric_id" : 5
  },
  {
    "id" : 987,
    "value" : 3,
    "artist_id" : 137,
    "metric_id" : 34
  },
  {
    "id" : 988,
    "value" : 3,
    "artist_id" : 137,
    "metric_id" : 11
  },
  {
    "id" : 989,
    "value" : 4,
    "artist_id" : 137,
    "metric_id" : 14
  },
  {
    "id" : 990,
    "value" : 2,
    "artist_id" : 137,
    "metric_id" : 38
  },
  {
    "id" : 992,
    "value" : 3,
    "artist_id" : 138,
    "metric_id" : 2
  },
  {
    "id" : 993,
    "value" : 5,
    "artist_id" : 138,
    "metric_id" : 5
  },
  {
    "id" : 994,
    "value" : 5,
    "artist_id" : 138,
    "metric_id" : 14
  },
  {
    "id" : 995,
    "value" : 1,
    "artist_id" : 138,
    "metric_id" : 34
  },
  {
    "id" : 997,
    "value" : 5,
    "artist_id" : 139,
    "metric_id" : 3
  },
  {
    "id" : 998,
    "value" : 2,
    "artist_id" : 139,
    "metric_id" : 15
  },
  {
    "id" : 999,
    "value" : 2,
    "artist_id" : 139,
    "metric_id" : 16
  },
  {
    "id" : 1000,
    "value" : 1,
    "artist_id" : 139,
    "metric_id" : 22
  },
  {
    "id" : 1001,
    "value" : 2,
    "artist_id" : 139,
    "metric_id" : 31
  },
  {
    "id" : 1003,
    "value" : 5,
    "artist_id" : 140,
    "metric_id" : 3
  },
  {
    "id" : 1004,
    "value" : 4,
    "artist_id" : 140,
    "metric_id" : 21
  },
  {
    "id" : 1005,
    "value" : 2,
    "artist_id" : 140,
    "metric_id" : 10
  },
  {
    "id" : 1006,
    "value" : 3,
    "artist_id" : 140,
    "metric_id" : 11
  },
  {
    "id" : 1008,
    "value" : 4,
    "artist_id" : 141,
    "metric_id" : 2
  },
  {
    "id" : 1009,
    "value" : 4,
    "artist_id" : 141,
    "metric_id" : 6
  },
  {
    "id" : 1010,
    "value" : 2,
    "artist_id" : 141,
    "metric_id" : 5
  },
  {
    "id" : 1011,
    "value" : 3,
    "artist_id" : 141,
    "metric_id" : 12
  },
  {
    "id" : 1012,
    "value" : 2,
    "artist_id" : 141,
    "metric_id" : 14
  },
  {
    "id" : 1013,
    "value" : 1,
    "artist_id" : 141,
    "metric_id" : 16
  },
  {
    "id" : 1014,
    "value" : 1,
    "artist_id" : 141,
    "metric_id" : 18
  },
  {
    "id" : 1016,
    "value" : 4,
    "artist_id" : 142,
    "metric_id" : 5
  },
  {
    "id" : 1017,
    "value" : 1,
    "artist_id" : 142,
    "metric_id" : 2
  },
  {
    "id" : 1018,
    "value" : 1,
    "artist_id" : 142,
    "metric_id" : 16
  },
  {
    "id" : 1019,
    "value" : 1,
    "artist_id" : 142,
    "metric_id" : 35
  },
  {
    "id" : 1020,
    "value" : 3,
    "artist_id" : 142,
    "metric_id" : 32
  },
  {
    "id" : 1021,
    "value" : 3,
    "artist_id" : 142,
    "metric_id" : 10
  },
  {
    "id" : 1022,
    "value" : 3,
    "artist_id" : 142,
    "metric_id" : 11
  },
  {
    "id" : 1023,
    "value" : 4,
    "artist_id" : 142,
    "metric_id" : 13
  },
  {
    "id" : 1025,
    "value" : 5,
    "artist_id" : 143,
    "metric_id" : 36
  },
  {
    "id" : 1026,
    "value" : 3,
    "artist_id" : 143,
    "metric_id" : 13
  },
  {
    "id" : 1027,
    "value" : 4,
    "artist_id" : 143,
    "metric_id" : 14
  },
  {
    "id" : 1029,
    "value" : 1,
    "artist_id" : 144,
    "metric_id" : 3
  },
  {
    "id" : 1030,
    "value" : 5,
    "artist_id" : 144,
    "metric_id" : 31
  },
  {
    "id" : 1031,
    "value" : 4,
    "artist_id" : 144,
    "metric_id" : 14
  },
  {
    "id" : 1032,
    "value" : 2,
    "artist_id" : 144,
    "metric_id" : 15
  },
  {
    "id" : 1034,
    "value" : 3,
    "artist_id" : 145,
    "metric_id" : 3
  },
  {
    "id" : 1035,
    "value" : 4,
    "artist_id" : 145,
    "metric_id" : 31
  },
  {
    "id" : 1036,
    "value" : 2,
    "artist_id" : 145,
    "metric_id" : 10
  },
  {
    "id" : 1037,
    "value" : 3,
    "artist_id" : 145,
    "metric_id" : 14
  },
  {
    "id" : 1039,
    "value" : 5,
    "artist_id" : 146,
    "metric_id" : 2
  },
  {
    "id" : 1040,
    "value" : 3,
    "artist_id" : 146,
    "metric_id" : 5
  },
  {
    "id" : 1041,
    "value" : 2,
    "artist_id" : 146,
    "metric_id" : 6
  },
  {
    "id" : 1042,
    "value" : 1,
    "artist_id" : 146,
    "metric_id" : 18
  },
  {
    "id" : 1043,
    "value" : 2,
    "artist_id" : 146,
    "metric_id" : 12
  },
  {
    "id" : 1044,
    "value" : 1,
    "artist_id" : 146,
    "metric_id" : 15
  },
  {
    "id" : 1045,
    "value" : 3,
    "artist_id" : 146,
    "metric_id" : 9
  },
  {
    "id" : 1046,
    "value" : 2,
    "artist_id" : 146,
    "metric_id" : 32
  },
  {
    "id" : 1048,
    "value" : 3,
    "artist_id" : 147,
    "metric_id" : 2
  },
  {
    "id" : 1049,
    "value" : 2,
    "artist_id" : 147,
    "metric_id" : 5
  },
  {
    "id" : 1050,
    "value" : 3,
    "artist_id" : 147,
    "metric_id" : 14
  },
  {
    "id" : 1051,
    "value" : 1,
    "artist_id" : 147,
    "metric_id" : 18
  },
  {
    "id" : 1053,
    "value" : 5,
    "artist_id" : 148,
    "metric_id" : 3
  },
  {
    "id" : 1054,
    "value" : 5,
    "artist_id" : 148,
    "metric_id" : 30
  },
  {
    "id" : 1055,
    "value" : 4,
    "artist_id" : 148,
    "metric_id" : 14
  },
  {
    "id" : 1056,
    "value" : 1,
    "artist_id" : 148,
    "metric_id" : 23
  },
  {
    "id" : 1057,
    "value" : 1,
    "artist_id" : 148,
    "metric_id" : 18
  },
  {
    "id" : 1059,
    "value" : 3,
    "artist_id" : 149,
    "metric_id" : 4
  },
  {
    "id" : 1060,
    "value" : 2,
    "artist_id" : 149,
    "metric_id" : 34
  },
  {
    "id" : 1061,
    "value" : 3,
    "artist_id" : 149,
    "metric_id" : 10
  },
  {
    "id" : 1062,
    "value" : 3,
    "artist_id" : 149,
    "metric_id" : 13
  },
  {
    "id" : 1063,
    "value" : 2,
    "artist_id" : 149,
    "metric_id" : 15
  },
  {
    "id" : 1065,
    "value" : 2,
    "artist_id" : 150,
    "metric_id" : 2
  },
  {
    "id" : 1066,
    "value" : 3,
    "artist_id" : 150,
    "metric_id" : 5
  },
  {
    "id" : 1067,
    "value" : 3,
    "artist_id" : 150,
    "metric_id" : 33
  },
  {
    "id" : 1068,
    "value" : 4,
    "artist_id" : 150,
    "metric_id" : 9
  },
  {
    "id" : 1069,
    "value" : 2,
    "artist_id" : 150,
    "metric_id" : 11
  },
  {
    "id" : 1070,
    "value" : 4,
    "artist_id" : 150,
    "metric_id" : 13
  },
  {
    "id" : 1071,
    "value" : 1,
    "artist_id" : 150,
    "metric_id" : 18
  },
  {
    "id" : 1073,
    "value" : 2,
    "artist_id" : 151,
    "metric_id" : 2
  },
  {
    "id" : 1074,
    "value" : 3,
    "artist_id" : 151,
    "metric_id" : 5
  },
  {
    "id" : 1075,
    "value" : 5,
    "artist_id" : 151,
    "metric_id" : 33
  },
  {
    "id" : 1076,
    "value" : 1,
    "artist_id" : 151,
    "metric_id" : 9
  },
  {
    "id" : 1077,
    "value" : 3,
    "artist_id" : 151,
    "metric_id" : 11
  },
  {
    "id" : 1078,
    "value" : 2,
    "artist_id" : 151,
    "metric_id" : 13
  },
  {
    "id" : 1079,
    "value" : 1,
    "artist_id" : 151,
    "metric_id" : 18
  },
  {
    "id" : 1080,
    "value" : 3,
    "artist_id" : 151,
    "metric_id" : 14
  },
  {
    "id" : 1082,
    "value" : 2,
    "artist_id" : 152,
    "metric_id" : 2
  },
  {
    "id" : 1083,
    "value" : 3,
    "artist_id" : 152,
    "metric_id" : 5
  },
  {
    "id" : 1084,
    "value" : 2,
    "artist_id" : 152,
    "metric_id" : 34
  },
  {
    "id" : 1085,
    "value" : 1,
    "artist_id" : 152,
    "metric_id" : 13
  },
  {
    "id" : 1086,
    "value" : 3,
    "artist_id" : 152,
    "metric_id" : 14
  },
  {
    "id" : 1087,
    "value" : 1,
    "artist_id" : 152,
    "metric_id" : 32
  },
  {
    "id" : 1089,
    "value" : 4,
    "artist_id" : 153,
    "metric_id" : 2
  },
  {
    "id" : 1090,
    "value" : 3,
    "artist_id" : 153,
    "metric_id" : 5
  },
  {
    "id" : 1091,
    "value" : 3,
    "artist_id" : 153,
    "metric_id" : 9
  },
  {
    "id" : 1092,
    "value" : 1,
    "artist_id" : 153,
    "metric_id" : 11
  },
  {
    "id" : 1093,
    "value" : 3,
    "artist_id" : 153,
    "metric_id" : 13
  },
  {
    "id" : 1094,
    "value" : 1,
    "artist_id" : 153,
    "metric_id" : 18
  },
  {
    "id" : 1095,
    "value" : 1,
    "artist_id" : 153,
    "metric_id" : 17
  },
  {
    "id" : 1097,
    "value" : 5,
    "artist_id" : 154,
    "metric_id" : 3
  },
  {
    "id" : 1098,
    "value" : 4,
    "artist_id" : 154,
    "metric_id" : 20
  },
  {
    "id" : 1099,
    "value" : 3,
    "artist_id" : 154,
    "metric_id" : 14
  },
  {
    "id" : 1101,
    "value" : 5,
    "artist_id" : 155,
    "metric_id" : 2
  },
  {
    "id" : 1102,
    "value" : 4,
    "artist_id" : 155,
    "metric_id" : 5
  },
  {
    "id" : 1103,
    "value" : 3,
    "artist_id" : 155,
    "metric_id" : 9
  },
  {
    "id" : 1104,
    "value" : 1,
    "artist_id" : 155,
    "metric_id" : 12
  },
  {
    "id" : 1105,
    "value" : 2,
    "artist_id" : 155,
    "metric_id" : 13
  },
  {
    "id" : 1106,
    "value" : 1,
    "artist_id" : 155,
    "metric_id" : 18
  },
  {
    "id" : 1108,
    "value" : 5,
    "artist_id" : 156,
    "metric_id" : 3
  },
  {
    "id" : 1109,
    "value" : 5,
    "artist_id" : 156,
    "metric_id" : 30
  },
  {
    "id" : 1110,
    "value" : 3,
    "artist_id" : 156,
    "metric_id" : 20
  },
  {
    "id" : 1111,
    "value" : 1,
    "artist_id" : 156,
    "metric_id" : 23
  },
  {
    "id" : 1112,
    "value" : 1,
    "artist_id" : 156,
    "metric_id" : 18
  },
  {
    "id" : 1113,
    "value" : 4,
    "artist_id" : 156,
    "metric_id" : 14
  },
  {
    "id" : 1114,
    "value" : 3,
    "artist_id" : 156,
    "metric_id" : 11
  },
  {
    "id" : 1115,
    "value" : 2,
    "artist_id" : 156,
    "metric_id" : 13
  },
  {
    "id" : 1117,
    "value" : 4,
    "artist_id" : 157,
    "metric_id" : 2
  },
  {
    "id" : 1118,
    "value" : 5,
    "artist_id" : 157,
    "metric_id" : 5
  },
  {
    "id" : 1119,
    "value" : 4,
    "artist_id" : 157,
    "metric_id" : 14
  },
  {
    "id" : 1120,
    "value" : 1,
    "artist_id" : 157,
    "metric_id" : 18
  },
  {
    "id" : 1122,
    "value" : 2,
    "artist_id" : 160,
    "metric_id" : 2
  },
  {
    "id" : 1123,
    "value" : 4,
    "artist_id" : 160,
    "metric_id" : 5
  },
  {
    "id" : 1124,
    "value" : 3,
    "artist_id" : 160,
    "metric_id" : 13
  },
  {
    "id" : 1125,
    "value" : 2,
    "artist_id" : 160,
    "metric_id" : 10
  },
  {
    "id" : 1127,
    "value" : 5,
    "artist_id" : 161,
    "metric_id" : 3
  },
  {
    "id" : 1128,
    "value" : 4,
    "artist_id" : 161,
    "metric_id" : 21
  },
  {
    "id" : 1130,
    "value" : 2,
    "artist_id" : 162,
    "metric_id" : 2
  },
  {
    "id" : 1131,
    "value" : 4,
    "artist_id" : 162,
    "metric_id" : 5
  },
  {
    "id" : 1132,
    "value" : 4,
    "artist_id" : 162,
    "metric_id" : 13
  },
  {
    "id" : 1133,
    "value" : 1,
    "artist_id" : 162,
    "metric_id" : 12
  },
  {
    "id" : 1134,
    "value" : 1,
    "artist_id" : 162,
    "metric_id" : 17
  },
  {
    "id" : 1136,
    "value" : 3,
    "artist_id" : 163,
    "metric_id" : 3
  },
  {
    "id" : 1137,
    "value" : 4,
    "artist_id" : 163,
    "metric_id" : 10
  },
  {
    "id" : 1138,
    "value" : 2,
    "artist_id" : 163,
    "metric_id" : 11
  },
  {
    "id" : 1139,
    "value" : 3,
    "artist_id" : 163,
    "metric_id" : 15
  },
  {
    "id" : 1140,
    "value" : 1,
    "artist_id" : 163,
    "metric_id" : 24
  },
  {
    "id" : 1141,
    "value" : 4,
    "artist_id" : 163,
    "metric_id" : 26
  },
  {
    "id" : 1142,
    "value" : 3,
    "artist_id" : 163,
    "metric_id" : 43
  },
  {
    "id" : 1144,
    "value" : 5,
    "artist_id" : 164,
    "metric_id" : 3
  },
  {
    "id" : 1145,
    "value" : 5,
    "artist_id" : 164,
    "metric_id" : 21
  },
  {
    "id" : 1146,
    "value" : 2,
    "artist_id" : 164,
    "metric_id" : 15
  },
  {
    "id" : 1148,
    "value" : 5,
    "artist_id" : 165,
    "metric_id" : 3
  },
  {
    "id" : 1149,
    "value" : 4,
    "artist_id" : 165,
    "metric_id" : 30
  },
  {
    "id" : 1150,
    "value" : 1,
    "artist_id" : 165,
    "metric_id" : 23
  },
  {
    "id" : 1151,
    "value" : 1,
    "artist_id" : 165,
    "metric_id" : 17
  },
  {
    "id" : 1152,
    "value" : 2,
    "artist_id" : 165,
    "metric_id" : 13
  },
  {
    "id" : 1153,
    "value" : 3,
    "artist_id" : 165,
    "metric_id" : 14
  },
  {
    "id" : 1155,
    "value" : 3,
    "artist_id" : 166,
    "metric_id" : 3
  },
  {
    "id" : 1156,
    "value" : 2,
    "artist_id" : 166,
    "metric_id" : 10
  },
  {
    "id" : 1157,
    "value" : 4,
    "artist_id" : 166,
    "metric_id" : 15
  },
  {
    "id" : 1158,
    "value" : 2,
    "artist_id" : 166,
    "metric_id" : 26
  },
  {
    "id" : 1160,
    "value" : 5,
    "artist_id" : 167,
    "metric_id" : 2
  },
  {
    "id" : 1161,
    "value" : 2,
    "artist_id" : 167,
    "metric_id" : 28
  },
  {
    "id" : 1162,
    "value" : 2,
    "artist_id" : 167,
    "metric_id" : 25
  },
  {
    "id" : 1164,
    "value" : 3,
    "artist_id" : 167,
    "metric_id" : 44
  },
  {
    "id" : 1165,
    "value" : 1,
    "artist_id" : 167,
    "metric_id" : 18
  },
  {
    "id" : 1166,
    "value" : 4,
    "artist_id" : 168,
    "metric_id" : 2
  },
  {
    "id" : 1167,
    "value" : 4,
    "artist_id" : 168,
    "metric_id" : 5
  },
  {
    "id" : 1168,
    "value" : 1,
    "artist_id" : 168,
    "metric_id" : 6
  },
  {
    "id" : 1169,
    "value" : 3,
    "artist_id" : 168,
    "metric_id" : 9
  },
  {
    "id" : 1170,
    "value" : 4,
    "artist_id" : 168,
    "metric_id" : 14
  },
  {
    "id" : 1171,
    "value" : 2,
    "artist_id" : 168,
    "metric_id" : 38
  },
  {
    "id" : 1172,
    "value" : 1,
    "artist_id" : 168,
    "metric_id" : 15
  },
  {
    "id" : 1173,
    "value" : 1,
    "artist_id" : 168,
    "metric_id" : 18
  },
  {
    "id" : 1175,
    "value" : 5,
    "artist_id" : 169,
    "metric_id" : 2
  },
  {
    "id" : 1176,
    "value" : 3,
    "artist_id" : 169,
    "metric_id" : 5
  },
  {
    "id" : 1177,
    "value" : 2,
    "artist_id" : 169,
    "metric_id" : 6
  },
  {
    "id" : 1178,
    "value" : 2,
    "artist_id" : 169,
    "metric_id" : 9
  },
  {
    "id" : 1179,
    "value" : 2,
    "artist_id" : 169,
    "metric_id" : 12
  },
  {
    "id" : 1180,
    "value" : 3,
    "artist_id" : 169,
    "metric_id" : 14
  },
  {
    "id" : 1181,
    "value" : 1,
    "artist_id" : 169,
    "metric_id" : 15
  },
  {
    "id" : 1183,
    "value" : 4,
    "artist_id" : 170,
    "metric_id" : 2
  },
  {
    "id" : 1184,
    "value" : 2,
    "artist_id" : 170,
    "metric_id" : 5
  },
  {
    "id" : 1185,
    "value" : 4,
    "artist_id" : 170,
    "metric_id" : 9
  },
  {
    "id" : 1186,
    "value" : 2,
    "artist_id" : 170,
    "metric_id" : 12
  },
  {
    "id" : 1187,
    "value" : 1,
    "artist_id" : 170,
    "metric_id" : 11
  },
  {
    "id" : 1188,
    "value" : 1,
    "artist_id" : 170,
    "metric_id" : 13
  },
  {
    "id" : 1189,
    "value" : 1,
    "artist_id" : 170,
    "metric_id" : 18
  },
  {
    "id" : 1190,
    "value" : 2,
    "artist_id" : 170,
    "metric_id" : 15
  },
  {
    "id" : 1192,
    "value" : 1,
    "artist_id" : 169,
    "metric_id" : 17
  },
  {
    "id" : 1193,
    "value" : 5,
    "artist_id" : 171,
    "metric_id" : 2
  },
  {
    "id" : 1194,
    "value" : 3,
    "artist_id" : 171,
    "metric_id" : 5
  },
  {
    "id" : 1195,
    "value" : 2,
    "artist_id" : 171,
    "metric_id" : 6
  },
  {
    "id" : 1196,
    "value" : 3,
    "artist_id" : 171,
    "metric_id" : 9
  },
  {
    "id" : 1197,
    "value" : 4,
    "artist_id" : 171,
    "metric_id" : 12
  },
  {
    "id" : 1198,
    "value" : 1,
    "artist_id" : 171,
    "metric_id" : 18
  },
  {
    "id" : 1199,
    "value" : 5,
    "artist_id" : 171,
    "metric_id" : 38
  },
  {
    "id" : 1201,
    "value" : 5,
    "artist_id" : 172,
    "metric_id" : 2
  },
  {
    "id" : 1202,
    "value" : 4,
    "artist_id" : 172,
    "metric_id" : 7
  },
  {
    "id" : 1203,
    "value" : 4,
    "artist_id" : 172,
    "metric_id" : 12
  },
  {
    "id" : 1204,
    "value" : 1,
    "artist_id" : 172,
    "metric_id" : 13
  },
  {
    "id" : 1205,
    "value" : 1,
    "artist_id" : 172,
    "metric_id" : 18
  },
  {
    "id" : 1207,
    "value" : 5,
    "artist_id" : 173,
    "metric_id" : 3
  },
  {
    "id" : 1208,
    "value" : 2,
    "artist_id" : 173,
    "metric_id" : 10
  },
  {
    "id" : 1209,
    "value" : 2,
    "artist_id" : 173,
    "metric_id" : 11
  },
  {
    "id" : 1210,
    "value" : 4,
    "artist_id" : 173,
    "metric_id" : 20
  },
  {
    "id" : 1211,
    "value" : 4,
    "artist_id" : 173,
    "metric_id" : 14
  },
  {
    "id" : 1213,
    "value" : 5,
    "artist_id" : 174,
    "metric_id" : 2
  },
  {
    "id" : 1214,
    "value" : 2,
    "artist_id" : 174,
    "metric_id" : 25
  },
  {
    "id" : 1215,
    "value" : 2,
    "artist_id" : 174,
    "metric_id" : 11
  },
  {
    "id" : 1216,
    "value" : 1,
    "artist_id" : 174,
    "metric_id" : 13
  },
  {
    "id" : 1217,
    "value" : 1,
    "artist_id" : 174,
    "metric_id" : 18
  },
  {
    "id" : 1218,
    "value" : 5,
    "artist_id" : 174,
    "metric_id" : 45
  },
  {
    "id" : 1220,
    "value" : 4,
    "artist_id" : 175,
    "metric_id" : 2
  },
  {
    "id" : 1221,
    "value" : 2,
    "artist_id" : 175,
    "metric_id" : 5
  },
  {
    "id" : 1222,
    "value" : 2,
    "artist_id" : 175,
    "metric_id" : 11
  },
  {
    "id" : 1223,
    "value" : 3,
    "artist_id" : 175,
    "metric_id" : 13
  },
  {
    "id" : 1224,
    "value" : 1,
    "artist_id" : 175,
    "metric_id" : 18
  },
  {
    "id" : 1226,
    "value" : 5,
    "artist_id" : 176,
    "metric_id" : 3
  },
  {
    "id" : 1227,
    "value" : 2,
    "artist_id" : 176,
    "metric_id" : 15
  },
  {
    "id" : 1228,
    "value" : 2,
    "artist_id" : 176,
    "metric_id" : 20
  },
  {
    "id" : 1229,
    "value" : 5,
    "artist_id" : 176,
    "metric_id" : 21
  },
  {
    "id" : 1231,
    "value" : 5,
    "artist_id" : 177,
    "metric_id" : 3
  },
  {
    "id" : 1232,
    "value" : 2,
    "artist_id" : 177,
    "metric_id" : 10
  },
  {
    "id" : 1233,
    "value" : 2,
    "artist_id" : 177,
    "metric_id" : 15
  },
  {
    "id" : 1234,
    "value" : 5,
    "artist_id" : 177,
    "metric_id" : 26
  },
  {
    "id" : 1236,
    "value" : 3,
    "artist_id" : 178,
    "metric_id" : 4
  },
  {
    "id" : 1237,
    "value" : 4,
    "artist_id" : 178,
    "metric_id" : 11
  },
  {
    "id" : 1238,
    "value" : 4,
    "artist_id" : 178,
    "metric_id" : 13
  },
  {
    "id" : 1239,
    "value" : 1,
    "artist_id" : 178,
    "metric_id" : 19
  },
  {
    "id" : 1240,
    "value" : 4,
    "artist_id" : 178,
    "metric_id" : 46
  },
  {
    "id" : 1241,
    "value" : 4,
    "artist_id" : 178,
    "metric_id" : 15
  },
  {
    "id" : 1243,
    "value" : 5,
    "artist_id" : 179,
    "metric_id" : 3
  },
  {
    "id" : 1244,
    "value" : 4,
    "artist_id" : 179,
    "metric_id" : 10
  },
  {
    "id" : 1245,
    "value" : 3,
    "artist_id" : 179,
    "metric_id" : 11
  },
  {
    "id" : 1246,
    "value" : 4,
    "artist_id" : 179,
    "metric_id" : 21
  },
  {
    "id" : 1248,
    "value" : 5,
    "artist_id" : 180,
    "metric_id" : 2
  },
  {
    "id" : 1249,
    "value" : 5,
    "artist_id" : 180,
    "metric_id" : 5
  },
  {
    "id" : 1250,
    "value" : 1,
    "artist_id" : 180,
    "metric_id" : 6
  },
  {
    "id" : 1251,
    "value" : 2,
    "artist_id" : 180,
    "metric_id" : 14
  },
  {
    "id" : 1252,
    "value" : 2,
    "artist_id" : 180,
    "metric_id" : 15
  },
  {
    "id" : 1253,
    "value" : 1,
    "artist_id" : 180,
    "metric_id" : 18
  },
  {
    "id" : 1254,
    "value" : 4,
    "artist_id" : 180,
    "metric_id" : 38
  },
  {
    "id" : 1255,
    "value" : 3,
    "artist_id" : 180,
    "metric_id" : 9
  },
  {
    "id" : 1257,
    "value" : 3,
    "artist_id" : 181,
    "metric_id" : 2
  },
  {
    "id" : 1258,
    "value" : 3,
    "artist_id" : 181,
    "metric_id" : 5
  },
  {
    "id" : 1259,
    "value" : 4,
    "artist_id" : 181,
    "metric_id" : 10
  },
  {
    "id" : 1260,
    "value" : 2,
    "artist_id" : 181,
    "metric_id" : 11
  },
  {
    "id" : 1261,
    "value" : 1,
    "artist_id" : 181,
    "metric_id" : 18
  },
  {
    "id" : 1263,
    "value" : 4,
    "artist_id" : 182,
    "metric_id" : 2
  },
  {
    "id" : 1264,
    "value" : 4,
    "artist_id" : 182,
    "metric_id" : 5
  },
  {
    "id" : 1265,
    "value" : 3,
    "artist_id" : 182,
    "metric_id" : 6
  },
  {
    "id" : 1266,
    "value" : 2,
    "artist_id" : 182,
    "metric_id" : 13
  },
  {
    "id" : 1267,
    "value" : 2,
    "artist_id" : 182,
    "metric_id" : 11
  },
  {
    "id" : 1268,
    "value" : 2,
    "artist_id" : 182,
    "metric_id" : 15
  },
  {
    "id" : 1269,
    "value" : 1,
    "artist_id" : 182,
    "metric_id" : 17
  },
  {
    "id" : 1270,
    "value" : 1,
    "artist_id" : 182,
    "metric_id" : 18
  },
  {
    "id" : 1271,
    "value" : 4,
    "artist_id" : 182,
    "metric_id" : 38
  },
  {
    "id" : 1273,
    "value" : 3,
    "artist_id" : 183,
    "metric_id" : 2
  },
  {
    "id" : 1274,
    "value" : 2,
    "artist_id" : 183,
    "metric_id" : 5
  },
  {
    "id" : 1275,
    "value" : 3,
    "artist_id" : 183,
    "metric_id" : 7
  },
  {
    "id" : 1276,
    "value" : 3,
    "artist_id" : 183,
    "metric_id" : 11
  },
  {
    "id" : 1277,
    "value" : 3,
    "artist_id" : 183,
    "metric_id" : 13
  },
  {
    "id" : 1278,
    "value" : 1,
    "artist_id" : 183,
    "metric_id" : 17
  },
  {
    "id" : 1280,
    "value" : 3,
    "artist_id" : 184,
    "metric_id" : 2
  },
  {
    "id" : 1281,
    "value" : 2,
    "artist_id" : 184,
    "metric_id" : 5
  },
  {
    "id" : 1282,
    "value" : 2,
    "artist_id" : 184,
    "metric_id" : 6
  },
  {
    "id" : 1283,
    "value" : 3,
    "artist_id" : 184,
    "metric_id" : 11
  },
  {
    "id" : 1284,
    "value" : 3,
    "artist_id" : 184,
    "metric_id" : 12
  },
  {
    "id" : 1285,
    "value" : 1,
    "artist_id" : 184,
    "metric_id" : 17
  },
  {
    "id" : 1286,
    "value" : 3,
    "artist_id" : 184,
    "metric_id" : 34
  },
  {
    "id" : 1288,
    "value" : 3,
    "artist_id" : 185,
    "metric_id" : 4
  },
  {
    "id" : 1289,
    "value" : 3,
    "artist_id" : 185,
    "metric_id" : 10
  },
  {
    "id" : 1290,
    "value" : 3,
    "artist_id" : 185,
    "metric_id" : 11
  },
  {
    "id" : 1291,
    "value" : 3,
    "artist_id" : 185,
    "metric_id" : 13
  },
  {
    "id" : 1292,
    "value" : 3,
    "artist_id" : 185,
    "metric_id" : 46
  },
  {
    "id" : 1294,
    "value" : 2,
    "artist_id" : 186,
    "metric_id" : 2
  },
  {
    "id" : 1295,
    "value" : 4,
    "artist_id" : 186,
    "metric_id" : 5
  },
  {
    "id" : 1296,
    "value" : 2,
    "artist_id" : 186,
    "metric_id" : 10
  },
  {
    "id" : 1297,
    "value" : 4,
    "artist_id" : 186,
    "metric_id" : 11
  },
  {
    "id" : 1298,
    "value" : 5,
    "artist_id" : 186,
    "metric_id" : 13
  },
  {
    "id" : 1299,
    "value" : 1,
    "artist_id" : 186,
    "metric_id" : 18
  },
  {
    "id" : 1300,
    "value" : 3,
    "artist_id" : 186,
    "metric_id" : 34
  },
  {
    "id" : 1301,
    "value" : 1,
    "artist_id" : 186,
    "metric_id" : 32
  },
  {
    "id" : 1302,
    "value" : 2,
    "artist_id" : 186,
    "metric_id" : 9
  },
  {
    "id" : 1304,
    "value" : 5,
    "artist_id" : 187,
    "metric_id" : 2
  },
  {
    "id" : 1305,
    "value" : 2,
    "artist_id" : 187,
    "metric_id" : 6
  },
  {
    "id" : 1306,
    "value" : 3,
    "artist_id" : 187,
    "metric_id" : 5
  },
  {
    "id" : 1307,
    "value" : 3,
    "artist_id" : 187,
    "metric_id" : 7
  },
  {
    "id" : 1308,
    "value" : 2,
    "artist_id" : 187,
    "metric_id" : 11
  },
  {
    "id" : 1309,
    "value" : 1,
    "artist_id" : 187,
    "metric_id" : 12
  },
  {
    "id" : 1310,
    "value" : 4,
    "artist_id" : 187,
    "metric_id" : 14
  },
  {
    "id" : 1311,
    "value" : 1,
    "artist_id" : 187,
    "metric_id" : 17
  },
  {
    "id" : 1312,
    "value" : 1,
    "artist_id" : 187,
    "metric_id" : 34
  },
  {
    "id" : 1313,
    "value" : 2,
    "artist_id" : 187,
    "metric_id" : 38
  },
  {
    "id" : 1315,
    "value" : 5,
    "artist_id" : 188,
    "metric_id" : 3
  },
  {
    "id" : 1316,
    "value" : 3,
    "artist_id" : 188,
    "metric_id" : 10
  },
  {
    "id" : 1317,
    "value" : 3,
    "artist_id" : 188,
    "metric_id" : 11
  },
  {
    "id" : 1318,
    "value" : 1,
    "artist_id" : 188,
    "metric_id" : 15
  },
  {
    "id" : 1319,
    "value" : 5,
    "artist_id" : 188,
    "metric_id" : 21
  },
  {
    "id" : 1321,
    "value" : 5,
    "artist_id" : 189,
    "metric_id" : 2
  },
  {
    "id" : 1322,
    "value" : 3,
    "artist_id" : 189,
    "metric_id" : 5
  },
  {
    "id" : 1323,
    "value" : 2,
    "artist_id" : 189,
    "metric_id" : 11
  },
  {
    "id" : 1324,
    "value" : 1,
    "artist_id" : 189,
    "metric_id" : 17
  },
  {
    "id" : 1325,
    "value" : 4,
    "artist_id" : 189,
    "metric_id" : 14
  },
  {
    "id" : 1327,
    "value" : 2,
    "artist_id" : 189,
    "metric_id" : 9
  },
  {
    "id" : 1328,
    "value" : 5,
    "artist_id" : 190,
    "metric_id" : 2
  },
  {
    "id" : 1329,
    "value" : 3,
    "artist_id" : 190,
    "metric_id" : 10
  },
  {
    "id" : 1330,
    "value" : 1,
    "artist_id" : 190,
    "metric_id" : 11
  },
  {
    "id" : 1331,
    "value" : 2,
    "artist_id" : 190,
    "metric_id" : 15
  },
  {
    "id" : 1332,
    "value" : 1,
    "artist_id" : 190,
    "metric_id" : 17
  },
  {
    "id" : 1333,
    "value" : 1,
    "artist_id" : 190,
    "metric_id" : 18
  },
  {
    "id" : 1334,
    "value" : 3,
    "artist_id" : 190,
    "metric_id" : 45
  },
  {
    "id" : 1335,
    "value" : 2,
    "artist_id" : 190,
    "metric_id" : 25
  },
  {
    "id" : 1337,
    "value" : 3,
    "artist_id" : 191,
    "metric_id" : 2
  },
  {
    "id" : 1338,
    "value" : 1,
    "artist_id" : 191,
    "metric_id" : 5
  },
  {
    "id" : 1339,
    "value" : 3,
    "artist_id" : 191,
    "metric_id" : 10
  },
  {
    "id" : 1340,
    "value" : 2,
    "artist_id" : 191,
    "metric_id" : 11
  },
  {
    "id" : 1341,
    "value" : 4,
    "artist_id" : 191,
    "metric_id" : 13
  },
  {
    "id" : 1342,
    "value" : 1,
    "artist_id" : 191,
    "metric_id" : 18
  },
  {
    "id" : 1343,
    "value" : 2,
    "artist_id" : 191,
    "metric_id" : 35
  },
  {
    "id" : 1345,
    "value" : 5,
    "artist_id" : 192,
    "metric_id" : 4
  },
  {
    "id" : 1346,
    "value" : 5,
    "artist_id" : 192,
    "metric_id" : 15
  },
  {
    "id" : 1348,
    "value" : 5,
    "artist_id" : 193,
    "metric_id" : 3
  },
  {
    "id" : 1349,
    "value" : 2,
    "artist_id" : 193,
    "metric_id" : 15
  },
  {
    "id" : 1350,
    "value" : 4,
    "artist_id" : 193,
    "metric_id" : 21
  },
  {
    "id" : 1351,
    "value" : 2,
    "artist_id" : 193,
    "metric_id" : 22
  },
  {
    "id" : 1353,
    "value" : 5,
    "artist_id" : 194,
    "metric_id" : 2
  },
  {
    "id" : 1354,
    "value" : 3,
    "artist_id" : 194,
    "metric_id" : 5
  },
  {
    "id" : 1355,
    "value" : 2,
    "artist_id" : 194,
    "metric_id" : 8
  },
  {
    "id" : 1356,
    "value" : 3,
    "artist_id" : 194,
    "metric_id" : 9
  },
  {
    "id" : 1357,
    "value" : 2,
    "artist_id" : 194,
    "metric_id" : 11
  },
  {
    "id" : 1358,
    "value" : 3,
    "artist_id" : 194,
    "metric_id" : 13
  },
  {
    "id" : 1359,
    "value" : 1,
    "artist_id" : 194,
    "metric_id" : 17
  },
  {
    "id" : 1360,
    "value" : 4,
    "artist_id" : 194,
    "metric_id" : 43
  },
  {
    "id" : 1362,
    "value" : 5,
    "artist_id" : 195,
    "metric_id" : 3
  },
  {
    "id" : 1363,
    "value" : 2,
    "artist_id" : 195,
    "metric_id" : 10
  },
  {
    "id" : 1364,
    "value" : 2,
    "artist_id" : 195,
    "metric_id" : 16
  },
  {
    "id" : 1365,
    "value" : 4,
    "artist_id" : 195,
    "metric_id" : 15
  },
  {
    "id" : 1367,
    "value" : 3,
    "artist_id" : 195,
    "metric_id" : 26
  },
  {
    "id" : 1369,
    "value" : 3,
    "artist_id" : 196,
    "metric_id" : 3
  },
  {
    "id" : 1370,
    "value" : 3,
    "artist_id" : 196,
    "metric_id" : 12
  },
  {
    "id" : 1371,
    "value" : 4,
    "artist_id" : 196,
    "metric_id" : 13
  },
  {
    "id" : 1372,
    "value" : 2,
    "artist_id" : 196,
    "metric_id" : 11
  },
  {
    "id" : 1373,
    "value" : 2,
    "artist_id" : 196,
    "metric_id" : 15
  },
  {
    "id" : 1374,
    "value" : 4,
    "artist_id" : 196,
    "metric_id" : 26
  },
  {
    "id" : 1375,
    "value" : 1,
    "artist_id" : 196,
    "metric_id" : 23
  },
  {
    "id" : 1376,
    "value" : 1,
    "artist_id" : 196,
    "metric_id" : 17
  },
  {
    "id" : 1377,
    "value" : 3,
    "artist_id" : 196,
    "metric_id" : 37
  },
  {
    "id" : 1379,
    "value" : 5,
    "artist_id" : 197,
    "metric_id" : 3
  },
  {
    "id" : 1380,
    "value" : 5,
    "artist_id" : 197,
    "metric_id" : 15
  },
  {
    "id" : 1381,
    "value" : 3,
    "artist_id" : 197,
    "metric_id" : 26
  },
  {
    "id" : 1383,
    "value" : 5,
    "artist_id" : 198,
    "metric_id" : 2
  },
  {
    "id" : 1384,
    "value" : 4,
    "artist_id" : 198,
    "metric_id" : 5
  },
  {
    "id" : 1385,
    "value" : 5,
    "artist_id" : 198,
    "metric_id" : 9
  },
  {
    "id" : 1386,
    "value" : 2,
    "artist_id" : 198,
    "metric_id" : 11
  },
  {
    "id" : 1387,
    "value" : 4,
    "artist_id" : 198,
    "metric_id" : 13
  },
  {
    "id" : 1388,
    "value" : 1,
    "artist_id" : 198,
    "metric_id" : 18
  },
  {
    "id" : 1389,
    "value" : 2,
    "artist_id" : 198,
    "metric_id" : 34
  },
  {
    "id" : 1391,
    "value" : 2,
    "artist_id" : 199,
    "metric_id" : 4
  },
  {
    "id" : 1392,
    "value" : 4,
    "artist_id" : 199,
    "metric_id" : 46
  },
  {
    "id" : 1393,
    "value" : 5,
    "artist_id" : 199,
    "metric_id" : 47
  },
  {
    "id" : 1394,
    "value" : 4,
    "artist_id" : 199,
    "metric_id" : 14
  },
  {
    "id" : 1395,
    "value" : 2,
    "artist_id" : 199,
    "metric_id" : 15
  },
  {
    "id" : 1397,
    "value" : 1,
    "artist_id" : 199,
    "metric_id" : 38
  },
  {
    "id" : 1398,
    "value" : 2,
    "artist_id" : 200,
    "metric_id" : 2
  },
  {
    "id" : 1399,
    "value" : 3,
    "artist_id" : 200,
    "metric_id" : 10
  },
  {
    "id" : 1400,
    "value" : 3,
    "artist_id" : 200,
    "metric_id" : 13
  },
  {
    "id" : 1401,
    "value" : 3,
    "artist_id" : 200,
    "metric_id" : 11
  },
  {
    "id" : 1402,
    "value" : 1,
    "artist_id" : 200,
    "metric_id" : 17
  },
  {
    "id" : 1403,
    "value" : 2,
    "artist_id" : 200,
    "metric_id" : 36
  },
  {
    "id" : 1404,
    "value" : 4,
    "artist_id" : 200,
    "metric_id" : 35
  },
  {
    "id" : 1405,
    "value" : 3,
    "artist_id" : 200,
    "metric_id" : 27
  },
  {
    "id" : 1407,
    "value" : 4,
    "artist_id" : 201,
    "metric_id" : 2
  },
  {
    "id" : 1408,
    "value" : 3,
    "artist_id" : 201,
    "metric_id" : 5
  },
  {
    "id" : 1409,
    "value" : 3,
    "artist_id" : 201,
    "metric_id" : 14
  },
  {
    "id" : 1410,
    "value" : 2,
    "artist_id" : 201,
    "metric_id" : 13
  },
  {
    "id" : 1411,
    "value" : 2,
    "artist_id" : 201,
    "metric_id" : 15
  },
  {
    "id" : 1413,
    "value" : 5,
    "artist_id" : 202,
    "metric_id" : 2
  },
  {
    "id" : 1414,
    "value" : 4,
    "artist_id" : 202,
    "metric_id" : 5
  },
  {
    "id" : 1415,
    "value" : 4,
    "artist_id" : 202,
    "metric_id" : 14
  },
  {
    "id" : 1416,
    "value" : 1,
    "artist_id" : 202,
    "metric_id" : 18
  },
  {
    "id" : 1417,
    "value" : 3,
    "artist_id" : 202,
    "metric_id" : 38
  },
  {
    "id" : 1418,
    "value" : 1,
    "artist_id" : 202,
    "metric_id" : 9
  },
  {
    "id" : 1420,
    "value" : 1,
    "artist_id" : 201,
    "metric_id" : 18
  },
  {
    "id" : 1421,
    "value" : 5,
    "artist_id" : 203,
    "metric_id" : 2
  },
  {
    "id" : 1422,
    "value" : 4,
    "artist_id" : 203,
    "metric_id" : 5
  },
  {
    "id" : 1423,
    "value" : 2,
    "artist_id" : 203,
    "metric_id" : 6
  },
  {
    "id" : 1424,
    "value" : 4,
    "artist_id" : 203,
    "metric_id" : 14
  },
  {
    "id" : 1425,
    "value" : 1,
    "artist_id" : 203,
    "metric_id" : 18
  },
  {
    "id" : 1426,
    "value" : 1,
    "artist_id" : 203,
    "metric_id" : 9
  },
  {
    "id" : 1427,
    "value" : 4,
    "artist_id" : 203,
    "metric_id" : 38
  },
  {
    "id" : 1428,
    "value" : 2,
    "artist_id" : 203,
    "metric_id" : 11
  },
  {
    "id" : 1430,
    "value" : 5,
    "artist_id" : 204,
    "metric_id" : 2
  },
  {
    "id" : 1431,
    "value" : 5,
    "artist_id" : 204,
    "metric_id" : 28
  },
  {
    "id" : 1432,
    "value" : 4,
    "artist_id" : 204,
    "metric_id" : 14
  },
  {
    "id" : 1433,
    "value" : 5,
    "artist_id" : 204,
    "metric_id" : 38
  },
  {
    "id" : 1435,
    "value" : 2,
    "artist_id" : 205,
    "metric_id" : 2
  },
  {
    "id" : 1436,
    "value" : 3,
    "artist_id" : 205,
    "metric_id" : 3
  },
  {
    "id" : 1437,
    "value" : 5,
    "artist_id" : 205,
    "metric_id" : 9
  },
  {
    "id" : 1438,
    "value" : 4,
    "artist_id" : 205,
    "metric_id" : 15
  },
  {
    "id" : 1439,
    "value" : 5,
    "artist_id" : 205,
    "metric_id" : 16
  },
  {
    "id" : 1440,
    "value" : 1,
    "artist_id" : 205,
    "metric_id" : 17
  },
  {
    "id" : 1441,
    "value" : 3,
    "artist_id" : 205,
    "metric_id" : 22
  },
  {
    "id" : 1443,
    "value" : 2,
    "artist_id" : 206,
    "metric_id" : 3
  },
  {
    "id" : 1444,
    "value" : 4,
    "artist_id" : 206,
    "metric_id" : 24
  },
  {
    "id" : 1445,
    "value" : 5,
    "artist_id" : 206,
    "metric_id" : 10
  },
  {
    "id" : 1446,
    "value" : 3,
    "artist_id" : 206,
    "metric_id" : 11
  },
  {
    "id" : 1447,
    "value" : 2,
    "artist_id" : 206,
    "metric_id" : 14
  },
  {
    "id" : 1449,
    "value" : 2,
    "artist_id" : 207,
    "metric_id" : 3
  },
  {
    "id" : 1450,
    "value" : 2,
    "artist_id" : 207,
    "metric_id" : 15
  },
  {
    "id" : 1451,
    "value" : 1,
    "artist_id" : 207,
    "metric_id" : 17
  },
  {
    "id" : 1452,
    "value" : 3,
    "artist_id" : 207,
    "metric_id" : 26
  },
  {
    "id" : 1453,
    "value" : 3,
    "artist_id" : 207,
    "metric_id" : 49
  },
  {
    "id" : 1455,
    "value" : 2,
    "artist_id" : 208,
    "metric_id" : 3
  },
  {
    "id" : 1456,
    "value" : 4,
    "artist_id" : 208,
    "metric_id" : 10
  },
  {
    "id" : 1457,
    "value" : 1,
    "artist_id" : 208,
    "metric_id" : 32
  },
  {
    "id" : 1458,
    "value" : 3,
    "artist_id" : 208,
    "metric_id" : 37
  },
  {
    "id" : 1460,
    "value" : 4,
    "artist_id" : 209,
    "metric_id" : 3
  },
  {
    "id" : 1461,
    "value" : 5,
    "artist_id" : 209,
    "metric_id" : 15
  },
  {
    "id" : 1462,
    "value" : 3,
    "artist_id" : 209,
    "metric_id" : 26
  },
  {
    "id" : 1463,
    "value" : 2,
    "artist_id" : 209,
    "metric_id" : 13
  },
  {
    "id" : 1464,
    "value" : 3,
    "artist_id" : 209,
    "metric_id" : 43
  },
  {
    "id" : 1466,
    "value" : 4,
    "artist_id" : 210,
    "metric_id" : 3
  },
  {
    "id" : 1467,
    "value" : 4,
    "artist_id" : 210,
    "metric_id" : 14
  },
  {
    "id" : 1468,
    "value" : 2,
    "artist_id" : 210,
    "metric_id" : 15
  },
  {
    "id" : 1469,
    "value" : 2,
    "artist_id" : 210,
    "metric_id" : 31
  },
  {
    "id" : 1470,
    "value" : 4,
    "artist_id" : 210,
    "metric_id" : 38
  },
  {
    "id" : 1471,
    "value" : 1,
    "artist_id" : 210,
    "metric_id" : 2
  },
  {
    "id" : 1472,
    "value" : 5,
    "artist_id" : 210,
    "metric_id" : 26
  },
  {
    "id" : 1473,
    "value" : 3,
    "artist_id" : 210,
    "metric_id" : 37
  },
  {
    "id" : 1475,
    "value" : 3,
    "artist_id" : 211,
    "metric_id" : 3
  },
  {
    "id" : 1476,
    "value" : 1,
    "artist_id" : 211,
    "metric_id" : 13
  },
  {
    "id" : 1477,
    "value" : 3,
    "artist_id" : 211,
    "metric_id" : 15
  },
  {
    "id" : 1478,
    "value" : 2,
    "artist_id" : 211,
    "metric_id" : 16
  },
  {
    "id" : 1479,
    "value" : 4,
    "artist_id" : 211,
    "metric_id" : 26
  },
  {
    "id" : 1480,
    "value" : 3,
    "artist_id" : 211,
    "metric_id" : 43
  },
  {
    "id" : 1482,
    "value" : 4,
    "artist_id" : 212,
    "metric_id" : 2
  },
  {
    "id" : 1483,
    "value" : 5,
    "artist_id" : 212,
    "metric_id" : 5
  },
  {
    "id" : 1484,
    "value" : 3,
    "artist_id" : 212,
    "metric_id" : 14
  },
  {
    "id" : 1485,
    "value" : 1,
    "artist_id" : 212,
    "metric_id" : 11
  },
  {
    "id" : 1486,
    "value" : 1,
    "artist_id" : 212,
    "metric_id" : 18
  },
  {
    "id" : 1487,
    "value" : 1,
    "artist_id" : 212,
    "metric_id" : 34
  },
  {
    "id" : 1488,
    "value" : 3,
    "artist_id" : 212,
    "metric_id" : 38
  },
  {
    "id" : 1490,
    "value" : 4,
    "artist_id" : 213,
    "metric_id" : 3
  },
  {
    "id" : 1491,
    "value" : 3,
    "artist_id" : 213,
    "metric_id" : 10
  },
  {
    "id" : 1492,
    "value" : 3,
    "artist_id" : 213,
    "metric_id" : 15
  },
  {
    "id" : 1493,
    "value" : 3,
    "artist_id" : 213,
    "metric_id" : 43
  },
  {
    "id" : 1494,
    "value" : 3,
    "artist_id" : 213,
    "metric_id" : 26
  },
  {
    "id" : 1495,
    "value" : 3,
    "artist_id" : 213,
    "metric_id" : 50
  },
  {
    "id" : 1497,
    "value" : 3,
    "artist_id" : 214,
    "metric_id" : 2
  },
  {
    "id" : 1498,
    "value" : 4,
    "artist_id" : 214,
    "metric_id" : 5
  },
  {
    "id" : 1499,
    "value" : 3,
    "artist_id" : 214,
    "metric_id" : 10
  },
  {
    "id" : 1500,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 11
  },
  {
    "id" : 1501,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 9
  },
  {
    "id" : 1502,
    "value" : 1,
    "artist_id" : 214,
    "metric_id" : 17
  },
  {
    "id" : 1503,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 16
  },
  {
    "id" : 1504,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 35
  },
  {
    "id" : 1505,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 32
  },
  {
    "id" : 1506,
    "value" : 2,
    "artist_id" : 214,
    "metric_id" : 13
  },
  {
    "id" : 1508,
    "value" : 4,
    "artist_id" : 215,
    "metric_id" : 6
  },
  {
    "id" : 1509,
    "value" : 4,
    "artist_id" : 215,
    "metric_id" : 42
  },
  {
    "id" : 1510,
    "value" : 3,
    "artist_id" : 215,
    "metric_id" : 32
  },
  {
    "id" : 1511,
    "value" : 4,
    "artist_id" : 215,
    "metric_id" : 12
  },
  {
    "id" : 1512,
    "value" : 4,
    "artist_id" : 215,
    "metric_id" : 44
  },
  {
    "id" : 1514,
    "value" : 1,
    "artist_id" : 215,
    "metric_id" : 18
  },
  {
    "id" : 1515,
    "value" : 5,
    "artist_id" : 216,
    "metric_id" : 2
  },
  {
    "id" : 1516,
    "value" : 2,
    "artist_id" : 216,
    "metric_id" : 7
  },
  {
    "id" : 1517,
    "value" : 2,
    "artist_id" : 216,
    "metric_id" : 8
  },
  {
    "id" : 1518,
    "value" : 3,
    "artist_id" : 216,
    "metric_id" : 9
  },
  {
    "id" : 1519,
    "value" : 4,
    "artist_id" : 216,
    "metric_id" : 12
  },
  {
    "id" : 1520,
    "value" : 4,
    "artist_id" : 216,
    "metric_id" : 44
  },
  {
    "id" : 1521,
    "value" : 1,
    "artist_id" : 216,
    "metric_id" : 18
  },
  {
    "id" : 1523,
    "value" : 1,
    "artist_id" : 217,
    "metric_id" : 2
  },
  {
    "id" : 1524,
    "value" : 3,
    "artist_id" : 217,
    "metric_id" : 34
  },
  {
    "id" : 1525,
    "value" : 3,
    "artist_id" : 217,
    "metric_id" : 5
  },
  {
    "id" : 1526,
    "value" : 3,
    "artist_id" : 217,
    "metric_id" : 11
  },
  {
    "id" : 1527,
    "value" : 4,
    "artist_id" : 217,
    "metric_id" : 14
  },
  {
    "id" : 1528,
    "value" : 2,
    "artist_id" : 217,
    "metric_id" : 35
  },
  {
    "id" : 1530,
    "value" : 4,
    "artist_id" : 218,
    "metric_id" : 2
  },
  {
    "id" : 1531,
    "value" : 3,
    "artist_id" : 218,
    "metric_id" : 9
  },
  {
    "id" : 1532,
    "value" : 2,
    "artist_id" : 218,
    "metric_id" : 12
  },
  {
    "id" : 1533,
    "value" : 2,
    "artist_id" : 218,
    "metric_id" : 14
  },
  {
    "id" : 1534,
    "value" : 4,
    "artist_id" : 218,
    "metric_id" : 15
  },
  {
    "id" : 1535,
    "value" : 5,
    "artist_id" : 218,
    "metric_id" : 16
  },
  {
    "id" : 1536,
    "value" : 1,
    "artist_id" : 218,
    "metric_id" : 17
  },
  {
    "id" : 1537,
    "value" : 1,
    "artist_id" : 218,
    "metric_id" : 18
  },
  {
    "id" : 1538,
    "value" : 2,
    "artist_id" : 218,
    "metric_id" : 47
  },
  {
    "id" : 1539,
    "value" : 4,
    "artist_id" : 218,
    "metric_id" : 50
  },
  {
    "id" : 1541,
    "value" : 3,
    "artist_id" : 219,
    "metric_id" : 2
  },
  {
    "id" : 1542,
    "value" : 5,
    "artist_id" : 219,
    "metric_id" : 5
  },
  {
    "id" : 1543,
    "value" : 1,
    "artist_id" : 219,
    "metric_id" : 10
  },
  {
    "id" : 1544,
    "value" : 2,
    "artist_id" : 219,
    "metric_id" : 11
  },
  {
    "id" : 1545,
    "value" : 2,
    "artist_id" : 219,
    "metric_id" : 13
  },
  {
    "id" : 1546,
    "value" : 1,
    "artist_id" : 219,
    "metric_id" : 17
  },
  {
    "id" : 1547,
    "value" : 3,
    "artist_id" : 219,
    "metric_id" : 14
  },
  {
    "id" : 1549,
    "value" : 3,
    "artist_id" : 220,
    "metric_id" : 2
  },
  {
    "id" : 1550,
    "value" : 4,
    "artist_id" : 220,
    "metric_id" : 5
  },
  {
    "id" : 1551,
    "value" : 1,
    "artist_id" : 220,
    "metric_id" : 10
  },
  {
    "id" : 1552,
    "value" : 1,
    "artist_id" : 220,
    "metric_id" : 11
  },
  {
    "id" : 1553,
    "value" : 3,
    "artist_id" : 220,
    "metric_id" : 14
  },
  {
    "id" : 1554,
    "value" : 1,
    "artist_id" : 220,
    "metric_id" : 17
  },
  {
    "id" : 1555,
    "value" : 1,
    "artist_id" : 220,
    "metric_id" : 25
  },
  {
    "id" : 1556,
    "value" : 2,
    "artist_id" : 220,
    "metric_id" : 34
  },
  {
    "id" : 1557,
    "value" : 3,
    "artist_id" : 220,
    "metric_id" : 51
  },
  {
    "id" : 1559,
    "value" : 5,
    "artist_id" : 221,
    "metric_id" : 2
  },
  {
    "id" : 1560,
    "value" : 3,
    "artist_id" : 221,
    "metric_id" : 5
  },
  {
    "id" : 1561,
    "value" : 3,
    "artist_id" : 221,
    "metric_id" : 25
  },
  {
    "id" : 1562,
    "value" : 5,
    "artist_id" : 221,
    "metric_id" : 9
  },
  {
    "id" : 1563,
    "value" : 3,
    "artist_id" : 221,
    "metric_id" : 12
  },
  {
    "id" : 1564,
    "value" : 2,
    "artist_id" : 221,
    "metric_id" : 15
  },
  {
    "id" : 1565,
    "value" : 2,
    "artist_id" : 221,
    "metric_id" : 13
  },
  {
    "id" : 1566,
    "value" : 1,
    "artist_id" : 221,
    "metric_id" : 17
  },
  {
    "id" : 1567,
    "value" : 2,
    "artist_id" : 221,
    "metric_id" : 44
  },
  {
    "id" : 1568,
    "value" : 2,
    "artist_id" : 221,
    "metric_id" : 50
  },
  {
    "id" : 1570,
    "value" : 4,
    "artist_id" : 222,
    "metric_id" : 4
  },
  {
    "id" : 1571,
    "value" : 2,
    "artist_id" : 222,
    "metric_id" : 10
  },
  {
    "id" : 1572,
    "value" : 2,
    "artist_id" : 222,
    "metric_id" : 11
  },
  {
    "id" : 1573,
    "value" : 1,
    "artist_id" : 222,
    "metric_id" : 13
  },
  {
    "id" : 1574,
    "value" : 4,
    "artist_id" : 222,
    "metric_id" : 15
  },
  {
    "id" : 1576,
    "value" : 5,
    "artist_id" : 223,
    "metric_id" : 2
  },
  {
    "id" : 1577,
    "value" : 4,
    "artist_id" : 223,
    "metric_id" : 8
  },
  {
    "id" : 1578,
    "value" : 2,
    "artist_id" : 223,
    "metric_id" : 9
  },
  {
    "id" : 1579,
    "value" : 4,
    "artist_id" : 223,
    "metric_id" : 12
  },
  {
    "id" : 1580,
    "value" : 1,
    "artist_id" : 223,
    "metric_id" : 18
  },
  {
    "id" : 1581,
    "value" : 2,
    "artist_id" : 223,
    "metric_id" : 43
  },
  {
    "id" : 1583,
    "value" : 5,
    "artist_id" : 224,
    "metric_id" : 2
  },
  {
    "id" : 1584,
    "value" : 3,
    "artist_id" : 224,
    "metric_id" : 8
  },
  {
    "id" : 1585,
    "value" : 2,
    "artist_id" : 224,
    "metric_id" : 9
  },
  {
    "id" : 1586,
    "value" : 4,
    "artist_id" : 224,
    "metric_id" : 12
  },
  {
    "id" : 1587,
    "value" : 2,
    "artist_id" : 224,
    "metric_id" : 13
  },
  {
    "id" : 1588,
    "value" : 1,
    "artist_id" : 224,
    "metric_id" : 17
  },
  {
    "id" : 1589,
    "value" : 3,
    "artist_id" : 224,
    "metric_id" : 43
  },
  {
    "id" : 1591,
    "value" : 3,
    "artist_id" : 225,
    "metric_id" : 2
  },
  {
    "id" : 1592,
    "value" : 3,
    "artist_id" : 225,
    "metric_id" : 5
  },
  {
    "id" : 1593,
    "value" : 5,
    "artist_id" : 225,
    "metric_id" : 33
  },
  {
    "id" : 1594,
    "value" : 2,
    "artist_id" : 225,
    "metric_id" : 34
  },
  {
    "id" : 1595,
    "value" : 2,
    "artist_id" : 225,
    "metric_id" : 11
  },
  {
    "id" : 1596,
    "value" : 1,
    "artist_id" : 225,
    "metric_id" : 13
  },
  {
    "id" : 1597,
    "value" : 4,
    "artist_id" : 225,
    "metric_id" : 14
  },
  {
    "id" : 1598,
    "value" : 1,
    "artist_id" : 225,
    "metric_id" : 17
  },
  {
    "id" : 1599,
    "value" : 1,
    "artist_id" : 225,
    "metric_id" : 18
  },
  {
    "id" : 1600,
    "value" : 3,
    "artist_id" : 225,
    "metric_id" : 51
  },
  {
    "id" : 1602,
    "value" : 3,
    "artist_id" : 226,
    "metric_id" : 2
  },
  {
    "id" : 1603,
    "value" : 4,
    "artist_id" : 226,
    "metric_id" : 6
  },
  {
    "id" : 1604,
    "value" : 3,
    "artist_id" : 226,
    "metric_id" : 9
  },
  {
    "id" : 1605,
    "value" : 5,
    "artist_id" : 226,
    "metric_id" : 12
  },
  {
    "id" : 1606,
    "value" : 2,
    "artist_id" : 226,
    "metric_id" : 16
  },
  {
    "id" : 1607,
    "value" : 1,
    "artist_id" : 226,
    "metric_id" : 18
  },
  {
    "id" : 1608,
    "value" : 3,
    "artist_id" : 226,
    "metric_id" : 42
  },
  {
    "id" : 1610,
    "value" : 5,
    "artist_id" : 227,
    "metric_id" : 2
  },
  {
    "id" : 1611,
    "value" : 5,
    "artist_id" : 227,
    "metric_id" : 6
  },
  {
    "id" : 1612,
    "value" : 4,
    "artist_id" : 227,
    "metric_id" : 12
  },
  {
    "id" : 1613,
    "value" : 5,
    "artist_id" : 227,
    "metric_id" : 38
  },
  {
    "id" : 1614,
    "value" : 2,
    "artist_id" : 227,
    "metric_id" : 39
  },
  {
    "id" : 1616,
    "value" : 5,
    "artist_id" : 226,
    "metric_id" : 38
  },
  {
    "id" : 1617,
    "value" : 5,
    "artist_id" : 228,
    "metric_id" : 2
  },
  {
    "id" : 1618,
    "value" : 2,
    "artist_id" : 228,
    "metric_id" : 5
  },
  {
    "id" : 1619,
    "value" : 3,
    "artist_id" : 228,
    "metric_id" : 12
  },
  {
    "id" : 1620,
    "value" : 2,
    "artist_id" : 228,
    "metric_id" : 9
  },
  {
    "id" : 1621,
    "value" : 2,
    "artist_id" : 228,
    "metric_id" : 15
  },
  {
    "id" : 1622,
    "value" : 1,
    "artist_id" : 228,
    "metric_id" : 18
  },
  {
    "id" : 1623,
    "value" : 1,
    "artist_id" : 228,
    "metric_id" : 13
  },
  {
    "id" : 1624,
    "value" : 4,
    "artist_id" : 228,
    "metric_id" : 50
  },
  {
    "id" : 1626,
    "value" : 4,
    "artist_id" : 229,
    "metric_id" : 2
  },
  {
    "id" : 1627,
    "value" : 5,
    "artist_id" : 229,
    "metric_id" : 5
  },
  {
    "id" : 1628,
    "value" : 2,
    "artist_id" : 229,
    "metric_id" : 6
  },
  {
    "id" : 1629,
    "value" : 3,
    "artist_id" : 229,
    "metric_id" : 14
  },
  {
    "id" : 1630,
    "value" : 1,
    "artist_id" : 229,
    "metric_id" : 18
  },
  {
    "id" : 1631,
    "value" : 2,
    "artist_id" : 229,
    "metric_id" : 44
  },
  {
    "id" : 1633,
    "value" : 5,
    "artist_id" : 230,
    "metric_id" : 2
  },
  {
    "id" : 1634,
    "value" : 2,
    "artist_id" : 230,
    "metric_id" : 5
  },
  {
    "id" : 1635,
    "value" : 3,
    "artist_id" : 230,
    "metric_id" : 6
  },
  {
    "id" : 1636,
    "value" : 3,
    "artist_id" : 230,
    "metric_id" : 9
  },
  {
    "id" : 1637,
    "value" : 3,
    "artist_id" : 230,
    "metric_id" : 12
  },
  {
    "id" : 1638,
    "value" : 4,
    "artist_id" : 230,
    "metric_id" : 14
  },
  {
    "id" : 1639,
    "value" : 1,
    "artist_id" : 230,
    "metric_id" : 18
  },
  {
    "id" : 1640,
    "value" : 3,
    "artist_id" : 230,
    "metric_id" : 44
  },
  {
    "id" : 1641,
    "value" : 2,
    "artist_id" : 230,
    "metric_id" : 38
  },
  {
    "id" : 1643,
    "value" : 5,
    "artist_id" : 231,
    "metric_id" : 2
  },
  {
    "id" : 1644,
    "value" : 4,
    "artist_id" : 231,
    "metric_id" : 5
  },
  {
    "id" : 1645,
    "value" : 2,
    "artist_id" : 231,
    "metric_id" : 6
  },
  {
    "id" : 1646,
    "value" : 2,
    "artist_id" : 231,
    "metric_id" : 11
  },
  {
    "id" : 1647,
    "value" : 5,
    "artist_id" : 231,
    "metric_id" : 14
  },
  {
    "id" : 1648,
    "value" : 1,
    "artist_id" : 231,
    "metric_id" : 17
  },
  {
    "id" : 1649,
    "value" : 1,
    "artist_id" : 231,
    "metric_id" : 18
  },
  {
    "id" : 1650,
    "value" : 3,
    "artist_id" : 231,
    "metric_id" : 38
  },
  {
    "id" : 1652,
    "value" : 5,
    "artist_id" : 232,
    "metric_id" : 2
  },
  {
    "id" : 1653,
    "value" : 3,
    "artist_id" : 232,
    "metric_id" : 6
  },
  {
    "id" : 1654,
    "value" : 4,
    "artist_id" : 232,
    "metric_id" : 12
  },
  {
    "id" : 1655,
    "value" : 4,
    "artist_id" : 232,
    "metric_id" : 14
  },
  {
    "id" : 1656,
    "value" : 1,
    "artist_id" : 232,
    "metric_id" : 17
  },
  {
    "id" : 1657,
    "value" : 2,
    "artist_id" : 232,
    "metric_id" : 44
  },
  {
    "id" : 1658,
    "value" : 2,
    "artist_id" : 232,
    "metric_id" : 38
  },
  {
    "id" : 1659,
    "value" : 1,
    "artist_id" : 232,
    "metric_id" : 34
  },
  {
    "id" : 1661,
    "value" : 5,
    "artist_id" : 233,
    "metric_id" : 2
  },
  {
    "id" : 1662,
    "value" : 4,
    "artist_id" : 233,
    "metric_id" : 5
  },
  {
    "id" : 1663,
    "value" : 2,
    "artist_id" : 233,
    "metric_id" : 13
  },
  {
    "id" : 1664,
    "value" : 3,
    "artist_id" : 233,
    "metric_id" : 14
  },
  {
    "id" : 1665,
    "value" : 2,
    "artist_id" : 233,
    "metric_id" : 6
  },
  {
    "id" : 1666,
    "value" : 1,
    "artist_id" : 233,
    "metric_id" : 18
  },
  {
    "id" : 1668,
    "value" : 5,
    "artist_id" : 234,
    "metric_id" : 3
  },
  {
    "id" : 1669,
    "value" : 4,
    "artist_id" : 234,
    "metric_id" : 30
  },
  {
    "id" : 1670,
    "value" : 2,
    "artist_id" : 234,
    "metric_id" : 20
  },
  {
    "id" : 1671,
    "value" : 4,
    "artist_id" : 234,
    "metric_id" : 10
  },
  {
    "id" : 1672,
    "value" : 2,
    "artist_id" : 234,
    "metric_id" : 11
  },
  {
    "id" : 1673,
    "value" : 4,
    "artist_id" : 234,
    "metric_id" : 14
  },
  {
    "id" : 1675,
    "value" : 3,
    "artist_id" : 235,
    "metric_id" : 2
  },
  {
    "id" : 1676,
    "value" : 3,
    "artist_id" : 235,
    "metric_id" : 5
  },
  {
    "id" : 1677,
    "value" : 2,
    "artist_id" : 235,
    "metric_id" : 34
  },
  {
    "id" : 1678,
    "value" : 2,
    "artist_id" : 235,
    "metric_id" : 32
  },
  {
    "id" : 1679,
    "value" : 1,
    "artist_id" : 235,
    "metric_id" : 18
  },
  {
    "id" : 1680,
    "value" : 3,
    "artist_id" : 235,
    "metric_id" : 51
  },
  {
    "id" : 1681,
    "value" : 2,
    "artist_id" : 235,
    "metric_id" : 14
  },
  {
    "id" : 1682,
    "value" : 4,
    "artist_id" : 235,
    "metric_id" : 43
  },
  {
    "id" : 1683,
    "value" : 1,
    "artist_id" : 235,
    "metric_id" : 17
  },
  {
    "id" : 1685,
    "value" : 2,
    "artist_id" : 39,
    "metric_id" : 13
  },
  {
    "id" : 1686,
    "value" : 3,
    "artist_id" : 39,
    "metric_id" : 44
  },
  {
    "id" : 1688,
    "value" : 3,
    "artist_id" : 238,
    "metric_id" : 2
  },
  {
    "id" : 1689,
    "value" : 3,
    "artist_id" : 238,
    "metric_id" : 5
  },
  {
    "id" : 1690,
    "value" : 5,
    "artist_id" : 238,
    "metric_id" : 11
  },
  {
    "id" : 1691,
    "value" : 3,
    "artist_id" : 238,
    "metric_id" : 10
  },
  {
    "id" : 1692,
    "value" : 2,
    "artist_id" : 238,
    "metric_id" : 13
  },
  {
    "id" : 1693,
    "value" : 1,
    "artist_id" : 238,
    "metric_id" : 19
  },
  {
    "id" : 1694,
    "value" : 3,
    "artist_id" : 238,
    "metric_id" : 43
  },
  {
    "id" : 1696,
    "value" : 4,
    "artist_id" : 239,
    "metric_id" : 2
  },
  {
    "id" : 1697,
    "value" : 3,
    "artist_id" : 239,
    "metric_id" : 5
  },
  {
    "id" : 1698,
    "value" : 1,
    "artist_id" : 239,
    "metric_id" : 34
  },
  {
    "id" : 1699,
    "value" : 3,
    "artist_id" : 239,
    "metric_id" : 11
  },
  {
    "id" : 1700,
    "value" : 5,
    "artist_id" : 239,
    "metric_id" : 14
  },
  {
    "id" : 1701,
    "value" : 1,
    "artist_id" : 239,
    "metric_id" : 18
  },
  {
    "id" : 1703,
    "value" : 5,
    "artist_id" : 240,
    "metric_id" : 2
  },
  {
    "id" : 1704,
    "value" : 3,
    "artist_id" : 240,
    "metric_id" : 5
  },
  {
    "id" : 1705,
    "value" : 1,
    "artist_id" : 240,
    "metric_id" : 9
  },
  {
    "id" : 1706,
    "value" : 2,
    "artist_id" : 240,
    "metric_id" : 12
  },
  {
    "id" : 1707,
    "value" : 2,
    "artist_id" : 240,
    "metric_id" : 14
  },
  {
    "id" : 1708,
    "value" : 1,
    "artist_id" : 240,
    "metric_id" : 18
  },
  {
    "id" : 1709,
    "value" : 3,
    "artist_id" : 240,
    "metric_id" : 38
  },
  {
    "id" : 1710,
    "value" : 3,
    "artist_id" : 240,
    "metric_id" : 44
  },
  {
    "id" : 1712,
    "value" : 5,
    "artist_id" : 241,
    "metric_id" : 2
  },
  {
    "id" : 1713,
    "value" : 3,
    "artist_id" : 241,
    "metric_id" : 7
  },
  {
    "id" : 1714,
    "value" : 2,
    "artist_id" : 241,
    "metric_id" : 9
  },
  {
    "id" : 1715,
    "value" : 2,
    "artist_id" : 241,
    "metric_id" : 12
  },
  {
    "id" : 1716,
    "value" : 2,
    "artist_id" : 241,
    "metric_id" : 13
  },
  {
    "id" : 1717,
    "value" : 1,
    "artist_id" : 241,
    "metric_id" : 18
  },
  {
    "id" : 1718,
    "value" : 1,
    "artist_id" : 241,
    "metric_id" : 10
  },
  {
    "id" : 1719,
    "value" : 3,
    "artist_id" : 241,
    "metric_id" : 43
  },
  {
    "id" : 1720,
    "value" : 3,
    "artist_id" : 241,
    "metric_id" : 50
  },
  {
    "id" : 1722,
    "value" : 4,
    "artist_id" : 242,
    "metric_id" : 2
  },
  {
    "id" : 1723,
    "value" : 5,
    "artist_id" : 242,
    "metric_id" : 5
  },
  {
    "id" : 1724,
    "value" : 1,
    "artist_id" : 242,
    "metric_id" : 6
  },
  {
    "id" : 1725,
    "value" : 3,
    "artist_id" : 242,
    "metric_id" : 14
  },
  {
    "id" : 1726,
    "value" : 1,
    "artist_id" : 242,
    "metric_id" : 17
  },
  {
    "id" : 1728,
    "value" : 3,
    "artist_id" : 243,
    "metric_id" : 2
  },
  {
    "id" : 1729,
    "value" : 3,
    "artist_id" : 243,
    "metric_id" : 5
  },
  {
    "id" : 1730,
    "value" : 4,
    "artist_id" : 243,
    "metric_id" : 33
  },
  {
    "id" : 1731,
    "value" : 2,
    "artist_id" : 243,
    "metric_id" : 9
  },
  {
    "id" : 1732,
    "value" : 3,
    "artist_id" : 243,
    "metric_id" : 10
  },
  {
    "id" : 1733,
    "value" : 4,
    "artist_id" : 243,
    "metric_id" : 11
  },
  {
    "id" : 1734,
    "value" : 2,
    "artist_id" : 243,
    "metric_id" : 13
  },
  {
    "id" : 1735,
    "value" : 2,
    "artist_id" : 243,
    "metric_id" : 14
  },
  {
    "id" : 1736,
    "value" : 1,
    "artist_id" : 243,
    "metric_id" : 18
  },
  {
    "id" : 1737,
    "value" : 1,
    "artist_id" : 243,
    "metric_id" : 34
  },
  {
    "id" : 1738,
    "value" : 3,
    "artist_id" : 243,
    "metric_id" : 51
  },
  {
    "id" : 1740,
    "value" : 4,
    "artist_id" : 244,
    "metric_id" : 2
  },
  {
    "id" : 1741,
    "value" : 3,
    "artist_id" : 244,
    "metric_id" : 5
  },
  {
    "id" : 1742,
    "value" : 3,
    "artist_id" : 244,
    "metric_id" : 33
  },
  {
    "id" : 1743,
    "value" : 2,
    "artist_id" : 244,
    "metric_id" : 10
  },
  {
    "id" : 1744,
    "value" : 3,
    "artist_id" : 244,
    "metric_id" : 13
  },
  {
    "id" : 1745,
    "value" : 1,
    "artist_id" : 244,
    "metric_id" : 18
  },
  {
    "id" : 1746,
    "value" : 1,
    "artist_id" : 244,
    "metric_id" : 43
  },
  {
    "id" : 1747,
    "value" : 3,
    "artist_id" : 244,
    "metric_id" : 51
  },
  {
    "id" : 1748,
    "value" : 3,
    "artist_id" : 244,
    "metric_id" : 14
  },
  {
    "id" : 1750,
    "value" : 5,
    "artist_id" : 245,
    "metric_id" : 3
  },
  {
    "id" : 1751,
    "value" : 5,
    "artist_id" : 245,
    "metric_id" : 21
  },
  {
    "id" : 1752,
    "value" : 2,
    "artist_id" : 245,
    "metric_id" : 15
  },
  {
    "id" : 1754,
    "value" : 3,
    "artist_id" : 246,
    "metric_id" : 3
  },
  {
    "id" : 1755,
    "value" : 3,
    "artist_id" : 246,
    "metric_id" : 11
  },
  {
    "id" : 1756,
    "value" : 5,
    "artist_id" : 246,
    "metric_id" : 14
  },
  {
    "id" : 1757,
    "value" : 1,
    "artist_id" : 246,
    "metric_id" : 18
  },
  {
    "id" : 1758,
    "value" : 1,
    "artist_id" : 246,
    "metric_id" : 19
  },
  {
    "id" : 1759,
    "value" : 1,
    "artist_id" : 246,
    "metric_id" : 23
  },
  {
    "id" : 1760,
    "value" : 2,
    "artist_id" : 246,
    "metric_id" : 37
  },
  {
    "id" : 1761,
    "value" : 3,
    "artist_id" : 246,
    "metric_id" : 20
  },
  {
    "id" : 1762,
    "value" : 3,
    "artist_id" : 246,
    "metric_id" : 47
  },
  {
    "id" : 1763,
    "value" : 1,
    "artist_id" : 246,
    "metric_id" : 31
  },
  {
    "id" : 1764,
    "value" : 1,
    "artist_id" : 246,
    "metric_id" : 34
  },
  {
    "id" : 1766,
    "value" : 5,
    "artist_id" : 247,
    "metric_id" : 3
  },
  {
    "id" : 1767,
    "value" : 4,
    "artist_id" : 247,
    "metric_id" : 21
  },
  {
    "id" : 1768,
    "value" : 4,
    "artist_id" : 247,
    "metric_id" : 47
  },
  {
    "id" : 1769,
    "value" : 3,
    "artist_id" : 247,
    "metric_id" : 15
  },
  {
    "id" : 1770,
    "value" : 3,
    "artist_id" : 247,
    "metric_id" : 14
  },
  {
    "id" : 1772,
    "value" : 5,
    "artist_id" : 248,
    "metric_id" : 3
  },
  {
    "id" : 1773,
    "value" : 5,
    "artist_id" : 248,
    "metric_id" : 21
  },
  {
    "id" : 1774,
    "value" : 2,
    "artist_id" : 248,
    "metric_id" : 10
  },
  {
    "id" : 1775,
    "value" : 2,
    "artist_id" : 248,
    "metric_id" : 11
  },
  {
    "id" : 1776,
    "value" : 2,
    "artist_id" : 248,
    "metric_id" : 15
  },
  {
    "id" : 1778,
    "value" : 4,
    "artist_id" : 249,
    "metric_id" : 2
  },
  {
    "id" : 1779,
    "value" : 3,
    "artist_id" : 249,
    "metric_id" : 5
  },
  {
    "id" : 1780,
    "value" : 2,
    "artist_id" : 249,
    "metric_id" : 10
  },
  {
    "id" : 1781,
    "value" : 3,
    "artist_id" : 249,
    "metric_id" : 11
  },
  {
    "id" : 1782,
    "value" : 2,
    "artist_id" : 249,
    "metric_id" : 13
  },
  {
    "id" : 1783,
    "value" : 2,
    "artist_id" : 249,
    "metric_id" : 14
  },
  {
    "id" : 1785,
    "value" : 1,
    "artist_id" : 249,
    "metric_id" : 18
  },
  {
    "id" : 1786,
    "value" : 2,
    "artist_id" : 250,
    "metric_id" : 2
  },
  {
    "id" : 1787,
    "value" : 3,
    "artist_id" : 250,
    "metric_id" : 5
  },
  {
    "id" : 1788,
    "value" : 2,
    "artist_id" : 250,
    "metric_id" : 10
  },
  {
    "id" : 1789,
    "value" : 3,
    "artist_id" : 250,
    "metric_id" : 11
  },
  {
    "id" : 1790,
    "value" : 3,
    "artist_id" : 250,
    "metric_id" : 14
  },
  {
    "id" : 1791,
    "value" : 1,
    "artist_id" : 250,
    "metric_id" : 19
  },
  {
    "id" : 1792,
    "value" : 3,
    "artist_id" : 250,
    "metric_id" : 24
  },
  {
    "id" : 1793,
    "value" : 3,
    "artist_id" : 250,
    "metric_id" : 43
  },
  {
    "id" : 1795,
    "value" : 3,
    "artist_id" : 238,
    "metric_id" : 24
  },
  {
    "id" : 1796,
    "value" : 5,
    "artist_id" : 251,
    "metric_id" : 2
  },
  {
    "id" : 1797,
    "value" : 3,
    "artist_id" : 251,
    "metric_id" : 5
  },
  {
    "id" : 1798,
    "value" : 1,
    "artist_id" : 251,
    "metric_id" : 7
  },
  {
    "id" : 1799,
    "value" : 3,
    "artist_id" : 251,
    "metric_id" : 11
  },
  {
    "id" : 1800,
    "value" : 1,
    "artist_id" : 251,
    "metric_id" : 12
  },
  {
    "id" : 1801,
    "value" : 2,
    "artist_id" : 251,
    "metric_id" : 13
  },
  {
    "id" : 1802,
    "value" : 4,
    "artist_id" : 251,
    "metric_id" : 14
  },
  {
    "id" : 1803,
    "value" : 1,
    "artist_id" : 251,
    "metric_id" : 18
  },
  {
    "id" : 1804,
    "value" : 2,
    "artist_id" : 251,
    "metric_id" : 38
  },
  {
    "id" : 1806,
    "value" : 2,
    "artist_id" : 252,
    "metric_id" : 2
  },
  {
    "id" : 1807,
    "value" : 2,
    "artist_id" : 252,
    "metric_id" : 5
  },
  {
    "id" : 1808,
    "value" : 1,
    "artist_id" : 252,
    "metric_id" : 18
  },
  {
    "id" : 1809,
    "value" : 2,
    "artist_id" : 252,
    "metric_id" : 33
  },
  {
    "id" : 1810,
    "value" : 4,
    "artist_id" : 252,
    "metric_id" : 51
  },
  {
    "id" : 1811,
    "value" : 4,
    "artist_id" : 252,
    "metric_id" : 11
  },
  {
    "id" : 1812,
    "value" : 2,
    "artist_id" : 252,
    "metric_id" : 13
  },
  {
    "id" : 1813,
    "value" : 2,
    "artist_id" : 252,
    "metric_id" : 34
  },
  {
    "id" : 1815,
    "value" : 4,
    "artist_id" : 253,
    "metric_id" : 2
  },
  {
    "id" : 1816,
    "value" : 2,
    "artist_id" : 253,
    "metric_id" : 5
  },
  {
    "id" : 1817,
    "value" : 3,
    "artist_id" : 253,
    "metric_id" : 7
  },
  {
    "id" : 1818,
    "value" : 3,
    "artist_id" : 253,
    "metric_id" : 10
  },
  {
    "id" : 1819,
    "value" : 2,
    "artist_id" : 253,
    "metric_id" : 11
  },
  {
    "id" : 1820,
    "value" : 5,
    "artist_id" : 253,
    "metric_id" : 13
  },
  {
    "id" : 1822,
    "value" : 1,
    "artist_id" : 253,
    "metric_id" : 18
  },
  {
    "id" : 1824,
    "value" : 5,
    "artist_id" : 254,
    "metric_id" : 2
  },
  {
    "id" : 1825,
    "value" : 2,
    "artist_id" : 254,
    "metric_id" : 6
  },
  {
    "id" : 1826,
    "value" : 3,
    "artist_id" : 254,
    "metric_id" : 52
  },
  {
    "id" : 1827,
    "value" : 3,
    "artist_id" : 254,
    "metric_id" : 11
  },
  {
    "id" : 1828,
    "value" : 3,
    "artist_id" : 254,
    "metric_id" : 12
  },
  {
    "id" : 1829,
    "value" : 5,
    "artist_id" : 254,
    "metric_id" : 14
  },
  {
    "id" : 1830,
    "value" : 4,
    "artist_id" : 254,
    "metric_id" : 38
  },
  {
    "id" : 1831,
    "value" : 2,
    "artist_id" : 254,
    "metric_id" : 34
  },
  {
    "id" : 1833,
    "value" : 5,
    "artist_id" : 255,
    "metric_id" : 2
  },
  {
    "id" : 1834,
    "value" : 5,
    "artist_id" : 255,
    "metric_id" : 14
  },
  {
    "id" : 1835,
    "value" : 2,
    "artist_id" : 255,
    "metric_id" : 12
  },
  {
    "id" : 1836,
    "value" : 1,
    "artist_id" : 255,
    "metric_id" : 18
  },
  {
    "id" : 1837,
    "value" : 3,
    "artist_id" : 255,
    "metric_id" : 44
  },
  {
    "id" : 1838,
    "value" : 2,
    "artist_id" : 255,
    "metric_id" : 45
  },
  {
    "id" : 1839,
    "value" : 2,
    "artist_id" : 255,
    "metric_id" : 38
  },
  {
    "id" : 1841,
    "value" : 3,
    "artist_id" : 256,
    "metric_id" : 2
  },
  {
    "id" : 1842,
    "value" : 3,
    "artist_id" : 256,
    "metric_id" : 5
  },
  {
    "id" : 1843,
    "value" : 4,
    "artist_id" : 256,
    "metric_id" : 12
  },
  {
    "id" : 1844,
    "value" : 3,
    "artist_id" : 256,
    "metric_id" : 13
  },
  {
    "id" : 1845,
    "value" : 1,
    "artist_id" : 256,
    "metric_id" : 15
  },
  {
    "id" : 1846,
    "value" : 2,
    "artist_id" : 256,
    "metric_id" : 9
  },
  {
    "id" : 1847,
    "value" : 1,
    "artist_id" : 256,
    "metric_id" : 17
  },
  {
    "id" : 1848,
    "value" : 1,
    "artist_id" : 256,
    "metric_id" : 32
  },
  {
    "id" : 1849,
    "value" : 3,
    "artist_id" : 256,
    "metric_id" : 50
  },
  {
    "id" : 1851,
    "value" : 2,
    "artist_id" : 34,
    "metric_id" : 11
  },
  {
    "id" : 1852,
    "value" : 1,
    "artist_id" : 34,
    "metric_id" : 13
  },
  {
    "id" : 1853,
    "value" : 3,
    "artist_id" : 259,
    "metric_id" : 2
  },
  {
    "id" : 1854,
    "value" : 4,
    "artist_id" : 259,
    "metric_id" : 5
  },
  {
    "id" : 1855,
    "value" : 2,
    "artist_id" : 259,
    "metric_id" : 9
  },
  {
    "id" : 1856,
    "value" : 4,
    "artist_id" : 259,
    "metric_id" : 12
  },
  {
    "id" : 1857,
    "value" : 2,
    "artist_id" : 259,
    "metric_id" : 13
  },
  {
    "id" : 1858,
    "value" : 1,
    "artist_id" : 259,
    "metric_id" : 18
  },
  {
    "id" : 1859,
    "value" : 2,
    "artist_id" : 259,
    "metric_id" : 32
  },
  {
    "id" : 1860,
    "value" : 2,
    "artist_id" : 259,
    "metric_id" : 34
  },
  {
    "id" : 1861,
    "value" : 4,
    "artist_id" : 259,
    "metric_id" : 50
  },
  {
    "id" : 1863,
    "value" : 3,
    "artist_id" : 260,
    "metric_id" : 2
  },
  {
    "id" : 1864,
    "value" : 5,
    "artist_id" : 260,
    "metric_id" : 5
  },
  {
    "id" : 1865,
    "value" : 1,
    "artist_id" : 260,
    "metric_id" : 6
  },
  {
    "id" : 1866,
    "value" : 1,
    "artist_id" : 260,
    "metric_id" : 13
  },
  {
    "id" : 1867,
    "value" : 4,
    "artist_id" : 260,
    "metric_id" : 14
  },
  {
    "id" : 1868,
    "value" : 1,
    "artist_id" : 260,
    "metric_id" : 17
  },
  {
    "id" : 1869,
    "value" : 2,
    "artist_id" : 260,
    "metric_id" : 38
  },
  {
    "id" : 1870,
    "value" : 3,
    "artist_id" : 260,
    "metric_id" : 51
  },
  {
    "id" : 1871,
    "value" : 1,
    "artist_id" : 260,
    "metric_id" : 50
  },
  {
    "id" : 1872,
    "value" : 2,
    "artist_id" : 260,
    "metric_id" : 11
  },
  {
    "id" : 1874,
    "value" : 2,
    "artist_id" : 260,
    "metric_id" : 9
  },
  {
    "id" : 1875,
    "value" : 5,
    "artist_id" : 261,
    "metric_id" : 2
  },
  {
    "id" : 1876,
    "value" : 4,
    "artist_id" : 261,
    "metric_id" : 14
  },
  {
    "id" : 1877,
    "value" : 1,
    "artist_id" : 261,
    "metric_id" : 18
  },
  {
    "id" : 1878,
    "value" : 5,
    "artist_id" : 261,
    "metric_id" : 38
  },
  {
    "id" : 1879,
    "value" : 1,
    "artist_id" : 261,
    "metric_id" : 44
  },
  {
    "id" : 1881,
    "value" : 2,
    "artist_id" : 262,
    "metric_id" : 2
  },
  {
    "id" : 1882,
    "value" : 3,
    "artist_id" : 262,
    "metric_id" : 5
  },
  {
    "id" : 1883,
    "value" : 1,
    "artist_id" : 262,
    "metric_id" : 3
  },
  {
    "id" : 1884,
    "value" : 1,
    "artist_id" : 262,
    "metric_id" : 19
  },
  {
    "id" : 1885,
    "value" : 5,
    "artist_id" : 262,
    "metric_id" : 37
  },
  {
    "id" : 1886,
    "value" : 2,
    "artist_id" : 262,
    "metric_id" : 26
  },
  {
    "id" : 1887,
    "value" : 1,
    "artist_id" : 262,
    "metric_id" : 31
  },
  {
    "id" : 1888,
    "value" : 3,
    "artist_id" : 262,
    "metric_id" : 14
  },
  {
    "id" : 1889,
    "value" : 1,
    "artist_id" : 262,
    "metric_id" : 15
  },
  {
    "id" : 1891,
    "value" : 3,
    "artist_id" : 263,
    "metric_id" : 2
  },
  {
    "id" : 1892,
    "value" : 3,
    "artist_id" : 263,
    "metric_id" : 5
  },
  {
    "id" : 1893,
    "value" : 2,
    "artist_id" : 263,
    "metric_id" : 34
  },
  {
    "id" : 1894,
    "value" : 5,
    "artist_id" : 263,
    "metric_id" : 10
  },
  {
    "id" : 1895,
    "value" : 3,
    "artist_id" : 263,
    "metric_id" : 11
  },
  {
    "id" : 1896,
    "value" : 2,
    "artist_id" : 263,
    "metric_id" : 13
  },
  {
    "id" : 1897,
    "value" : 1,
    "artist_id" : 263,
    "metric_id" : 17
  },
  {
    "id" : 1898,
    "value" : 1,
    "artist_id" : 263,
    "metric_id" : 18
  },
  {
    "id" : 1899,
    "value" : 3,
    "artist_id" : 263,
    "metric_id" : 43
  },
  {
    "id" : 1900,
    "value" : 1,
    "artist_id" : 263,
    "metric_id" : 51
  },
  {
    "id" : 1902,
    "value" : 4,
    "artist_id" : 264,
    "metric_id" : 2
  },
  {
    "id" : 1903,
    "value" : 1,
    "artist_id" : 264,
    "metric_id" : 17
  },
  {
    "id" : 1904,
    "value" : 1,
    "artist_id" : 264,
    "metric_id" : 18
  },
  {
    "id" : 1905,
    "value" : 3,
    "artist_id" : 264,
    "metric_id" : 32
  },
  {
    "id" : 1906,
    "value" : 3,
    "artist_id" : 264,
    "metric_id" : 9
  },
  {
    "id" : 1907,
    "value" : 1,
    "artist_id" : 264,
    "metric_id" : 12
  },
  {
    "id" : 1908,
    "value" : 3,
    "artist_id" : 264,
    "metric_id" : 38
  },
  {
    "id" : 1909,
    "value" : 4,
    "artist_id" : 264,
    "metric_id" : 5
  },
  {
    "id" : 1910,
    "value" : 1,
    "artist_id" : 264,
    "metric_id" : 34
  },
  {
    "id" : 1911,
    "value" : 3,
    "artist_id" : 264,
    "metric_id" : 14
  },
  {
    "id" : 1913,
    "value" : 3,
    "artist_id" : 265,
    "metric_id" : 2
  },
  {
    "id" : 1914,
    "value" : 4,
    "artist_id" : 265,
    "metric_id" : 11
  },
  {
    "id" : 1915,
    "value" : 4,
    "artist_id" : 265,
    "metric_id" : 14
  },
  {
    "id" : 1916,
    "value" : 2,
    "artist_id" : 265,
    "metric_id" : 13
  },
  {
    "id" : 1917,
    "value" : 1,
    "artist_id" : 265,
    "metric_id" : 27
  },
  {
    "id" : 1918,
    "value" : 1,
    "artist_id" : 265,
    "metric_id" : 34
  },
  {
    "id" : 1919,
    "value" : 1,
    "artist_id" : 265,
    "metric_id" : 18
  },
  {
    "id" : 1921,
    "value" : 3,
    "artist_id" : 266,
    "metric_id" : 2
  },
  {
    "id" : 1922,
    "value" : 4,
    "artist_id" : 266,
    "metric_id" : 5
  },
  {
    "id" : 1923,
    "value" : 4,
    "artist_id" : 266,
    "metric_id" : 11
  },
  {
    "id" : 1924,
    "value" : 3,
    "artist_id" : 266,
    "metric_id" : 14
  },
  {
    "id" : 1925,
    "value" : 2,
    "artist_id" : 266,
    "metric_id" : 13
  },
  {
    "id" : 1926,
    "value" : 2,
    "artist_id" : 266,
    "metric_id" : 16
  },
  {
    "id" : 1927,
    "value" : 1,
    "artist_id" : 266,
    "metric_id" : 18
  },
  {
    "id" : 1928,
    "value" : 3,
    "artist_id" : 266,
    "metric_id" : 32
  },
  {
    "id" : 1930,
    "value" : 5,
    "artist_id" : 267,
    "metric_id" : 2
  },
  {
    "id" : 1931,
    "value" : 3,
    "artist_id" : 267,
    "metric_id" : 7
  },
  {
    "id" : 1932,
    "value" : 3,
    "artist_id" : 267,
    "metric_id" : 9
  },
  {
    "id" : 1933,
    "value" : 2,
    "artist_id" : 267,
    "metric_id" : 12
  },
  {
    "id" : 1934,
    "value" : 1,
    "artist_id" : 267,
    "metric_id" : 13
  },
  {
    "id" : 1935,
    "value" : 4,
    "artist_id" : 267,
    "metric_id" : 44
  },
  {
    "id" : 1936,
    "value" : 2,
    "artist_id" : 267,
    "metric_id" : 15
  },
  {
    "id" : 1938,
    "value" : 3,
    "artist_id" : 268,
    "metric_id" : 5
  },
  {
    "id" : 1939,
    "value" : 2,
    "artist_id" : 268,
    "metric_id" : 29
  },
  {
    "id" : 1940,
    "value" : 5,
    "artist_id" : 268,
    "metric_id" : 53
  },
  {
    "id" : 1941,
    "value" : 3,
    "artist_id" : 268,
    "metric_id" : 11
  },
  {
    "id" : 1942,
    "value" : 1,
    "artist_id" : 268,
    "metric_id" : 18
  },
  {
    "id" : 1943,
    "value" : 4,
    "artist_id" : 268,
    "metric_id" : 10
  },
  {
    "id" : 1944,
    "value" : 5,
    "artist_id" : 268,
    "metric_id" : 14
  },
  {
    "id" : 1946,
    "value" : 3,
    "artist_id" : 265,
    "metric_id" : 48
  },
  {
    "id" : 1947,
    "value" : 5,
    "artist_id" : 269,
    "metric_id" : 2
  },
  {
    "id" : 1948,
    "value" : 2,
    "artist_id" : 269,
    "metric_id" : 5
  },
  {
    "id" : 1949,
    "value" : 2,
    "artist_id" : 269,
    "metric_id" : 6
  },
  {
    "id" : 1950,
    "value" : 1,
    "artist_id" : 269,
    "metric_id" : 7
  },
  {
    "id" : 1951,
    "value" : 2,
    "artist_id" : 269,
    "metric_id" : 9
  },
  {
    "id" : 1952,
    "value" : 3,
    "artist_id" : 269,
    "metric_id" : 11
  },
  {
    "id" : 1953,
    "value" : 1,
    "artist_id" : 269,
    "metric_id" : 13
  },
  {
    "id" : 1954,
    "value" : 5,
    "artist_id" : 269,
    "metric_id" : 14
  },
  {
    "id" : 1955,
    "value" : 1,
    "artist_id" : 269,
    "metric_id" : 17
  },
  {
    "id" : 1956,
    "value" : 1,
    "artist_id" : 269,
    "metric_id" : 18
  },
  {
    "id" : 1957,
    "value" : 2,
    "artist_id" : 269,
    "metric_id" : 34
  },
  {
    "id" : 1958,
    "value" : 3,
    "artist_id" : 269,
    "metric_id" : 38
  },
  {
    "id" : 1960,
    "value" : 1,
    "artist_id" : 270,
    "metric_id" : 2
  },
  {
    "id" : 1961,
    "value" : 3,
    "artist_id" : 270,
    "metric_id" : 5
  },
  {
    "id" : 1962,
    "value" : 2,
    "artist_id" : 270,
    "metric_id" : 13
  },
  {
    "id" : 1963,
    "value" : 3,
    "artist_id" : 270,
    "metric_id" : 11
  },
  {
    "id" : 1964,
    "value" : 1,
    "artist_id" : 270,
    "metric_id" : 17
  },
  {
    "id" : 1965,
    "value" : 3,
    "artist_id" : 270,
    "metric_id" : 34
  },
  {
    "id" : 1966,
    "value" : 2,
    "artist_id" : 270,
    "metric_id" : 36
  },
  {
    "id" : 1968,
    "value" : 4,
    "artist_id" : 271,
    "metric_id" : 10
  },
  {
    "id" : 1969,
    "value" : 3,
    "artist_id" : 271,
    "metric_id" : 11
  },
  {
    "id" : 1970,
    "value" : 1,
    "artist_id" : 271,
    "metric_id" : 13
  },
  {
    "id" : 1971,
    "value" : 1,
    "artist_id" : 271,
    "metric_id" : 19
  },
  {
    "id" : 1972,
    "value" : 5,
    "artist_id" : 271,
    "metric_id" : 24
  },
  {
    "id" : 1973,
    "value" : 2,
    "artist_id" : 271,
    "metric_id" : 51
  },
  {
    "id" : 1974,
    "value" : 3,
    "artist_id" : 271,
    "metric_id" : 15
  },
  {
    "id" : 1976,
    "value" : 3,
    "artist_id" : 272,
    "metric_id" : 2
  },
  {
    "id" : 1977,
    "value" : 5,
    "artist_id" : 272,
    "metric_id" : 5
  },
  {
    "id" : 1978,
    "value" : 2,
    "artist_id" : 272,
    "metric_id" : 6
  },
  {
    "id" : 1979,
    "value" : 4,
    "artist_id" : 272,
    "metric_id" : 9
  },
  {
    "id" : 1980,
    "value" : 4,
    "artist_id" : 272,
    "metric_id" : 12
  },
  {
    "id" : 1981,
    "value" : 2,
    "artist_id" : 272,
    "metric_id" : 13
  },
  {
    "id" : 1982,
    "value" : 3,
    "artist_id" : 272,
    "metric_id" : 15
  },
  {
    "id" : 1983,
    "value" : 2,
    "artist_id" : 272,
    "metric_id" : 16
  },
  {
    "id" : 1984,
    "value" : 1,
    "artist_id" : 272,
    "metric_id" : 18
  },
  {
    "id" : 1985,
    "value" : 1,
    "artist_id" : 272,
    "metric_id" : 37
  },
  {
    "id" : 1986,
    "value" : 3,
    "artist_id" : 272,
    "metric_id" : 50
  },
  {
    "id" : 1987,
    "value" : 4,
    "artist_id" : 272,
    "metric_id" : 44
  },
  {
    "id" : 1989,
    "value" : 2,
    "artist_id" : 273,
    "metric_id" : 2
  },
  {
    "id" : 1990,
    "value" : 5,
    "artist_id" : 273,
    "metric_id" : 36
  },
  {
    "id" : 1991,
    "value" : 4,
    "artist_id" : 273,
    "metric_id" : 13
  },
  {
    "id" : 1992,
    "value" : 3,
    "artist_id" : 273,
    "metric_id" : 14
  },
  {
    "id" : 1993,
    "value" : 4,
    "artist_id" : 273,
    "metric_id" : 11
  },
  {
    "id" : 1995,
    "value" : 3,
    "artist_id" : 274,
    "metric_id" : 2
  },
  {
    "id" : 1996,
    "value" : 4,
    "artist_id" : 274,
    "metric_id" : 5
  },
  {
    "id" : 1997,
    "value" : 2,
    "artist_id" : 274,
    "metric_id" : 10
  },
  {
    "id" : 1998,
    "value" : 1,
    "artist_id" : 274,
    "metric_id" : 17
  },
  {
    "id" : 1999,
    "value" : 1,
    "artist_id" : 274,
    "metric_id" : 15
  },
  {
    "id" : 2000,
    "value" : 2,
    "artist_id" : 274,
    "metric_id" : 25
  },
  {
    "id" : 2001,
    "value" : 3,
    "artist_id" : 274,
    "metric_id" : 51
  },
  {
    "id" : 2002,
    "value" : 1,
    "artist_id" : 274,
    "metric_id" : 9
  },
  {
    "id" : 2004,
    "value" : 4,
    "artist_id" : 275,
    "metric_id" : 2
  },
  {
    "id" : 2005,
    "value" : 3,
    "artist_id" : 275,
    "metric_id" : 11
  },
  {
    "id" : 2006,
    "value" : 1,
    "artist_id" : 275,
    "metric_id" : 13
  },
  {
    "id" : 2007,
    "value" : 4,
    "artist_id" : 275,
    "metric_id" : 14
  },
  {
    "id" : 2008,
    "value" : 1,
    "artist_id" : 275,
    "metric_id" : 18
  },
  {
    "id" : 2009,
    "value" : 2,
    "artist_id" : 275,
    "metric_id" : 40
  },
  {
    "id" : 2010,
    "value" : 2,
    "artist_id" : 275,
    "metric_id" : 34
  },
  {
    "id" : 2012,
    "value" : 4,
    "artist_id" : 276,
    "metric_id" : 2
  },
  {
    "id" : 2013,
    "value" : 5,
    "artist_id" : 276,
    "metric_id" : 5
  },
  {
    "id" : 2014,
    "value" : 1,
    "artist_id" : 276,
    "metric_id" : 6
  },
  {
    "id" : 2015,
    "value" : 4,
    "artist_id" : 276,
    "metric_id" : 14
  },
  {
    "id" : 2016,
    "value" : 1,
    "artist_id" : 276,
    "metric_id" : 18
  },
  {
    "id" : 2017,
    "value" : 1,
    "artist_id" : 276,
    "metric_id" : 32
  },
  {
    "id" : 2018,
    "value" : 1,
    "artist_id" : 276,
    "metric_id" : 50
  },
  {
    "id" : 2019,
    "value" : 2,
    "artist_id" : 276,
    "metric_id" : 38
  },
  {
    "id" : 2020,
    "value" : 1,
    "artist_id" : 276,
    "metric_id" : 9
  },
  {
    "id" : 2022,
    "value" : 1,
    "artist_id" : 277,
    "metric_id" : 19
  },
  {
    "id" : 2023,
    "value" : 2,
    "artist_id" : 277,
    "metric_id" : 36
  },
  {
    "id" : 2024,
    "value" : 3,
    "artist_id" : 277,
    "metric_id" : 31
  },
  {
    "id" : 2025,
    "value" : 4,
    "artist_id" : 277,
    "metric_id" : 14
  },
  {
    "id" : 2027,
    "value" : 2,
    "artist_id" : 278,
    "metric_id" : 2
  },
  {
    "id" : 2028,
    "value" : 4,
    "artist_id" : 278,
    "metric_id" : 11
  },
  {
    "id" : 2029,
    "value" : 3,
    "artist_id" : 278,
    "metric_id" : 13
  },
  {
    "id" : 2030,
    "value" : 1,
    "artist_id" : 278,
    "metric_id" : 18
  },
  {
    "id" : 2031,
    "value" : 3,
    "artist_id" : 278,
    "metric_id" : 48
  },
  {
    "id" : 2032,
    "value" : 4,
    "artist_id" : 278,
    "metric_id" : 35
  },
  {
    "id" : 2034,
    "value" : 2,
    "artist_id" : 279,
    "metric_id" : 11
  },
  {
    "id" : 2035,
    "value" : 2,
    "artist_id" : 279,
    "metric_id" : 13
  },
  {
    "id" : 2036,
    "value" : 4,
    "artist_id" : 279,
    "metric_id" : 14
  },
  {
    "id" : 2037,
    "value" : 1,
    "artist_id" : 279,
    "metric_id" : 17
  },
  {
    "id" : 2038,
    "value" : 3,
    "artist_id" : 279,
    "metric_id" : 36
  },
  {
    "id" : 2039,
    "value" : 5,
    "artist_id" : 279,
    "metric_id" : 46
  },
  {
    "id" : 2041,
    "value" : 5,
    "artist_id" : 280,
    "metric_id" : 4
  },
  {
    "id" : 2043,
    "value" : 5,
    "artist_id" : 281,
    "metric_id" : 2
  },
  {
    "id" : 2044,
    "value" : 3,
    "artist_id" : 281,
    "metric_id" : 5
  },
  {
    "id" : 2045,
    "value" : 2,
    "artist_id" : 281,
    "metric_id" : 6
  },
  {
    "id" : 2046,
    "value" : 3,
    "artist_id" : 281,
    "metric_id" : 11
  },
  {
    "id" : 2047,
    "value" : 2,
    "artist_id" : 281,
    "metric_id" : 13
  },
  {
    "id" : 2048,
    "value" : 3,
    "artist_id" : 281,
    "metric_id" : 9
  },
  {
    "id" : 2049,
    "value" : 2,
    "artist_id" : 281,
    "metric_id" : 12
  },
  {
    "id" : 2050,
    "value" : 3,
    "artist_id" : 281,
    "metric_id" : 44
  },
  {
    "id" : 2052,
    "value" : 1,
    "artist_id" : 282,
    "metric_id" : 2
  },
  {
    "id" : 2053,
    "value" : 3,
    "artist_id" : 282,
    "metric_id" : 5
  },
  {
    "id" : 2054,
    "value" : 2,
    "artist_id" : 282,
    "metric_id" : 10
  },
  {
    "id" : 2055,
    "value" : 3,
    "artist_id" : 282,
    "metric_id" : 11
  },
  {
    "id" : 2056,
    "value" : 3,
    "artist_id" : 282,
    "metric_id" : 13
  },
  {
    "id" : 2057,
    "value" : 1,
    "artist_id" : 282,
    "metric_id" : 18
  },
  {
    "id" : 2058,
    "value" : 2,
    "artist_id" : 282,
    "metric_id" : 32
  },
  {
    "id" : 2059,
    "value" : 1,
    "artist_id" : 282,
    "metric_id" : 16
  },
  {
    "id" : 2060,
    "value" : 4,
    "artist_id" : 282,
    "metric_id" : 43
  },
  {
    "id" : 2062,
    "value" : 3,
    "artist_id" : 283,
    "metric_id" : 2
  },
  {
    "id" : 2063,
    "value" : 4,
    "artist_id" : 283,
    "metric_id" : 5
  },
  {
    "id" : 2064,
    "value" : 3,
    "artist_id" : 283,
    "metric_id" : 9
  },
  {
    "id" : 2065,
    "value" : 3,
    "artist_id" : 283,
    "metric_id" : 13
  },
  {
    "id" : 2066,
    "value" : 2,
    "artist_id" : 283,
    "metric_id" : 10
  },
  {
    "id" : 2067,
    "value" : 1,
    "artist_id" : 283,
    "metric_id" : 18
  },
  {
    "id" : 2068,
    "value" : 4,
    "artist_id" : 283,
    "metric_id" : 33
  },
  {
    "id" : 2069,
    "value" : 4,
    "artist_id" : 283,
    "metric_id" : 51
  },
  {
    "id" : 2070,
    "value" : 2,
    "artist_id" : 283,
    "metric_id" : 11
  },
  {
    "id" : 2072,
    "value" : 5,
    "artist_id" : 284,
    "metric_id" : 2
  },
  {
    "id" : 2073,
    "value" : 4,
    "artist_id" : 284,
    "metric_id" : 5
  },
  {
    "id" : 2074,
    "value" : 5,
    "artist_id" : 284,
    "metric_id" : 9
  },
  {
    "id" : 2075,
    "value" : 4,
    "artist_id" : 284,
    "metric_id" : 11
  },
  {
    "id" : 2076,
    "value" : 4,
    "artist_id" : 284,
    "metric_id" : 13
  },
  {
    "id" : 2077,
    "value" : 1,
    "artist_id" : 284,
    "metric_id" : 17
  },
  {
    "id" : 2078,
    "value" : 1,
    "artist_id" : 284,
    "metric_id" : 34
  },
  {
    "id" : 2079,
    "value" : 3,
    "artist_id" : 284,
    "metric_id" : 51
  },
  {
    "id" : 2081,
    "value" : 5,
    "artist_id" : 285,
    "metric_id" : 2
  },
  {
    "id" : 2082,
    "value" : 4,
    "artist_id" : 285,
    "metric_id" : 5
  },
  {
    "id" : 2083,
    "value" : 3,
    "artist_id" : 285,
    "metric_id" : 9
  },
  {
    "id" : 2084,
    "value" : 3,
    "artist_id" : 285,
    "metric_id" : 11
  },
  {
    "id" : 2085,
    "value" : 3,
    "artist_id" : 285,
    "metric_id" : 13
  },
  {
    "id" : 2086,
    "value" : 1,
    "artist_id" : 285,
    "metric_id" : 17
  },
  {
    "id" : 2087,
    "value" : 4,
    "artist_id" : 285,
    "metric_id" : 51
  },
  {
    "id" : 2088,
    "value" : 2,
    "artist_id" : 285,
    "metric_id" : 15
  },
  {
    "id" : 2090,
    "value" : 3,
    "artist_id" : 286,
    "metric_id" : 2
  },
  {
    "id" : 2091,
    "value" : 4,
    "artist_id" : 286,
    "metric_id" : 11
  },
  {
    "id" : 2092,
    "value" : 5,
    "artist_id" : 286,
    "metric_id" : 14
  },
  {
    "id" : 2093,
    "value" : 1,
    "artist_id" : 286,
    "metric_id" : 13
  },
  {
    "id" : 2094,
    "value" : 1,
    "artist_id" : 286,
    "metric_id" : 17
  },
  {
    "id" : 2095,
    "value" : 1,
    "artist_id" : 286,
    "metric_id" : 18
  },
  {
    "id" : 2096,
    "value" : 2,
    "artist_id" : 286,
    "metric_id" : 34
  },
  {
    "id" : 2098,
    "value" : 1,
    "artist_id" : 55,
    "metric_id" : 18
  },
  {
    "id" : 2099,
    "value" : 5,
    "artist_id" : 287,
    "metric_id" : 2
  },
  {
    "id" : 2100,
    "value" : 3,
    "artist_id" : 287,
    "metric_id" : 5
  },
  {
    "id" : 2101,
    "value" : 4,
    "artist_id" : 287,
    "metric_id" : 6
  },
  {
    "id" : 2102,
    "value" : 4,
    "artist_id" : 287,
    "metric_id" : 9
  },
  {
    "id" : 2103,
    "value" : 3,
    "artist_id" : 287,
    "metric_id" : 11
  },
  {
    "id" : 2104,
    "value" : 5,
    "artist_id" : 287,
    "metric_id" : 12
  },
  {
    "id" : 2105,
    "value" : 1,
    "artist_id" : 287,
    "metric_id" : 17
  },
  {
    "id" : 2106,
    "value" : 4,
    "artist_id" : 287,
    "metric_id" : 38
  },
  {
    "id" : 2107,
    "value" : 3,
    "artist_id" : 287,
    "metric_id" : 44
  },
  {
    "id" : 2108,
    "value" : 1,
    "artist_id" : 287,
    "metric_id" : 13
  },
  {
    "id" : 2110,
    "value" : 2,
    "artist_id" : 288,
    "metric_id" : 2
  },
  {
    "id" : 2111,
    "value" : 2,
    "artist_id" : 288,
    "metric_id" : 5
  },
  {
    "id" : 2112,
    "value" : 2,
    "artist_id" : 288,
    "metric_id" : 10
  },
  {
    "id" : 2113,
    "value" : 3,
    "artist_id" : 288,
    "metric_id" : 11
  },
  {
    "id" : 2114,
    "value" : 3,
    "artist_id" : 288,
    "metric_id" : 13
  },
  {
    "id" : 2115,
    "value" : 1,
    "artist_id" : 288,
    "metric_id" : 17
  },
  {
    "id" : 2116,
    "value" : 1,
    "artist_id" : 288,
    "metric_id" : 9
  },
  {
    "id" : 2117,
    "value" : 4,
    "artist_id" : 288,
    "metric_id" : 34
  },
  {
    "id" : 2118,
    "value" : 3,
    "artist_id" : 288,
    "metric_id" : 51
  },
  {
    "id" : 2120,
    "value" : 5,
    "artist_id" : 289,
    "metric_id" : 2
  },
  {
    "id" : 2121,
    "value" : 4,
    "artist_id" : 289,
    "metric_id" : 5
  },
  {
    "id" : 2122,
    "value" : 3,
    "artist_id" : 289,
    "metric_id" : 9
  },
  {
    "id" : 2123,
    "value" : 2,
    "artist_id" : 289,
    "metric_id" : 10
  },
  {
    "id" : 2124,
    "value" : 2,
    "artist_id" : 289,
    "metric_id" : 13
  },
  {
    "id" : 2125,
    "value" : 2,
    "artist_id" : 289,
    "metric_id" : 15
  },
  {
    "id" : 2126,
    "value" : 1,
    "artist_id" : 289,
    "metric_id" : 18
  },
  {
    "id" : 2127,
    "value" : 1,
    "artist_id" : 289,
    "metric_id" : 50
  },
  {
    "id" : 2128,
    "value" : 4,
    "artist_id" : 289,
    "metric_id" : 44
  },
  {
    "id" : 2130,
    "value" : 5,
    "artist_id" : 290,
    "metric_id" : 2
  },
  {
    "id" : 2131,
    "value" : 4,
    "artist_id" : 290,
    "metric_id" : 5
  },
  {
    "id" : 2132,
    "value" : 3,
    "artist_id" : 290,
    "metric_id" : 7
  },
  {
    "id" : 2133,
    "value" : 4,
    "artist_id" : 290,
    "metric_id" : 9
  },
  {
    "id" : 2134,
    "value" : 2,
    "artist_id" : 290,
    "metric_id" : 11
  },
  {
    "id" : 2135,
    "value" : 3,
    "artist_id" : 290,
    "metric_id" : 14
  },
  {
    "id" : 2136,
    "value" : 1,
    "artist_id" : 290,
    "metric_id" : 17
  },
  {
    "id" : 2137,
    "value" : 2,
    "artist_id" : 290,
    "metric_id" : 38
  },
  {
    "id" : 2138,
    "value" : 4,
    "artist_id" : 290,
    "metric_id" : 44
  },
  {
    "id" : 2140,
    "value" : 3,
    "artist_id" : 291,
    "metric_id" : 2
  },
  {
    "id" : 2141,
    "value" : 2,
    "artist_id" : 291,
    "metric_id" : 10
  },
  {
    "id" : 2142,
    "value" : 3,
    "artist_id" : 291,
    "metric_id" : 11
  },
  {
    "id" : 2143,
    "value" : 2,
    "artist_id" : 291,
    "metric_id" : 13
  },
  {
    "id" : 2144,
    "value" : 3,
    "artist_id" : 291,
    "metric_id" : 14
  },
  {
    "id" : 2145,
    "value" : 1,
    "artist_id" : 291,
    "metric_id" : 17
  },
  {
    "id" : 2146,
    "value" : 1,
    "artist_id" : 291,
    "metric_id" : 18
  },
  {
    "id" : 2147,
    "value" : 2,
    "artist_id" : 291,
    "metric_id" : 34
  },
  {
    "id" : 2149,
    "value" : 1,
    "artist_id" : 292,
    "metric_id" : 3
  },
  {
    "id" : 2150,
    "value" : 3,
    "artist_id" : 292,
    "metric_id" : 10
  },
  {
    "id" : 2151,
    "value" : 3,
    "artist_id" : 292,
    "metric_id" : 15
  },
  {
    "id" : 2152,
    "value" : 4,
    "artist_id" : 292,
    "metric_id" : 16
  },
  {
    "id" : 2153,
    "value" : 2,
    "artist_id" : 292,
    "metric_id" : 26
  },
  {
    "id" : 2154,
    "value" : 2,
    "artist_id" : 292,
    "metric_id" : 32
  },
  {
    "id" : 2155,
    "value" : 3,
    "artist_id" : 292,
    "metric_id" : 43
  },
  {
    "id" : 2156,
    "value" : 1,
    "artist_id" : 292,
    "metric_id" : 24
  },
  {
    "id" : 2158,
    "value" : 5,
    "artist_id" : 293,
    "metric_id" : 2
  },
  {
    "id" : 2159,
    "value" : 3,
    "artist_id" : 293,
    "metric_id" : 9
  },
  {
    "id" : 2160,
    "value" : 2,
    "artist_id" : 293,
    "metric_id" : 8
  },
  {
    "id" : 2161,
    "value" : 5,
    "artist_id" : 293,
    "metric_id" : 12
  },
  {
    "id" : 2162,
    "value" : 2,
    "artist_id" : 293,
    "metric_id" : 15
  },
  {
    "id" : 2163,
    "value" : 1,
    "artist_id" : 293,
    "metric_id" : 17
  },
  {
    "id" : 2164,
    "value" : 2,
    "artist_id" : 293,
    "metric_id" : 38
  },
  {
    "id" : 2165,
    "value" : 2,
    "artist_id" : 293,
    "metric_id" : 50
  },
  {
    "id" : 2166,
    "value" : 5,
    "artist_id" : 293,
    "metric_id" : 44
  },
  {
    "id" : 2168,
    "value" : 3,
    "artist_id" : 8,
    "metric_id" : 50
  },
  {
    "id" : 2169,
    "value" : 1,
    "artist_id" : 8,
    "metric_id" : 18
  },
  {
    "id" : 2170,
    "value" : 2,
    "artist_id" : 294,
    "metric_id" : 3
  },
  {
    "id" : 2171,
    "value" : 2,
    "artist_id" : 294,
    "metric_id" : 10
  },
  {
    "id" : 2172,
    "value" : 2,
    "artist_id" : 294,
    "metric_id" : 15
  },
  {
    "id" : 2173,
    "value" : 2,
    "artist_id" : 294,
    "metric_id" : 31
  },
  {
    "id" : 2174,
    "value" : 3,
    "artist_id" : 294,
    "metric_id" : 25
  },
  {
    "id" : 2175,
    "value" : 3,
    "artist_id" : 294,
    "metric_id" : 43
  },
  {
    "id" : 2176,
    "value" : 1,
    "artist_id" : 294,
    "metric_id" : 51
  },
  {
    "id" : 2178,
    "value" : 3,
    "artist_id" : 295,
    "metric_id" : 2
  },
  {
    "id" : 2179,
    "value" : 3,
    "artist_id" : 295,
    "metric_id" : 10
  },
  {
    "id" : 2180,
    "value" : 2,
    "artist_id" : 295,
    "metric_id" : 11
  },
  {
    "id" : 2181,
    "value" : 2,
    "artist_id" : 295,
    "metric_id" : 13
  },
  {
    "id" : 2182,
    "value" : 3,
    "artist_id" : 295,
    "metric_id" : 14
  },
  {
    "id" : 2183,
    "value" : 1,
    "artist_id" : 295,
    "metric_id" : 18
  },
  {
    "id" : 2184,
    "value" : 3,
    "artist_id" : 295,
    "metric_id" : 27
  },
  {
    "id" : 2186,
    "value" : 5,
    "artist_id" : 296,
    "metric_id" : 2
  },
  {
    "id" : 2187,
    "value" : 3,
    "artist_id" : 296,
    "metric_id" : 45
  },
  {
    "id" : 2188,
    "value" : 2,
    "artist_id" : 296,
    "metric_id" : 25
  },
  {
    "id" : 2189,
    "value" : 2,
    "artist_id" : 296,
    "metric_id" : 12
  },
  {
    "id" : 2190,
    "value" : 4,
    "artist_id" : 296,
    "metric_id" : 14
  },
  {
    "id" : 2191,
    "value" : 1,
    "artist_id" : 296,
    "metric_id" : 18
  },
  {
    "id" : 2192,
    "value" : 2,
    "artist_id" : 296,
    "metric_id" : 36
  },
  {
    "id" : 2194,
    "value" : 2,
    "artist_id" : 297,
    "metric_id" : 32
  },
  {
    "id" : 2195,
    "value" : 1,
    "artist_id" : 297,
    "metric_id" : 31
  },
  {
    "id" : 2196,
    "value" : 3,
    "artist_id" : 297,
    "metric_id" : 34
  },
  {
    "id" : 2197,
    "value" : 3,
    "artist_id" : 297,
    "metric_id" : 54
  },
  {
    "id" : 2198,
    "value" : 4,
    "artist_id" : 297,
    "metric_id" : 10
  },
  {
    "id" : 2199,
    "value" : 3,
    "artist_id" : 297,
    "metric_id" : 51
  },
  {
    "id" : 2200,
    "value" : 2,
    "artist_id" : 297,
    "metric_id" : 24
  },
  {
    "id" : 2201,
    "value" : 1,
    "artist_id" : 297,
    "metric_id" : 17
  },
  {
    "id" : 2202,
    "value" : 4,
    "artist_id" : 297,
    "metric_id" : 14
  },
  {
    "id" : 2203,
    "value" : 1,
    "artist_id" : 297,
    "metric_id" : 13
  },
  {
    "id" : 2205,
    "value" : 5,
    "artist_id" : 298,
    "metric_id" : 2
  },
  {
    "id" : 2206,
    "value" : 5,
    "artist_id" : 298,
    "metric_id" : 6
  },
  {
    "id" : 2207,
    "value" : 3,
    "artist_id" : 298,
    "metric_id" : 9
  },
  {
    "id" : 2208,
    "value" : 5,
    "artist_id" : 298,
    "metric_id" : 12
  },
  {
    "id" : 2209,
    "value" : 1,
    "artist_id" : 298,
    "metric_id" : 17
  },
  {
    "id" : 2210,
    "value" : 1,
    "artist_id" : 298,
    "metric_id" : 42
  },
  {
    "id" : 2211,
    "value" : 5,
    "artist_id" : 298,
    "metric_id" : 44
  },
  {
    "id" : 2213,
    "value" : 5,
    "artist_id" : 299,
    "metric_id" : 2
  },
  {
    "id" : 2214,
    "value" : 2,
    "artist_id" : 299,
    "metric_id" : 5
  },
  {
    "id" : 2215,
    "value" : 3,
    "artist_id" : 299,
    "metric_id" : 7
  },
  {
    "id" : 2216,
    "value" : 2,
    "artist_id" : 299,
    "metric_id" : 9
  },
  {
    "id" : 2217,
    "value" : 2,
    "artist_id" : 299,
    "metric_id" : 12
  },
  {
    "id" : 2218,
    "value" : 1,
    "artist_id" : 299,
    "metric_id" : 13
  },
  {
    "id" : 2219,
    "value" : 3,
    "artist_id" : 299,
    "metric_id" : 14
  },
  {
    "id" : 2220,
    "value" : 1,
    "artist_id" : 299,
    "metric_id" : 18
  },
  {
    "id" : 2222,
    "value" : 5,
    "artist_id" : 300,
    "metric_id" : 2
  },
  {
    "id" : 2223,
    "value" : 4,
    "artist_id" : 300,
    "metric_id" : 6
  },
  {
    "id" : 2224,
    "value" : 2,
    "artist_id" : 300,
    "metric_id" : 7
  },
  {
    "id" : 2225,
    "value" : 1,
    "artist_id" : 300,
    "metric_id" : 11
  },
  {
    "id" : 2226,
    "value" : 3,
    "artist_id" : 300,
    "metric_id" : 12
  },
  {
    "id" : 2227,
    "value" : 1,
    "artist_id" : 300,
    "metric_id" : 13
  },
  {
    "id" : 2228,
    "value" : 1,
    "artist_id" : 300,
    "metric_id" : 17
  },
  {
    "id" : 2229,
    "value" : 4,
    "artist_id" : 300,
    "metric_id" : 44
  },
  {
    "id" : 2230,
    "value" : 5,
    "artist_id" : 300,
    "metric_id" : 38
  },
  {
    "id" : 2232,
    "value" : 3,
    "artist_id" : 298,
    "metric_id" : 38
  },
  {
    "id" : 2234,
    "value" : 3,
    "artist_id" : 301,
    "metric_id" : 2
  },
  {
    "id" : 2235,
    "value" : 3,
    "artist_id" : 301,
    "metric_id" : 11
  },
  {
    "id" : 2236,
    "value" : 4,
    "artist_id" : 301,
    "metric_id" : 14
  },
  {
    "id" : 2237,
    "value" : 1,
    "artist_id" : 301,
    "metric_id" : 17
  },
  {
    "id" : 2238,
    "value" : 1,
    "artist_id" : 301,
    "metric_id" : 46
  },
  {
    "id" : 2239,
    "value" : 2,
    "artist_id" : 301,
    "metric_id" : 47
  },
  {
    "id" : 2240,
    "value" : 2,
    "artist_id" : 301,
    "metric_id" : 45
  },
  {
    "id" : 2241,
    "value" : 3,
    "artist_id" : 301,
    "metric_id" : 34
  },
  {
    "id" : 2243,
    "value" : 5,
    "artist_id" : 302,
    "metric_id" : 2
  },
  {
    "id" : 2244,
    "value" : 5,
    "artist_id" : 302,
    "metric_id" : 5
  },
  {
    "id" : 2245,
    "value" : 2,
    "artist_id" : 302,
    "metric_id" : 13
  },
  {
    "id" : 2246,
    "value" : 2,
    "artist_id" : 302,
    "metric_id" : 9
  },
  {
    "id" : 2247,
    "value" : 1,
    "artist_id" : 302,
    "metric_id" : 15
  },
  {
    "id" : 2248,
    "value" : 1,
    "artist_id" : 302,
    "metric_id" : 14
  },
  {
    "id" : 2249,
    "value" : 1,
    "artist_id" : 302,
    "metric_id" : 18
  },
  {
    "id" : 2250,
    "value" : 3,
    "artist_id" : 302,
    "metric_id" : 43
  },
  {
    "id" : 2252,
    "value" : 3,
    "artist_id" : 303,
    "metric_id" : 2
  },
  {
    "id" : 2253,
    "value" : 4,
    "artist_id" : 303,
    "metric_id" : 46
  },
  {
    "id" : 2254,
    "value" : 3,
    "artist_id" : 303,
    "metric_id" : 47
  },
  {
    "id" : 2255,
    "value" : 3,
    "artist_id" : 303,
    "metric_id" : 11
  },
  {
    "id" : 2256,
    "value" : 2,
    "artist_id" : 303,
    "metric_id" : 13
  },
  {
    "id" : 2257,
    "value" : 1,
    "artist_id" : 303,
    "metric_id" : 17
  },
  {
    "id" : 2258,
    "value" : 2,
    "artist_id" : 303,
    "metric_id" : 15
  },
  {
    "id" : 2260,
    "value" : 5,
    "artist_id" : 304,
    "metric_id" : 3
  },
  {
    "id" : 2261,
    "value" : 3,
    "artist_id" : 304,
    "metric_id" : 14
  },
  {
    "id" : 2262,
    "value" : 4,
    "artist_id" : 304,
    "metric_id" : 21
  },
  {
    "id" : 2263,
    "value" : 3,
    "artist_id" : 304,
    "metric_id" : 31
  },
  {
    "id" : 2264,
    "value" : 2,
    "artist_id" : 304,
    "metric_id" : 15
  },
  {
    "id" : 2265,
    "value" : 2,
    "artist_id" : 304,
    "metric_id" : 16
  },
  {
    "id" : 2267,
    "value" : 3,
    "artist_id" : 278,
    "metric_id" : 9
  },
  {
    "id" : 2268,
    "value" : 4,
    "artist_id" : 278,
    "metric_id" : 44
  },
  {
    "id" : 2269,
    "value" : 2,
    "artist_id" : 1,
    "metric_id" : 13
  },
  {
    "id" : 2270,
    "value" : 1,
    "artist_id" : 1,
    "metric_id" : 18
  },
  {
    "id" : 2271,
    "value" : 1,
    "artist_id" : 1,
    "metric_id" : 50
  },
  {
    "id" : 2272,
    "value" : 3,
    "artist_id" : 1,
    "metric_id" : 44
  },
  {
    "id" : 2273,
    "value" : 1,
    "artist_id" : 305,
    "metric_id" : 2
  },
  {
    "id" : 2274,
    "value" : 3,
    "artist_id" : 305,
    "metric_id" : 34
  },
  {
    "id" : 2275,
    "value" : 2,
    "artist_id" : 305,
    "metric_id" : 45
  },
  {
    "id" : 2276,
    "value" : 3,
    "artist_id" : 305,
    "metric_id" : 11
  },
  {
    "id" : 2277,
    "value" : 1,
    "artist_id" : 305,
    "metric_id" : 13
  },
  {
    "id" : 2278,
    "value" : 3,
    "artist_id" : 305,
    "metric_id" : 14
  },
  {
    "id" : 2279,
    "value" : 2,
    "artist_id" : 305,
    "metric_id" : 10
  },
  {
    "id" : 2280,
    "value" : 1,
    "artist_id" : 305,
    "metric_id" : 19
  },
  {
    "id" : 2281,
    "value" : 3,
    "artist_id" : 305,
    "metric_id" : 47
  },
  {
    "id" : 2283,
    "value" : 5,
    "artist_id" : 306,
    "metric_id" : 2
  },
  {
    "id" : 2284,
    "value" : 3,
    "artist_id" : 306,
    "metric_id" : 5
  },
  {
    "id" : 2285,
    "value" : 3,
    "artist_id" : 306,
    "metric_id" : 6
  },
  {
    "id" : 2286,
    "value" : 4,
    "artist_id" : 306,
    "metric_id" : 14
  },
  {
    "id" : 2287,
    "value" : 1,
    "artist_id" : 306,
    "metric_id" : 18
  },
  {
    "id" : 2288,
    "value" : 1,
    "artist_id" : 306,
    "metric_id" : 17
  },
  {
    "id" : 2289,
    "value" : 4,
    "artist_id" : 306,
    "metric_id" : 44
  },
  {
    "id" : 2290,
    "value" : 2,
    "artist_id" : 306,
    "metric_id" : 9
  },
  {
    "id" : 2291,
    "value" : 1,
    "artist_id" : 306,
    "metric_id" : 11
  },
  {
    "id" : 2293,
    "value" : 5,
    "artist_id" : 307,
    "metric_id" : 10
  },
  {
    "id" : 2294,
    "value" : 3,
    "artist_id" : 307,
    "metric_id" : 11
  },
  {
    "id" : 2295,
    "value" : 2,
    "artist_id" : 307,
    "metric_id" : 13
  },
  {
    "id" : 2296,
    "value" : 1,
    "artist_id" : 307,
    "metric_id" : 19
  },
  {
    "id" : 2297,
    "value" : 2,
    "artist_id" : 307,
    "metric_id" : 16
  },
  {
    "id" : 2298,
    "value" : 5,
    "artist_id" : 307,
    "metric_id" : 24
  },
  {
    "id" : 2299,
    "value" : 2,
    "artist_id" : 307,
    "metric_id" : 32
  },
  {
    "id" : 2300,
    "value" : 2,
    "artist_id" : 307,
    "metric_id" : 50
  },
  {
    "id" : 2301,
    "value" : 3,
    "artist_id" : 307,
    "metric_id" : 43
  },
  {
    "id" : 2303,
    "value" : 2,
    "artist_id" : 307,
    "metric_id" : 9
  },
  {
    "id" : 2304,
    "value" : 4,
    "artist_id" : 308,
    "metric_id" : 2
  },
  {
    "id" : 2305,
    "value" : 3,
    "artist_id" : 308,
    "metric_id" : 5
  },
  {
    "id" : 2306,
    "value" : 3,
    "artist_id" : 308,
    "metric_id" : 11
  },
  {
    "id" : 2307,
    "value" : 2,
    "artist_id" : 308,
    "metric_id" : 13
  },
  {
    "id" : 2308,
    "value" : 1,
    "artist_id" : 308,
    "metric_id" : 9
  },
  {
    "id" : 2309,
    "value" : 1,
    "artist_id" : 308,
    "metric_id" : 18
  },
  {
    "id" : 2310,
    "value" : 3,
    "artist_id" : 308,
    "metric_id" : 14
  },
  {
    "id" : 2311,
    "value" : 3,
    "artist_id" : 308,
    "metric_id" : 52
  },
  {
    "id" : 2312,
    "value" : 1,
    "artist_id" : 308,
    "metric_id" : 34
  },
  {
    "id" : 2314,
    "value" : 3,
    "artist_id" : 309,
    "metric_id" : 2
  },
  {
    "id" : 2315,
    "value" : 5,
    "artist_id" : 309,
    "metric_id" : 5
  },
  {
    "id" : 2316,
    "value" : 2,
    "artist_id" : 309,
    "metric_id" : 10
  },
  {
    "id" : 2317,
    "value" : 2,
    "artist_id" : 309,
    "metric_id" : 15
  },
  {
    "id" : 2318,
    "value" : 2,
    "artist_id" : 309,
    "metric_id" : 16
  },
  {
    "id" : 2319,
    "value" : 1,
    "artist_id" : 309,
    "metric_id" : 18
  },
  {
    "id" : 2320,
    "value" : 1,
    "artist_id" : 309,
    "metric_id" : 54
  },
  {
    "id" : 2321,
    "value" : 2,
    "artist_id" : 309,
    "metric_id" : 11
  },
  {
    "id" : 2322,
    "value" : 1,
    "artist_id" : 309,
    "metric_id" : 50
  },
  {
    "id" : 2323,
    "value" : 1,
    "artist_id" : 309,
    "metric_id" : 25
  },
  {
    "id" : 2325,
    "value" : 5,
    "artist_id" : 310,
    "metric_id" : 2
  },
  {
    "id" : 2326,
    "value" : 3,
    "artist_id" : 310,
    "metric_id" : 14
  },
  {
    "id" : 2327,
    "value" : 1,
    "artist_id" : 310,
    "metric_id" : 19
  },
  {
    "id" : 2328,
    "value" : 5,
    "artist_id" : 310,
    "metric_id" : 36
  },
  {
    "id" : 2330,
    "value" : 3,
    "artist_id" : 311,
    "metric_id" : 2
  },
  {
    "id" : 2331,
    "value" : 4,
    "artist_id" : 311,
    "metric_id" : 5
  },
  {
    "id" : 2332,
    "value" : 3,
    "artist_id" : 311,
    "metric_id" : 11
  },
  {
    "id" : 2333,
    "value" : 3,
    "artist_id" : 311,
    "metric_id" : 13
  },
  {
    "id" : 2334,
    "value" : 1,
    "artist_id" : 311,
    "metric_id" : 17
  },
  {
    "id" : 2335,
    "value" : 2,
    "artist_id" : 311,
    "metric_id" : 33
  },
  {
    "id" : 2336,
    "value" : 1,
    "artist_id" : 311,
    "metric_id" : 54
  },
  {
    "id" : 2337,
    "value" : 1,
    "artist_id" : 311,
    "metric_id" : 51
  },
  {
    "id" : 2339,
    "value" : 2,
    "artist_id" : 311,
    "metric_id" : 10
  },
  {
    "id" : 2340,
    "value" : 1,
    "artist_id" : 311,
    "metric_id" : 32
  },
  {
    "id" : 2341,
    "value" : 3,
    "artist_id" : 312,
    "metric_id" : 2
  },
  {
    "id" : 2342,
    "value" : 3,
    "artist_id" : 312,
    "metric_id" : 5
  },
  {
    "id" : 2343,
    "value" : 2,
    "artist_id" : 312,
    "metric_id" : 34
  },
  {
    "id" : 2344,
    "value" : 4,
    "artist_id" : 312,
    "metric_id" : 14
  },
  {
    "id" : 2345,
    "value" : 1,
    "artist_id" : 312,
    "metric_id" : 13
  },
  {
    "id" : 2346,
    "value" : 1,
    "artist_id" : 312,
    "metric_id" : 18
  },
  {
    "id" : 2347,
    "value" : 3,
    "artist_id" : 312,
    "metric_id" : 37
  },
  {
    "id" : 2348,
    "value" : 2,
    "artist_id" : 312,
    "metric_id" : 32
  },
  {
    "id" : 2350,
    "value" : 2,
    "artist_id" : 313,
    "metric_id" : 2
  },
  {
    "id" : 2351,
    "value" : 4,
    "artist_id" : 313,
    "metric_id" : 49
  },
  {
    "id" : 2352,
    "value" : 1,
    "artist_id" : 313,
    "metric_id" : 18
  },
  {
    "id" : 2353,
    "value" : 3,
    "artist_id" : 313,
    "metric_id" : 14
  },
  {
    "id" : 2354,
    "value" : 1,
    "artist_id" : 313,
    "metric_id" : 13
  },
  {
    "id" : 2355,
    "value" : 3,
    "artist_id" : 313,
    "metric_id" : 11
  },
  {
    "id" : 2357,
    "value" : 3,
    "artist_id" : 314,
    "metric_id" : 2
  },
  {
    "id" : 2358,
    "value" : 4,
    "artist_id" : 314,
    "metric_id" : 5
  },
  {
    "id" : 2359,
    "value" : 1,
    "artist_id" : 314,
    "metric_id" : 17
  },
  {
    "id" : 2360,
    "value" : 2,
    "artist_id" : 314,
    "metric_id" : 10
  },
  {
    "id" : 2361,
    "value" : 3,
    "artist_id" : 314,
    "metric_id" : 11
  },
  {
    "id" : 2362,
    "value" : 3,
    "artist_id" : 314,
    "metric_id" : 13
  },
  {
    "id" : 2363,
    "value" : 1,
    "artist_id" : 314,
    "metric_id" : 51
  },
  {
    "id" : 2364,
    "value" : 3,
    "artist_id" : 314,
    "metric_id" : 54
  },
  {
    "id" : 2365,
    "value" : 2,
    "artist_id" : 314,
    "metric_id" : 32
  },
  {
    "id" : 2367,
    "value" : 3,
    "artist_id" : 315,
    "metric_id" : 3
  },
  {
    "id" : 2368,
    "value" : 2,
    "artist_id" : 315,
    "metric_id" : 4
  },
  {
    "id" : 2369,
    "value" : 3,
    "artist_id" : 315,
    "metric_id" : 10
  },
  {
    "id" : 2370,
    "value" : 3,
    "artist_id" : 315,
    "metric_id" : 11
  },
  {
    "id" : 2371,
    "value" : 3,
    "artist_id" : 315,
    "metric_id" : 37
  },
  {
    "id" : 2372,
    "value" : 3,
    "artist_id" : 315,
    "metric_id" : 47
  },
  {
    "id" : 2373,
    "value" : 2,
    "artist_id" : 315,
    "metric_id" : 13
  },
  {
    "id" : 2375,
    "value" : 4,
    "artist_id" : 316,
    "metric_id" : 2
  },
  {
    "id" : 2376,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 5
  },
  {
    "id" : 2377,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 9
  },
  {
    "id" : 2378,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 14
  },
  {
    "id" : 2379,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 13
  },
  {
    "id" : 2380,
    "value" : 1,
    "artist_id" : 316,
    "metric_id" : 18
  },
  {
    "id" : 2381,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 11
  },
  {
    "id" : 2382,
    "value" : 1,
    "artist_id" : 316,
    "metric_id" : 54
  },
  {
    "id" : 2384,
    "value" : 1,
    "artist_id" : 317,
    "metric_id" : 17
  },
  {
    "id" : 2385,
    "value" : 2,
    "artist_id" : 317,
    "metric_id" : 13
  },
  {
    "id" : 2386,
    "value" : 2,
    "artist_id" : 317,
    "metric_id" : 15
  },
  {
    "id" : 2387,
    "value" : 3,
    "artist_id" : 317,
    "metric_id" : 43
  },
  {
    "id" : 2388,
    "value" : 4,
    "artist_id" : 317,
    "metric_id" : 46
  },
  {
    "id" : 2389,
    "value" : 4,
    "artist_id" : 317,
    "metric_id" : 47
  },
  {
    "id" : 2390,
    "value" : 2,
    "artist_id" : 317,
    "metric_id" : 50
  },
  {
    "id" : 2392,
    "value" : 4,
    "artist_id" : 318,
    "metric_id" : 2
  },
  {
    "id" : 2393,
    "value" : 5,
    "artist_id" : 318,
    "metric_id" : 5
  },
  {
    "id" : 2394,
    "value" : 1,
    "artist_id" : 318,
    "metric_id" : 9
  },
  {
    "id" : 2395,
    "value" : 1,
    "artist_id" : 318,
    "metric_id" : 13
  },
  {
    "id" : 2396,
    "value" : 1,
    "artist_id" : 318,
    "metric_id" : 18
  },
  {
    "id" : 2397,
    "value" : 3,
    "artist_id" : 318,
    "metric_id" : 44
  },
  {
    "id" : 2399,
    "value" : 3,
    "artist_id" : 319,
    "metric_id" : 2
  },
  {
    "id" : 2400,
    "value" : 3,
    "artist_id" : 319,
    "metric_id" : 5
  },
  {
    "id" : 2401,
    "value" : 4,
    "artist_id" : 319,
    "metric_id" : 11
  },
  {
    "id" : 2402,
    "value" : 4,
    "artist_id" : 319,
    "metric_id" : 13
  },
  {
    "id" : 2403,
    "value" : 3,
    "artist_id" : 319,
    "metric_id" : 10
  },
  {
    "id" : 2404,
    "value" : 4,
    "artist_id" : 319,
    "metric_id" : 35
  },
  {
    "id" : 2405,
    "value" : 3,
    "artist_id" : 319,
    "metric_id" : 44
  },
  {
    "id" : 2407,
    "value" : 1,
    "artist_id" : 319,
    "metric_id" : 18
  },
  {
    "id" : 2408,
    "value" : 5,
    "artist_id" : 320,
    "metric_id" : 2
  },
  {
    "id" : 2409,
    "value" : 2,
    "artist_id" : 320,
    "metric_id" : 5
  },
  {
    "id" : 2410,
    "value" : 2,
    "artist_id" : 320,
    "metric_id" : 10
  },
  {
    "id" : 2411,
    "value" : 1,
    "artist_id" : 320,
    "metric_id" : 12
  },
  {
    "id" : 2412,
    "value" : 3,
    "artist_id" : 320,
    "metric_id" : 13
  },
  {
    "id" : 2413,
    "value" : 1,
    "artist_id" : 320,
    "metric_id" : 18
  },
  {
    "id" : 2414,
    "value" : 2,
    "artist_id" : 320,
    "metric_id" : 44
  },
  {
    "id" : 2415,
    "value" : 2,
    "artist_id" : 320,
    "metric_id" : 50
  },
  {
    "id" : 2417,
    "value" : 2,
    "artist_id" : 321,
    "metric_id" : 2
  },
  {
    "id" : 2418,
    "value" : 3,
    "artist_id" : 321,
    "metric_id" : 5
  },
  {
    "id" : 2419,
    "value" : 2,
    "artist_id" : 321,
    "metric_id" : 27
  },
  {
    "id" : 2420,
    "value" : 3,
    "artist_id" : 321,
    "metric_id" : 10
  },
  {
    "id" : 2421,
    "value" : 4,
    "artist_id" : 321,
    "metric_id" : 11
  },
  {
    "id" : 2422,
    "value" : 3,
    "artist_id" : 321,
    "metric_id" : 13
  },
  {
    "id" : 2423,
    "value" : 2,
    "artist_id" : 321,
    "metric_id" : 14
  },
  {
    "id" : 2424,
    "value" : 1,
    "artist_id" : 321,
    "metric_id" : 18
  },
  {
    "id" : 2425,
    "value" : 4,
    "artist_id" : 321,
    "metric_id" : 35
  },
  {
    "id" : 2427,
    "value" : 2,
    "artist_id" : 322,
    "metric_id" : 3
  },
  {
    "id" : 2428,
    "value" : 3,
    "artist_id" : 322,
    "metric_id" : 31
  },
  {
    "id" : 2429,
    "value" : 1,
    "artist_id" : 322,
    "metric_id" : 10
  },
  {
    "id" : 2430,
    "value" : 3,
    "artist_id" : 322,
    "metric_id" : 11
  },
  {
    "id" : 2431,
    "value" : 3,
    "artist_id" : 322,
    "metric_id" : 14
  },
  {
    "id" : 2432,
    "value" : 3,
    "artist_id" : 322,
    "metric_id" : 49
  },
  {
    "id" : 2433,
    "value" : 1,
    "artist_id" : 322,
    "metric_id" : 17
  },
  {
    "id" : 2435,
    "value" : 5,
    "artist_id" : 323,
    "metric_id" : 2
  },
  {
    "id" : 2436,
    "value" : 2,
    "artist_id" : 323,
    "metric_id" : 5
  },
  {
    "id" : 2437,
    "value" : 4,
    "artist_id" : 323,
    "metric_id" : 52
  },
  {
    "id" : 2438,
    "value" : 3,
    "artist_id" : 323,
    "metric_id" : 11
  },
  {
    "id" : 2439,
    "value" : 2,
    "artist_id" : 323,
    "metric_id" : 13
  },
  {
    "id" : 2440,
    "value" : 4,
    "artist_id" : 323,
    "metric_id" : 14
  },
  {
    "id" : 2441,
    "value" : 1,
    "artist_id" : 323,
    "metric_id" : 18
  },
  {
    "id" : 2442,
    "value" : 4,
    "artist_id" : 323,
    "metric_id" : 38
  },
  {
    "id" : 2444,
    "value" : 3,
    "artist_id" : 324,
    "metric_id" : 24
  },
  {
    "id" : 2445,
    "value" : 4,
    "artist_id" : 324,
    "metric_id" : 10
  },
  {
    "id" : 2446,
    "value" : 2,
    "artist_id" : 324,
    "metric_id" : 11
  },
  {
    "id" : 2447,
    "value" : 3,
    "artist_id" : 324,
    "metric_id" : 15
  },
  {
    "id" : 2448,
    "value" : 3,
    "artist_id" : 324,
    "metric_id" : 3
  },
  {
    "id" : 2449,
    "value" : 2,
    "artist_id" : 324,
    "metric_id" : 32
  },
  {
    "id" : 2450,
    "value" : 4,
    "artist_id" : 324,
    "metric_id" : 43
  },
  {
    "id" : 2451,
    "value" : 1,
    "artist_id" : 324,
    "metric_id" : 51
  },
  {
    "id" : 2452,
    "value" : 3,
    "artist_id" : 324,
    "metric_id" : 26
  },
  {
    "id" : 2453,
    "value" : 3,
    "artist_id" : 324,
    "metric_id" : 37
  },
  {
    "id" : 2455,
    "value" : 2,
    "artist_id" : 325,
    "metric_id" : 2
  },
  {
    "id" : 2456,
    "value" : 4,
    "artist_id" : 325,
    "metric_id" : 5
  },
  {
    "id" : 2457,
    "value" : 2,
    "artist_id" : 325,
    "metric_id" : 10
  },
  {
    "id" : 2458,
    "value" : 4,
    "artist_id" : 325,
    "metric_id" : 11
  },
  {
    "id" : 2459,
    "value" : 2,
    "artist_id" : 325,
    "metric_id" : 14
  },
  {
    "id" : 2460,
    "value" : 3,
    "artist_id" : 325,
    "metric_id" : 34
  },
  {
    "id" : 2461,
    "value" : 1,
    "artist_id" : 325,
    "metric_id" : 18
  },
  {
    "id" : 2462,
    "value" : 1,
    "artist_id" : 325,
    "metric_id" : 17
  },
  {
    "id" : 2463,
    "value" : 2,
    "artist_id" : 325,
    "metric_id" : 43
  },
  {
    "id" : 2465,
    "value" : 4,
    "artist_id" : 326,
    "metric_id" : 2
  },
  {
    "id" : 2466,
    "value" : 3,
    "artist_id" : 326,
    "metric_id" : 5
  },
  {
    "id" : 2467,
    "value" : 3,
    "artist_id" : 326,
    "metric_id" : 11
  },
  {
    "id" : 2468,
    "value" : 4,
    "artist_id" : 326,
    "metric_id" : 14
  },
  {
    "id" : 2469,
    "value" : 1,
    "artist_id" : 326,
    "metric_id" : 13
  },
  {
    "id" : 2470,
    "value" : 1,
    "artist_id" : 326,
    "metric_id" : 18
  },
  {
    "id" : 2471,
    "value" : 2,
    "artist_id" : 326,
    "metric_id" : 54
  },
  {
    "id" : 2473,
    "value" : 1,
    "artist_id" : 327,
    "metric_id" : 2
  },
  {
    "id" : 2474,
    "value" : 1,
    "artist_id" : 327,
    "metric_id" : 3
  },
  {
    "id" : 2475,
    "value" : 2,
    "artist_id" : 327,
    "metric_id" : 9
  },
  {
    "id" : 2476,
    "value" : 2,
    "artist_id" : 327,
    "metric_id" : 10
  },
  {
    "id" : 2477,
    "value" : 2,
    "artist_id" : 327,
    "metric_id" : 11
  },
  {
    "id" : 2478,
    "value" : 2,
    "artist_id" : 327,
    "metric_id" : 44
  },
  {
    "id" : 2479,
    "value" : 3,
    "artist_id" : 327,
    "metric_id" : 24
  },
  {
    "id" : 2480,
    "value" : 3,
    "artist_id" : 327,
    "metric_id" : 37
  },
  {
    "id" : 2481,
    "value" : 1,
    "artist_id" : 327,
    "metric_id" : 19
  },
  {
    "id" : 2482,
    "value" : 3,
    "artist_id" : 327,
    "metric_id" : 15
  },
  {
    "id" : 2484,
    "value" : 3,
    "artist_id" : 328,
    "metric_id" : 9
  },
  {
    "id" : 2485,
    "value" : 2,
    "artist_id" : 328,
    "metric_id" : 10
  },
  {
    "id" : 2486,
    "value" : 3,
    "artist_id" : 328,
    "metric_id" : 50
  },
  {
    "id" : 2487,
    "value" : 1,
    "artist_id" : 328,
    "metric_id" : 19
  },
  {
    "id" : 2488,
    "value" : 4,
    "artist_id" : 328,
    "metric_id" : 24
  },
  {
    "id" : 2489,
    "value" : 4,
    "artist_id" : 328,
    "metric_id" : 15
  },
  {
    "id" : 2491,
    "value" : 1,
    "artist_id" : 329,
    "metric_id" : 3
  },
  {
    "id" : 2492,
    "value" : 1,
    "artist_id" : 329,
    "metric_id" : 17
  },
  {
    "id" : 2493,
    "value" : 2,
    "artist_id" : 329,
    "metric_id" : 15
  },
  {
    "id" : 2494,
    "value" : 3,
    "artist_id" : 329,
    "metric_id" : 11
  },
  {
    "id" : 2495,
    "value" : 3,
    "artist_id" : 329,
    "metric_id" : 46
  },
  {
    "id" : 2496,
    "value" : 2,
    "artist_id" : 329,
    "metric_id" : 47
  },
  {
    "id" : 2498,
    "value" : 2,
    "artist_id" : 330,
    "metric_id" : 3
  },
  {
    "id" : 2499,
    "value" : 2,
    "artist_id" : 330,
    "metric_id" : 10
  },
  {
    "id" : 2500,
    "value" : 3,
    "artist_id" : 330,
    "metric_id" : 11
  },
  {
    "id" : 2501,
    "value" : 2,
    "artist_id" : 330,
    "metric_id" : 13
  },
  {
    "id" : 2502,
    "value" : 3,
    "artist_id" : 330,
    "metric_id" : 15
  },
  {
    "id" : 2503,
    "value" : 3,
    "artist_id" : 330,
    "metric_id" : 46
  },
  {
    "id" : 2504,
    "value" : 3,
    "artist_id" : 330,
    "metric_id" : 26
  },
  {
    "id" : 2506,
    "value" : 5,
    "artist_id" : 331,
    "metric_id" : 3
  },
  {
    "id" : 2507,
    "value" : 3,
    "artist_id" : 331,
    "metric_id" : 10
  },
  {
    "id" : 2508,
    "value" : 3,
    "artist_id" : 331,
    "metric_id" : 11
  },
  {
    "id" : 2509,
    "value" : 2,
    "artist_id" : 331,
    "metric_id" : 13
  },
  {
    "id" : 2510,
    "value" : 2,
    "artist_id" : 331,
    "metric_id" : 26
  },
  {
    "id" : 2511,
    "value" : 3,
    "artist_id" : 331,
    "metric_id" : 21
  },
  {
    "id" : 2513,
    "value" : 2,
    "artist_id" : 332,
    "metric_id" : 3
  },
  {
    "id" : 2514,
    "value" : 3,
    "artist_id" : 332,
    "metric_id" : 10
  },
  {
    "id" : 2515,
    "value" : 1,
    "artist_id" : 332,
    "metric_id" : 11
  },
  {
    "id" : 2516,
    "value" : 2,
    "artist_id" : 332,
    "metric_id" : 46
  },
  {
    "id" : 2517,
    "value" : 2,
    "artist_id" : 332,
    "metric_id" : 26
  },
  {
    "id" : 2519,
    "value" : 1,
    "artist_id" : 130,
    "metric_id" : 17
  },
  {
    "id" : 2520,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 15
  },
  {
    "id" : 2521,
    "value" : 3,
    "artist_id" : 316,
    "metric_id" : 32
  },
  {
    "id" : 2522,
    "value" : 1,
    "artist_id" : 316,
    "metric_id" : 17
  },
  {
    "id" : 2523,
    "value" : 2,
    "artist_id" : 333,
    "metric_id" : 2
  },
  {
    "id" : 2524,
    "value" : 3,
    "artist_id" : 333,
    "metric_id" : 5
  },
  {
    "id" : 2525,
    "value" : 5,
    "artist_id" : 333,
    "metric_id" : 10
  },
  {
    "id" : 2526,
    "value" : 2,
    "artist_id" : 333,
    "metric_id" : 11
  },
  {
    "id" : 2527,
    "value" : 4,
    "artist_id" : 333,
    "metric_id" : 13
  },
  {
    "id" : 2528,
    "value" : 1,
    "artist_id" : 333,
    "metric_id" : 18
  },
  {
    "id" : 2529,
    "value" : 3,
    "artist_id" : 333,
    "metric_id" : 35
  },
  {
    "id" : 2530,
    "value" : 2,
    "artist_id" : 333,
    "metric_id" : 44
  },
  {
    "id" : 2531,
    "value" : 1,
    "artist_id" : 333,
    "metric_id" : 32
  },
  {
    "id" : 2532,
    "value" : 5,
    "artist_id" : 334,
    "metric_id" : 24
  },
  {
    "id" : 2533,
    "value" : 4,
    "artist_id" : 334,
    "metric_id" : 10
  },
  {
    "id" : 2534,
    "value" : 1,
    "artist_id" : 334,
    "metric_id" : 19
  },
  {
    "id" : 2535,
    "value" : 3,
    "artist_id" : 334,
    "metric_id" : 32
  },
  {
    "id" : 2536,
    "value" : 2,
    "artist_id" : 334,
    "metric_id" : 43
  },
  {
    "id" : 2537,
    "value" : 2,
    "artist_id" : 334,
    "metric_id" : 54
  },
  {
    "id" : 2538,
    "value" : 4,
    "artist_id" : 334,
    "metric_id" : 11
  },
  {
    "id" : 2539,
    "value" : 2,
    "artist_id" : 334,
    "metric_id" : 14
  },
  {
    "id" : 2540,
    "value" : 3,
    "artist_id" : 335,
    "metric_id" : 3
  },
  {
    "id" : 2541,
    "value" : 2,
    "artist_id" : 335,
    "metric_id" : 10
  },
  {
    "id" : 2542,
    "value" : 3,
    "artist_id" : 335,
    "metric_id" : 15
  },
  {
    "id" : 2543,
    "value" : 1,
    "artist_id" : 335,
    "metric_id" : 19
  },
  {
    "id" : 2544,
    "value" : 4,
    "artist_id" : 335,
    "metric_id" : 26
  },
  {
    "id" : 2545,
    "value" : 2,
    "artist_id" : 335,
    "metric_id" : 24
  },
  {
    "id" : 2546,
    "value" : 2,
    "artist_id" : 336,
    "metric_id" : 3
  },
  {
    "id" : 2547,
    "value" : 4,
    "artist_id" : 336,
    "metric_id" : 10
  },
  {
    "id" : 2548,
    "value" : 2,
    "artist_id" : 336,
    "metric_id" : 15
  },
  {
    "id" : 2549,
    "value" : 1,
    "artist_id" : 336,
    "metric_id" : 19
  },
  {
    "id" : 2550,
    "value" : 3,
    "artist_id" : 336,
    "metric_id" : 24
  },
  {
    "id" : 2551,
    "value" : 3,
    "artist_id" : 336,
    "metric_id" : 43
  },
  {
    "id" : 2552,
    "value" : 1,
    "artist_id" : 336,
    "metric_id" : 50
  },
  {
    "id" : 2553,
    "value" : 5,
    "artist_id" : 337,
    "metric_id" : 2
  },
  {
    "id" : 2554,
    "value" : 3,
    "artist_id" : 337,
    "metric_id" : 5
  },
  {
    "id" : 2555,
    "value" : 4,
    "artist_id" : 337,
    "metric_id" : 6
  },
  {
    "id" : 2556,
    "value" : 3,
    "artist_id" : 337,
    "metric_id" : 14
  },
  {
    "id" : 2557,
    "value" : 2,
    "artist_id" : 337,
    "metric_id" : 9
  },
  {
    "id" : 2558,
    "value" : 1,
    "artist_id" : 337,
    "metric_id" : 12
  },
  {
    "id" : 2559,
    "value" : 1,
    "artist_id" : 337,
    "metric_id" : 17
  },
  {
    "id" : 2560,
    "value" : 2,
    "artist_id" : 337,
    "metric_id" : 44
  },
  {
    "id" : 2561,
    "value" : 1,
    "artist_id" : 337,
    "metric_id" : 38
  },
  {
    "id" : 2562,
    "value" : 4,
    "artist_id" : 337,
    "metric_id" : 55
  },
  {
    "id" : 2563,
    "value" : 1,
    "artist_id" : 338,
    "metric_id" : 10
  },
  {
    "id" : 2564,
    "value" : 2,
    "artist_id" : 338,
    "metric_id" : 13
  },
  {
    "id" : 2565,
    "value" : 1,
    "artist_id" : 338,
    "metric_id" : 17
  },
  {
    "id" : 2566,
    "value" : 3,
    "artist_id" : 338,
    "metric_id" : 43
  },
  {
    "id" : 2567,
    "value" : 2,
    "artist_id" : 338,
    "metric_id" : 46
  },
  {
    "id" : 2568,
    "value" : 3,
    "artist_id" : 338,
    "metric_id" : 47
  },
  {
    "id" : 2569,
    "value" : 2,
    "artist_id" : 338,
    "metric_id" : 15
  },
  {
    "id" : 2570,
    "value" : 2,
    "artist_id" : 339,
    "metric_id" : 2
  },
  {
    "id" : 2571,
    "value" : 4,
    "artist_id" : 339,
    "metric_id" : 5
  },
  {
    "id" : 2572,
    "value" : 4,
    "artist_id" : 339,
    "metric_id" : 10
  },
  {
    "id" : 2573,
    "value" : 4,
    "artist_id" : 339,
    "metric_id" : 11
  },
  {
    "id" : 2574,
    "value" : 3,
    "artist_id" : 339,
    "metric_id" : 13
  },
  {
    "id" : 2575,
    "value" : 1,
    "artist_id" : 339,
    "metric_id" : 19
  },
  {
    "id" : 2576,
    "value" : 5,
    "artist_id" : 340,
    "metric_id" : 2
  },
  {
    "id" : 2577,
    "value" : 3,
    "artist_id" : 340,
    "metric_id" : 6
  },
  {
    "id" : 2578,
    "value" : 3,
    "artist_id" : 340,
    "metric_id" : 12
  },
  {
    "id" : 2579,
    "value" : 3,
    "artist_id" : 340,
    "metric_id" : 14
  },
  {
    "id" : 2580,
    "value" : 1,
    "artist_id" : 340,
    "metric_id" : 17
  },
  {
    "id" : 2581,
    "value" : 3,
    "artist_id" : 340,
    "metric_id" : 44
  },
  {
    "id" : 2582,
    "value" : 3,
    "artist_id" : 340,
    "metric_id" : 38
  },
  {
    "id" : 2583,
    "value" : 2,
    "artist_id" : 341,
    "metric_id" : 2
  },
  {
    "id" : 2584,
    "value" : 3,
    "artist_id" : 341,
    "metric_id" : 5
  },
  {
    "id" : 2585,
    "value" : 3,
    "artist_id" : 341,
    "metric_id" : 8
  },
  {
    "id" : 2586,
    "value" : 4,
    "artist_id" : 341,
    "metric_id" : 9
  },
  {
    "id" : 2587,
    "value" : 5,
    "artist_id" : 341,
    "metric_id" : 12
  },
  {
    "id" : 2588,
    "value" : 2,
    "artist_id" : 341,
    "metric_id" : 13
  },
  {
    "id" : 2589,
    "value" : 5,
    "artist_id" : 341,
    "metric_id" : 16
  },
  {
    "id" : 2590,
    "value" : 1,
    "artist_id" : 341,
    "metric_id" : 19
  },
  {
    "id" : 2591,
    "value" : 1,
    "artist_id" : 341,
    "metric_id" : 43
  },
  {
    "id" : 2592,
    "value" : 3,
    "artist_id" : 342,
    "metric_id" : 2
  },
  {
    "id" : 2593,
    "value" : 3,
    "artist_id" : 342,
    "metric_id" : 14
  },
  {
    "id" : 2594,
    "value" : 1,
    "artist_id" : 342,
    "metric_id" : 13
  },
  {
    "id" : 2595,
    "value" : 1,
    "artist_id" : 342,
    "metric_id" : 18
  },
  {
    "id" : 2596,
    "value" : 3,
    "artist_id" : 342,
    "metric_id" : 45
  },
  {
    "id" : 2597,
    "value" : 2,
    "artist_id" : 342,
    "metric_id" : 46
  },
  {
    "id" : 2598,
    "value" : 4,
    "artist_id" : 342,
    "metric_id" : 47
  },
  {
    "id" : 2599,
    "value" : 3,
    "artist_id" : 343,
    "metric_id" : 14
  },
  {
    "id" : 2600,
    "value" : 1,
    "artist_id" : 343,
    "metric_id" : 18
  },
  {
    "id" : 2601,
    "value" : 4,
    "artist_id" : 343,
    "metric_id" : 29
  },
  {
    "id" : 2602,
    "value" : 4,
    "artist_id" : 343,
    "metric_id" : 53
  },
  {
    "id" : 2603,
    "value" : 3,
    "artist_id" : 343,
    "metric_id" : 37
  },
  {
    "id" : 2604,
    "value" : 2,
    "artist_id" : 343,
    "metric_id" : 10
  },
  {
    "id" : 2605,
    "value" : 4,
    "artist_id" : 344,
    "metric_id" : 15
  },
  {
    "id" : 2606,
    "value" : 1,
    "artist_id" : 344,
    "metric_id" : 19
  },
  {
    "id" : 2607,
    "value" : 2,
    "artist_id" : 344,
    "metric_id" : 37
  },
  {
    "id" : 2608,
    "value" : 3,
    "artist_id" : 344,
    "metric_id" : 43
  },
  {
    "id" : 2609,
    "value" : 2,
    "artist_id" : 344,
    "metric_id" : 50
  },
  {
    "id" : 2610,
    "value" : 1,
    "artist_id" : 344,
    "metric_id" : 4
  },
  {
    "id" : 2611,
    "value" : 1,
    "artist_id" : 344,
    "metric_id" : 3
  },
  {
    "id" : 2612,
    "value" : 2,
    "artist_id" : 344,
    "metric_id" : 51
  },
  {
    "id" : 2613,
    "value" : 4,
    "artist_id" : 345,
    "metric_id" : 2
  },
  {
    "id" : 2614,
    "value" : 3,
    "artist_id" : 345,
    "metric_id" : 5
  },
  {
    "id" : 2615,
    "value" : 1,
    "artist_id" : 345,
    "metric_id" : 13
  },
  {
    "id" : 2616,
    "value" : 3,
    "artist_id" : 345,
    "metric_id" : 15
  },
  {
    "id" : 2617,
    "value" : 4,
    "artist_id" : 345,
    "metric_id" : 16
  },
  {
    "id" : 2618,
    "value" : 1,
    "artist_id" : 345,
    "metric_id" : 56
  },
  {
    "id" : 2619,
    "value" : 2,
    "artist_id" : 345,
    "metric_id" : 9
  },
  {
    "id" : 2620,
    "value" : 3,
    "artist_id" : 345,
    "metric_id" : 43
  },
  {
    "id" : 2621,
    "value" : 1,
    "artist_id" : 345,
    "metric_id" : 32
  },
  {
    "id" : 2622,
    "value" : 3,
    "artist_id" : 345,
    "metric_id" : 44
  },
  {
    "id" : 2623,
    "value" : 2,
    "artist_id" : 346,
    "metric_id" : 10
  },
  {
    "id" : 2624,
    "value" : 2,
    "artist_id" : 346,
    "metric_id" : 11
  },
  {
    "id" : 2625,
    "value" : 2,
    "artist_id" : 346,
    "metric_id" : 13
  },
  {
    "id" : 2626,
    "value" : 1,
    "artist_id" : 346,
    "metric_id" : 17
  },
  {
    "id" : 2627,
    "value" : 2,
    "artist_id" : 346,
    "metric_id" : 37
  },
  {
    "id" : 2628,
    "value" : 3,
    "artist_id" : 346,
    "metric_id" : 47
  },
  {
    "id" : 2629,
    "value" : 3,
    "artist_id" : 346,
    "metric_id" : 46
  },
  {
    "id" : 2630,
    "value" : 4,
    "artist_id" : 347,
    "metric_id" : 3
  },
  {
    "id" : 2631,
    "value" : 2,
    "artist_id" : 347,
    "metric_id" : 10
  },
  {
    "id" : 2632,
    "value" : 1,
    "artist_id" : 347,
    "metric_id" : 13
  },
  {
    "id" : 2633,
    "value" : 1,
    "artist_id" : 347,
    "metric_id" : 19
  },
  {
    "id" : 2634,
    "value" : 3,
    "artist_id" : 347,
    "metric_id" : 15
  },
  {
    "id" : 2635,
    "value" : 5,
    "artist_id" : 347,
    "metric_id" : 26
  },
  {
    "id" : 2636,
    "value" : 2,
    "artist_id" : 347,
    "metric_id" : 43
  },
  {
    "id" : 2637,
    "value" : 3,
    "artist_id" : 348,
    "metric_id" : 3
  },
  {
    "id" : 2638,
    "value" : 2,
    "artist_id" : 348,
    "metric_id" : 10
  },
  {
    "id" : 2639,
    "value" : 4,
    "artist_id" : 348,
    "metric_id" : 15
  },
  {
    "id" : 2640,
    "value" : 3,
    "artist_id" : 348,
    "metric_id" : 16
  },
  {
    "id" : 2641,
    "value" : 1,
    "artist_id" : 348,
    "metric_id" : 19
  },
  {
    "id" : 2642,
    "value" : 1,
    "artist_id" : 348,
    "metric_id" : 24
  },
  {
    "id" : 2643,
    "value" : 5,
    "artist_id" : 348,
    "metric_id" : 26
  },
  {
    "id" : 2644,
    "value" : 1,
    "artist_id" : 348,
    "metric_id" : 11
  },
  {
    "id" : 2645,
    "value" : 1,
    "artist_id" : 349,
    "metric_id" : 3
  },
  {
    "id" : 2646,
    "value" : 3,
    "artist_id" : 349,
    "metric_id" : 14
  },
  {
    "id" : 2647,
    "value" : 1,
    "artist_id" : 349,
    "metric_id" : 15
  },
  {
    "id" : 2648,
    "value" : 2,
    "artist_id" : 349,
    "metric_id" : 16
  },
  {
    "id" : 2649,
    "value" : 1,
    "artist_id" : 349,
    "metric_id" : 17
  },
  {
    "id" : 2650,
    "value" : 5,
    "artist_id" : 349,
    "metric_id" : 37
  },
  {
    "id" : 2651,
    "value" : 3,
    "artist_id" : 349,
    "metric_id" : 55
  },
  {
    "id" : 2652,
    "value" : 1,
    "artist_id" : 349,
    "metric_id" : 56
  },
  {
    "id" : 2653,
    "value" : 2,
    "artist_id" : 350,
    "metric_id" : 10
  },
  {
    "id" : 2654,
    "value" : 3,
    "artist_id" : 350,
    "metric_id" : 11
  },
  {
    "id" : 2655,
    "value" : 1,
    "artist_id" : 350,
    "metric_id" : 19
  },
  {
    "id" : 2656,
    "value" : 5,
    "artist_id" : 350,
    "metric_id" : 24
  },
  {
    "id" : 2657,
    "value" : 3,
    "artist_id" : 350,
    "metric_id" : 32
  },
  {
    "id" : 2658,
    "value" : 4,
    "artist_id" : 350,
    "metric_id" : 16
  },
  {
    "id" : 2659,
    "value" : 1,
    "artist_id" : 350,
    "metric_id" : 13
  },
  {
    "id" : 2660,
    "value" : 3,
    "artist_id" : 350,
    "metric_id" : 43
  },
  {
    "id" : 2661,
    "value" : 3,
    "artist_id" : 350,
    "metric_id" : 50
  },
  {
    "id" : 2662,
    "value" : 1,
    "artist_id" : 351,
    "metric_id" : 2
  },
  {
    "id" : 2663,
    "value" : 1,
    "artist_id" : 351,
    "metric_id" : 3
  },
  {
    "id" : 2664,
    "value" : 2,
    "artist_id" : 351,
    "metric_id" : 10
  },
  {
    "id" : 2665,
    "value" : 1,
    "artist_id" : 351,
    "metric_id" : 13
  },
  {
    "id" : 2666,
    "value" : 2,
    "artist_id" : 351,
    "metric_id" : 15
  },
  {
    "id" : 2667,
    "value" : 1,
    "artist_id" : 351,
    "metric_id" : 17
  },
  {
    "id" : 2668,
    "value" : 3,
    "artist_id" : 351,
    "metric_id" : 51
  },
  {
    "id" : 2669,
    "value" : 5,
    "artist_id" : 351,
    "metric_id" : 54
  },
  {
    "id" : 2670,
    "value" : 5,
    "artist_id" : 352,
    "metric_id" : 2
  },
  {
    "id" : 2671,
    "value" : 2,
    "artist_id" : 352,
    "metric_id" : 6
  },
  {
    "id" : 2672,
    "value" : 2,
    "artist_id" : 352,
    "metric_id" : 7
  },
  {
    "id" : 2673,
    "value" : 3,
    "artist_id" : 352,
    "metric_id" : 5
  },
  {
    "id" : 2674,
    "value" : 1,
    "artist_id" : 352,
    "metric_id" : 9
  },
  {
    "id" : 2675,
    "value" : 3,
    "artist_id" : 352,
    "metric_id" : 12
  },
  {
    "id" : 2676,
    "value" : 2,
    "artist_id" : 352,
    "metric_id" : 11
  },
  {
    "id" : 2677,
    "value" : 3,
    "artist_id" : 352,
    "metric_id" : 13
  },
  {
    "id" : 2678,
    "value" : 1,
    "artist_id" : 352,
    "metric_id" : 17
  },
  {
    "id" : 2679,
    "value" : 1,
    "artist_id" : 352,
    "metric_id" : 34
  },
  {
    "id" : 2680,
    "value" : 4,
    "artist_id" : 352,
    "metric_id" : 57
  },
  {
    "id" : 2681,
    "value" : 3,
    "artist_id" : 353,
    "metric_id" : 2
  },
  {
    "id" : 2682,
    "value" : 3,
    "artist_id" : 353,
    "metric_id" : 5
  },
  {
    "id" : 2683,
    "value" : 1,
    "artist_id" : 353,
    "metric_id" : 10
  },
  {
    "id" : 2684,
    "value" : 3,
    "artist_id" : 353,
    "metric_id" : 11
  },
  {
    "id" : 2685,
    "value" : 3,
    "artist_id" : 353,
    "metric_id" : 13
  },
  {
    "id" : 2686,
    "value" : 1,
    "artist_id" : 353,
    "metric_id" : 19
  },
  {
    "id" : 2687,
    "value" : 4,
    "artist_id" : 353,
    "metric_id" : 57
  },
  {
    "id" : 2688,
    "value" : 5,
    "artist_id" : 354,
    "metric_id" : 2
  },
  {
    "id" : 2689,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 5
  },
  {
    "id" : 2690,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 7
  },
  {
    "id" : 2691,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 9
  },
  {
    "id" : 2692,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 12
  },
  {
    "id" : 2693,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 14
  },
  {
    "id" : 2694,
    "value" : 1,
    "artist_id" : 354,
    "metric_id" : 17
  },
  {
    "id" : 2695,
    "value" : 3,
    "artist_id" : 354,
    "metric_id" : 44
  },
  {
    "id" : 2696,
    "value" : 1,
    "artist_id" : 354,
    "metric_id" : 55
  },
  {
    "id" : 2697,
    "value" : 5,
    "artist_id" : 355,
    "metric_id" : 2
  },
  {
    "id" : 2698,
    "value" : 4,
    "artist_id" : 355,
    "metric_id" : 8
  },
  {
    "id" : 2699,
    "value" : 3,
    "artist_id" : 355,
    "metric_id" : 9
  },
  {
    "id" : 2700,
    "value" : 3,
    "artist_id" : 355,
    "metric_id" : 12
  },
  {
    "id" : 2701,
    "value" : 2,
    "artist_id" : 355,
    "metric_id" : 13
  },
  {
    "id" : 2702,
    "value" : 1,
    "artist_id" : 355,
    "metric_id" : 18
  },
  {
    "id" : 2703,
    "value" : 2,
    "artist_id" : 355,
    "metric_id" : 43
  },
  {
    "id" : 2704,
    "value" : 1,
    "artist_id" : 355,
    "metric_id" : 50
  },
  {
    "id" : 2705,
    "value" : 1,
    "artist_id" : 356,
    "metric_id" : 2
  },
  {
    "id" : 2706,
    "value" : 3,
    "artist_id" : 356,
    "metric_id" : 5
  },
  {
    "id" : 2707,
    "value" : 4,
    "artist_id" : 356,
    "metric_id" : 10
  },
  {
    "id" : 2708,
    "value" : 4,
    "artist_id" : 356,
    "metric_id" : 11
  },
  {
    "id" : 2709,
    "value" : 2,
    "artist_id" : 356,
    "metric_id" : 13
  },
  {
    "id" : 2710,
    "value" : 1,
    "artist_id" : 356,
    "metric_id" : 18
  },
  {
    "id" : 2711,
    "value" : 3,
    "artist_id" : 356,
    "metric_id" : 35
  },
  {
    "id" : 2712,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 12
  },
  {
    "id" : 2713,
    "value" : 2,
    "artist_id" : 357,
    "metric_id" : 2
  },
  {
    "id" : 2714,
    "value" : 1,
    "artist_id" : 357,
    "metric_id" : 3
  },
  {
    "id" : 2715,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 4
  },
  {
    "id" : 2716,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 9
  },
  {
    "id" : 2717,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 11
  },
  {
    "id" : 2718,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 13
  },
  {
    "id" : 2719,
    "value" : 2,
    "artist_id" : 357,
    "metric_id" : 15
  },
  {
    "id" : 2720,
    "value" : 1,
    "artist_id" : 357,
    "metric_id" : 19
  },
  {
    "id" : 2721,
    "value" : 5,
    "artist_id" : 357,
    "metric_id" : 37
  },
  {
    "id" : 2722,
    "value" : 3,
    "artist_id" : 357,
    "metric_id" : 50
  },
  {
    "id" : 2723,
    "value" : 5,
    "artist_id" : 358,
    "metric_id" : 24
  },
  {
    "id" : 2724,
    "value" : 4,
    "artist_id" : 358,
    "metric_id" : 32
  },
  {
    "id" : 2725,
    "value" : 1,
    "artist_id" : 358,
    "metric_id" : 54
  },
  {
    "id" : 2726,
    "value" : 1,
    "artist_id" : 358,
    "metric_id" : 51
  },
  {
    "id" : 2727,
    "value" : 4,
    "artist_id" : 358,
    "metric_id" : 43
  },
  {
    "id" : 2728,
    "value" : 1,
    "artist_id" : 358,
    "metric_id" : 11
  },
  {
    "id" : 2729,
    "value" : 1,
    "artist_id" : 358,
    "metric_id" : 19
  },
  {
    "id" : 2730,
    "value" : 2,
    "artist_id" : 359,
    "metric_id" : 2
  },
  {
    "id" : 2731,
    "value" : 2,
    "artist_id" : 359,
    "metric_id" : 3
  },
  {
    "id" : 2732,
    "value" : 2,
    "artist_id" : 359,
    "metric_id" : 10
  },
  {
    "id" : 2733,
    "value" : 1,
    "artist_id" : 359,
    "metric_id" : 13
  },
  {
    "id" : 2734,
    "value" : 1,
    "artist_id" : 359,
    "metric_id" : 19
  },
  {
    "id" : 2735,
    "value" : 3,
    "artist_id" : 359,
    "metric_id" : 43
  },
  {
    "id" : 2736,
    "value" : 1,
    "artist_id" : 359,
    "metric_id" : 50
  },
  {
    "id" : 2737,
    "value" : 1,
    "artist_id" : 359,
    "metric_id" : 25
  },
  {
    "id" : 2738,
    "value" : 4,
    "artist_id" : 360,
    "metric_id" : 2
  },
  {
    "id" : 2739,
    "value" : 2,
    "artist_id" : 360,
    "metric_id" : 8
  },
  {
    "id" : 2740,
    "value" : 3,
    "artist_id" : 360,
    "metric_id" : 9
  },
  {
    "id" : 2741,
    "value" : 2,
    "artist_id" : 360,
    "metric_id" : 12
  },
  {
    "id" : 2742,
    "value" : 2,
    "artist_id" : 360,
    "metric_id" : 13
  },
  {
    "id" : 2743,
    "value" : 1,
    "artist_id" : 360,
    "metric_id" : 17
  },
  {
    "id" : 2744,
    "value" : 2,
    "artist_id" : 360,
    "metric_id" : 16
  },
  {
    "id" : 2745,
    "value" : 4,
    "artist_id" : 360,
    "metric_id" : 43
  },
  {
    "id" : 2746,
    "value" : 3,
    "artist_id" : 361,
    "metric_id" : 2
  },
  {
    "id" : 2747,
    "value" : 1,
    "artist_id" : 361,
    "metric_id" : 10
  },
  {
    "id" : 2748,
    "value" : 2,
    "artist_id" : 361,
    "metric_id" : 13
  },
  {
    "id" : 2749,
    "value" : 1,
    "artist_id" : 361,
    "metric_id" : 19
  },
  {
    "id" : 2750,
    "value" : 2,
    "artist_id" : 361,
    "metric_id" : 41
  },
  {
    "id" : 2751,
    "value" : 4,
    "artist_id" : 361,
    "metric_id" : 43
  },
  {
    "id" : 2752,
    "value" : 3,
    "artist_id" : 361,
    "metric_id" : 9
  },
  {
    "id" : 2753,
    "value" : 5,
    "artist_id" : 362,
    "metric_id" : 2
  },
  {
    "id" : 2754,
    "value" : 3,
    "artist_id" : 362,
    "metric_id" : 5
  },
  {
    "id" : 2755,
    "value" : 3,
    "artist_id" : 362,
    "metric_id" : 9
  },
  {
    "id" : 2756,
    "value" : 1,
    "artist_id" : 362,
    "metric_id" : 14
  },
  {
    "id" : 2757,
    "value" : 2,
    "artist_id" : 362,
    "metric_id" : 15
  },
  {
    "id" : 2758,
    "value" : 1,
    "artist_id" : 362,
    "metric_id" : 18
  },
  {
    "id" : 2759,
    "value" : 3,
    "artist_id" : 362,
    "metric_id" : 44
  },
  {
    "id" : 2760,
    "value" : 3,
    "artist_id" : 362,
    "metric_id" : 25
  },
  {
    "id" : 2761,
    "value" : 1,
    "artist_id" : 362,
    "metric_id" : 47
  },
  {
    "id" : 2762,
    "value" : 3,
    "artist_id" : 363,
    "metric_id" : 2
  },
  {
    "id" : 2763,
    "value" : 4,
    "artist_id" : 363,
    "metric_id" : 5
  },
  {
    "id" : 2764,
    "value" : 3,
    "artist_id" : 363,
    "metric_id" : 11
  },
  {
    "id" : 2765,
    "value" : 1,
    "artist_id" : 363,
    "metric_id" : 13
  },
  {
    "id" : 2766,
    "value" : 4,
    "artist_id" : 363,
    "metric_id" : 14
  },
  {
    "id" : 2767,
    "value" : 1,
    "artist_id" : 363,
    "metric_id" : 18
  },
  {
    "id" : 2768,
    "value" : 3,
    "artist_id" : 363,
    "metric_id" : 34
  },
  {
    "id" : 2769,
    "value" : 3,
    "artist_id" : 363,
    "metric_id" : 38
  },
  {
    "id" : 2770,
    "value" : 1,
    "artist_id" : 363,
    "metric_id" : 51
  },
  {
    "id" : 2771,
    "value" : 3,
    "artist_id" : 364,
    "metric_id" : 2
  },
  {
    "id" : 2772,
    "value" : 4,
    "artist_id" : 364,
    "metric_id" : 5
  },
  {
    "id" : 2773,
    "value" : 5,
    "artist_id" : 364,
    "metric_id" : 10
  },
  {
    "id" : 2774,
    "value" : 4,
    "artist_id" : 364,
    "metric_id" : 11
  },
  {
    "id" : 2775,
    "value" : 3,
    "artist_id" : 364,
    "metric_id" : 13
  },
  {
    "id" : 2776,
    "value" : 1,
    "artist_id" : 364,
    "metric_id" : 18
  },
  {
    "id" : 2777,
    "value" : 1,
    "artist_id" : 364,
    "metric_id" : 32
  },
  {
    "id" : 2778,
    "value" : 2,
    "artist_id" : 364,
    "metric_id" : 35
  },
  {
    "id" : 2779,
    "value" : 2,
    "artist_id" : 364,
    "metric_id" : 45
  },
  {
    "id" : 2780,
    "value" : 4,
    "artist_id" : 364,
    "metric_id" : 57
  },
  {
    "id" : 2781,
    "value" : 2,
    "artist_id" : 364,
    "metric_id" : 51
  },
  {
    "id" : 2782,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 2
  },
  {
    "id" : 2783,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 5
  },
  {
    "id" : 2784,
    "value" : 2,
    "artist_id" : 365,
    "metric_id" : 7
  },
  {
    "id" : 2785,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 11
  },
  {
    "id" : 2786,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 13
  },
  {
    "id" : 2787,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 14
  },
  {
    "id" : 2788,
    "value" : 1,
    "artist_id" : 365,
    "metric_id" : 18
  },
  {
    "id" : 2789,
    "value" : 4,
    "artist_id" : 365,
    "metric_id" : 44
  },
  {
    "id" : 2790,
    "value" : 3,
    "artist_id" : 365,
    "metric_id" : 57
  },
  {
    "id" : 2791,
    "value" : 4,
    "artist_id" : 38,
    "metric_id" : 55
  },
  {
    "id" : 2792,
    "value" : 2,
    "artist_id" : 366,
    "metric_id" : 4
  },
  {
    "id" : 2793,
    "value" : 4,
    "artist_id" : 366,
    "metric_id" : 10
  },
  {
    "id" : 2794,
    "value" : 3,
    "artist_id" : 366,
    "metric_id" : 11
  },
  {
    "id" : 2795,
    "value" : 2,
    "artist_id" : 366,
    "metric_id" : 13
  },
  {
    "id" : 2796,
    "value" : 1,
    "artist_id" : 366,
    "metric_id" : 19
  },
  {
    "id" : 2797,
    "value" : 5,
    "artist_id" : 366,
    "metric_id" : 24
  },
  {
    "id" : 2798,
    "value" : 2,
    "artist_id" : 366,
    "metric_id" : 32
  },
  {
    "id" : 2799,
    "value" : 3,
    "artist_id" : 366,
    "metric_id" : 43
  },
  {
    "id" : 2800,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 4
  },
  {
    "id" : 2801,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 10
  },
  {
    "id" : 2802,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 11
  },
  {
    "id" : 2803,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 13
  },
  {
    "id" : 2804,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 15
  },
  {
    "id" : 2805,
    "value" : 4,
    "artist_id" : 367,
    "metric_id" : 16
  },
  {
    "id" : 2806,
    "value" : 1,
    "artist_id" : 367,
    "metric_id" : 17
  },
  {
    "id" : 2807,
    "value" : 1,
    "artist_id" : 367,
    "metric_id" : 19
  },
  {
    "id" : 2808,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 24
  },
  {
    "id" : 2809,
    "value" : 1,
    "artist_id" : 367,
    "metric_id" : 32
  },
  {
    "id" : 2810,
    "value" : 3,
    "artist_id" : 367,
    "metric_id" : 43
  },
  {
    "id" : 2811,
    "value" : 2,
    "artist_id" : 367,
    "metric_id" : 57
  },
  {
    "id" : 2812,
    "value" : 3,
    "artist_id" : 367,
    "metric_id" : 34
  },
  {
    "id" : 2813,
    "value" : 5,
    "artist_id" : 367,
    "metric_id" : 37
  },
  {
    "id" : 2814,
    "value" : 3,
    "artist_id" : 368,
    "metric_id" : 2
  },
  {
    "id" : 2815,
    "value" : 4,
    "artist_id" : 368,
    "metric_id" : 5
  },
  {
    "id" : 2816,
    "value" : 2,
    "artist_id" : 368,
    "metric_id" : 9
  },
  {
    "id" : 2817,
    "value" : 3,
    "artist_id" : 368,
    "metric_id" : 12
  },
  {
    "id" : 2818,
    "value" : 2,
    "artist_id" : 368,
    "metric_id" : 14
  },
  {
    "id" : 2819,
    "value" : 1,
    "artist_id" : 368,
    "metric_id" : 13
  },
  {
    "id" : 2820,
    "value" : 1,
    "artist_id" : 368,
    "metric_id" : 18
  },
  {
    "id" : 2821,
    "value" : 3,
    "artist_id" : 368,
    "metric_id" : 43
  },
  {
    "id" : 2822,
    "value" : 1,
    "artist_id" : 368,
    "metric_id" : 50
  },
  {
    "id" : 2823,
    "value" : 5,
    "artist_id" : 369,
    "metric_id" : 2
  },
  {
    "id" : 2824,
    "value" : 2,
    "artist_id" : 369,
    "metric_id" : 6
  },
  {
    "id" : 2825,
    "value" : 3,
    "artist_id" : 369,
    "metric_id" : 5
  },
  {
    "id" : 2826,
    "value" : 3,
    "artist_id" : 369,
    "metric_id" : 14
  },
  {
    "id" : 2827,
    "value" : 1,
    "artist_id" : 369,
    "metric_id" : 12
  },
  {
    "id" : 2828,
    "value" : 1,
    "artist_id" : 369,
    "metric_id" : 13
  },
  {
    "id" : 2829,
    "value" : 1,
    "artist_id" : 369,
    "metric_id" : 18
  },
  {
    "id" : 2830,
    "value" : 2,
    "artist_id" : 369,
    "metric_id" : 38
  },
  {
    "id" : 2831,
    "value" : 3,
    "artist_id" : 370,
    "metric_id" : 2
  },
  {
    "id" : 2832,
    "value" : 5,
    "artist_id" : 370,
    "metric_id" : 5
  },
  {
    "id" : 2833,
    "value" : 2,
    "artist_id" : 370,
    "metric_id" : 11
  },
  {
    "id" : 2834,
    "value" : 4,
    "artist_id" : 370,
    "metric_id" : 14
  },
  {
    "id" : 2835,
    "value" : 1,
    "artist_id" : 370,
    "metric_id" : 17
  },
  {
    "id" : 2836,
    "value" : 4,
    "artist_id" : 370,
    "metric_id" : 34
  },
  {
    "id" : 2837,
    "value" : 2,
    "artist_id" : 370,
    "metric_id" : 9
  },
  {
    "id" : 2838,
    "value" : 1,
    "artist_id" : 370,
    "metric_id" : 32
  },
  {
    "id" : 2839,
    "value" : 1,
    "artist_id" : 370,
    "metric_id" : 57
  },
  {
    "id" : 2840,
    "value" : 3,
    "artist_id" : 370,
    "metric_id" : 38
  },
  {
    "id" : 2841,
    "value" : 1,
    "artist_id" : 370,
    "metric_id" : 13
  },
  {
    "id" : 2842,
    "value" : 5,
    "artist_id" : 371,
    "metric_id" : 2
  },
  {
    "id" : 2843,
    "value" : 3,
    "artist_id" : 371,
    "metric_id" : 5
  },
  {
    "id" : 2844,
    "value" : 2,
    "artist_id" : 371,
    "metric_id" : 7
  },
  {
    "id" : 2845,
    "value" : 2,
    "artist_id" : 371,
    "metric_id" : 11
  },
  {
    "id" : 2846,
    "value" : 1,
    "artist_id" : 371,
    "metric_id" : 12
  },
  {
    "id" : 2847,
    "value" : 3,
    "artist_id" : 371,
    "metric_id" : 13
  },
  {
    "id" : 2848,
    "value" : 1,
    "artist_id" : 371,
    "metric_id" : 17
  },
  {
    "id" : 2849,
    "value" : 3,
    "artist_id" : 371,
    "metric_id" : 57
  },
  {
    "id" : 2850,
    "value" : 5,
    "artist_id" : 372,
    "metric_id" : 2
  },
  {
    "id" : 2851,
    "value" : 5,
    "artist_id" : 372,
    "metric_id" : 6
  },
  {
    "id" : 2852,
    "value" : 1,
    "artist_id" : 372,
    "metric_id" : 11
  },
  {
    "id" : 2853,
    "value" : 3,
    "artist_id" : 372,
    "metric_id" : 12
  },
  {
    "id" : 2854,
    "value" : 4,
    "artist_id" : 372,
    "metric_id" : 14
  },
  {
    "id" : 2855,
    "value" : 1,
    "artist_id" : 372,
    "metric_id" : 17
  },
  {
    "id" : 2856,
    "value" : 5,
    "artist_id" : 372,
    "metric_id" : 38
  },
  {
    "id" : 2857,
    "value" : 2,
    "artist_id" : 373,
    "metric_id" : 4
  },
  {
    "id" : 2858,
    "value" : 5,
    "artist_id" : 373,
    "metric_id" : 10
  },
  {
    "id" : 2859,
    "value" : 5,
    "artist_id" : 373,
    "metric_id" : 11
  },
  {
    "id" : 2860,
    "value" : 2,
    "artist_id" : 373,
    "metric_id" : 13
  },
  {
    "id" : 2861,
    "value" : 2,
    "artist_id" : 373,
    "metric_id" : 14
  },
  {
    "id" : 2862,
    "value" : 1,
    "artist_id" : 373,
    "metric_id" : 19
  },
  {
    "id" : 2863,
    "value" : 2,
    "artist_id" : 373,
    "metric_id" : 24
  },
  {
    "id" : 2864,
    "value" : 3,
    "artist_id" : 373,
    "metric_id" : 32
  },
  {
    "id" : 2865,
    "value" : 1,
    "artist_id" : 373,
    "metric_id" : 54
  },
  {
    "id" : 2866,
    "value" : 5,
    "artist_id" : 374,
    "metric_id" : 2
  },
  {
    "id" : 2867,
    "value" : 3,
    "artist_id" : 374,
    "metric_id" : 5
  },
  {
    "id" : 2868,
    "value" : 2,
    "artist_id" : 374,
    "metric_id" : 12
  },
  {
    "id" : 2869,
    "value" : 1,
    "artist_id" : 374,
    "metric_id" : 15
  },
  {
    "id" : 2870,
    "value" : 4,
    "artist_id" : 374,
    "metric_id" : 9
  },
  {
    "id" : 2871,
    "value" : 1,
    "artist_id" : 374,
    "metric_id" : 17
  },
  {
    "id" : 2872,
    "value" : 3,
    "artist_id" : 374,
    "metric_id" : 25
  },
  {
    "id" : 2873,
    "value" : 3,
    "artist_id" : 374,
    "metric_id" : 43
  },
  {
    "id" : 2874,
    "value" : 3,
    "artist_id" : 374,
    "metric_id" : 50
  },
  {
    "id" : 2875,
    "value" : 2,
    "artist_id" : 375,
    "metric_id" : 2
  },
  {
    "id" : 2876,
    "value" : 5,
    "artist_id" : 375,
    "metric_id" : 5
  },
  {
    "id" : 2877,
    "value" : 1,
    "artist_id" : 375,
    "metric_id" : 10
  },
  {
    "id" : 2878,
    "value" : 4,
    "artist_id" : 375,
    "metric_id" : 11
  },
  {
    "id" : 2879,
    "value" : 2,
    "artist_id" : 375,
    "metric_id" : 13
  },
  {
    "id" : 2880,
    "value" : 3,
    "artist_id" : 375,
    "metric_id" : 14
  },
  {
    "id" : 2881,
    "value" : 1,
    "artist_id" : 375,
    "metric_id" : 17
  },
  {
    "id" : 2882,
    "value" : 2,
    "artist_id" : 375,
    "metric_id" : 34
  },
  {
    "id" : 2883,
    "value" : 1,
    "artist_id" : 375,
    "metric_id" : 44
  },
  {
    "id" : 2884,
    "value" : 4,
    "artist_id" : 375,
    "metric_id" : 57
  },
  {
    "id" : 2885,
    "value" : 3,
    "artist_id" : 376,
    "metric_id" : 2
  },
  {
    "id" : 2886,
    "value" : 4,
    "artist_id" : 376,
    "metric_id" : 5
  },
  {
    "id" : 2887,
    "value" : 4,
    "artist_id" : 376,
    "metric_id" : 9
  },
  {
    "id" : 2888,
    "value" : 2,
    "artist_id" : 376,
    "metric_id" : 11
  },
  {
    "id" : 2889,
    "value" : 3,
    "artist_id" : 376,
    "metric_id" : 13
  },
  {
    "id" : 2890,
    "value" : 1,
    "artist_id" : 376,
    "metric_id" : 17
  },
  {
    "id" : 2891,
    "value" : 4,
    "artist_id" : 376,
    "metric_id" : 34
  },
  {
    "id" : 2892,
    "value" : 4,
    "artist_id" : 376,
    "metric_id" : 57
  },
  {
    "id" : 2893,
    "value" : 5,
    "artist_id" : 377,
    "metric_id" : 2
  },
  {
    "id" : 2894,
    "value" : 4,
    "artist_id" : 377,
    "metric_id" : 5
  },
  {
    "id" : 2895,
    "value" : 2,
    "artist_id" : 377,
    "metric_id" : 7
  },
  {
    "id" : 2896,
    "value" : 1,
    "artist_id" : 377,
    "metric_id" : 12
  },
  {
    "id" : 2897,
    "value" : 1,
    "artist_id" : 377,
    "metric_id" : 15
  },
  {
    "id" : 2898,
    "value" : 1,
    "artist_id" : 377,
    "metric_id" : 18
  },
  {
    "id" : 2899,
    "value" : 4,
    "artist_id" : 377,
    "metric_id" : 9
  },
  {
    "id" : 2900,
    "value" : 3,
    "artist_id" : 377,
    "metric_id" : 44
  },
  {
    "id" : 2901,
    "value" : 4,
    "artist_id" : 378,
    "metric_id" : 2
  },
  {
    "id" : 2902,
    "value" : 3,
    "artist_id" : 378,
    "metric_id" : 5
  },
  {
    "id" : 2903,
    "value" : 2,
    "artist_id" : 378,
    "metric_id" : 7
  },
  {
    "id" : 2904,
    "value" : 1,
    "artist_id" : 378,
    "metric_id" : 12
  },
  {
    "id" : 2905,
    "value" : 2,
    "artist_id" : 378,
    "metric_id" : 14
  },
  {
    "id" : 2906,
    "value" : 3,
    "artist_id" : 378,
    "metric_id" : 9
  },
  {
    "id" : 2907,
    "value" : 1,
    "artist_id" : 378,
    "metric_id" : 17
  },
  {
    "id" : 2908,
    "value" : 3,
    "artist_id" : 378,
    "metric_id" : 44
  },
  {
    "id" : 2909,
    "value" : 1,
    "artist_id" : 378,
    "metric_id" : 38
  },
  {
    "id" : 2910,
    "value" : 5,
    "artist_id" : 379,
    "metric_id" : 2
  },
  {
    "id" : 2911,
    "value" : 3,
    "artist_id" : 379,
    "metric_id" : 5
  },
  {
    "id" : 2912,
    "value" : 3,
    "artist_id" : 379,
    "metric_id" : 6
  },
  {
    "id" : 2913,
    "value" : 1,
    "artist_id" : 379,
    "metric_id" : 9
  },
  {
    "id" : 2914,
    "value" : 4,
    "artist_id" : 379,
    "metric_id" : 11
  },
  {
    "id" : 2915,
    "value" : 4,
    "artist_id" : 379,
    "metric_id" : 14
  },
  {
    "id" : 2916,
    "value" : 1,
    "artist_id" : 379,
    "metric_id" : 13
  },
  {
    "id" : 2917,
    "value" : 1,
    "artist_id" : 379,
    "metric_id" : 17
  },
  {
    "id" : 2918,
    "value" : 4,
    "artist_id" : 379,
    "metric_id" : 57
  },
  {
    "id" : 2919,
    "value" : 5,
    "artist_id" : 380,
    "metric_id" : 2
  },
  {
    "id" : 2920,
    "value" : 3,
    "artist_id" : 380,
    "metric_id" : 5
  },
  {
    "id" : 2921,
    "value" : 3,
    "artist_id" : 380,
    "metric_id" : 7
  },
  {
    "id" : 2922,
    "value" : 2,
    "artist_id" : 380,
    "metric_id" : 9
  },
  {
    "id" : 2924,
    "value" : 2,
    "artist_id" : 380,
    "metric_id" : 13
  },
  {
    "id" : 2927,
    "value" : 2,
    "artist_id" : 380,
    "metric_id" : 43
  },
  {
    "id" : 2928,
    "value" : 2,
    "artist_id" : 381,
    "metric_id" : 2
  },
  {
    "id" : 2929,
    "value" : 4,
    "artist_id" : 381,
    "metric_id" : 5
  },
  {
    "id" : 2930,
    "value" : 5,
    "artist_id" : 381,
    "metric_id" : 9
  },
  {
    "id" : 2931,
    "value" : 1,
    "artist_id" : 381,
    "metric_id" : 10
  },
  {
    "id" : 2932,
    "value" : 2,
    "artist_id" : 381,
    "metric_id" : 11
  },
  {
    "id" : 2933,
    "value" : 2,
    "artist_id" : 381,
    "metric_id" : 13
  },
  {
    "id" : 2934,
    "value" : 1,
    "artist_id" : 381,
    "metric_id" : 18
  },
  {
    "id" : 2935,
    "value" : 4,
    "artist_id" : 381,
    "metric_id" : 33
  },
  {
    "id" : 2936,
    "value" : 1,
    "artist_id" : 381,
    "metric_id" : 51
  },
  {
    "id" : 2937,
    "value" : 2,
    "artist_id" : 381,
    "metric_id" : 44
  },
  {
    "id" : 2938,
    "value" : 3,
    "artist_id" : 382,
    "metric_id" : 3
  },
  {
    "id" : 2939,
    "value" : 3,
    "artist_id" : 382,
    "metric_id" : 14
  },
  {
    "id" : 2940,
    "value" : 2,
    "artist_id" : 382,
    "metric_id" : 15
  },
  {
    "id" : 2941,
    "value" : 1,
    "artist_id" : 382,
    "metric_id" : 19
  },
  {
    "id" : 2942,
    "value" : 2,
    "artist_id" : 382,
    "metric_id" : 22
  },
  {
    "id" : 2943,
    "value" : 5,
    "artist_id" : 382,
    "metric_id" : 26
  },
  {
    "id" : 2944,
    "value" : 1,
    "artist_id" : 382,
    "metric_id" : 56
  },
  {
    "id" : 2945,
    "value" : 3,
    "artist_id" : 383,
    "metric_id" : 3
  },
  {
    "id" : 2946,
    "value" : 3,
    "artist_id" : 383,
    "metric_id" : 10
  },
  {
    "id" : 2947,
    "value" : 1,
    "artist_id" : 383,
    "metric_id" : 13
  },
  {
    "id" : 2948,
    "value" : 3,
    "artist_id" : 383,
    "metric_id" : 11
  },
  {
    "id" : 2949,
    "value" : 1,
    "artist_id" : 383,
    "metric_id" : 19
  },
  {
    "id" : 2950,
    "value" : 3,
    "artist_id" : 383,
    "metric_id" : 26
  },
  {
    "id" : 2951,
    "value" : 2,
    "artist_id" : 384,
    "metric_id" : 5
  },
  {
    "id" : 2952,
    "value" : 2,
    "artist_id" : 384,
    "metric_id" : 11
  },
  {
    "id" : 2953,
    "value" : 1,
    "artist_id" : 384,
    "metric_id" : 10
  },
  {
    "id" : 2954,
    "value" : 2,
    "artist_id" : 384,
    "metric_id" : 13
  },
  {
    "id" : 2955,
    "value" : 3,
    "artist_id" : 384,
    "metric_id" : 16
  },
  {
    "id" : 2956,
    "value" : 1,
    "artist_id" : 384,
    "metric_id" : 15
  },
  {
    "id" : 2957,
    "value" : 1,
    "artist_id" : 384,
    "metric_id" : 17
  },
  {
    "id" : 2958,
    "value" : 4,
    "artist_id" : 384,
    "metric_id" : 32
  },
  {
    "id" : 2959,
    "value" : 3,
    "artist_id" : 384,
    "metric_id" : 43
  },
  {
    "id" : 2960,
    "value" : 2,
    "artist_id" : 385,
    "metric_id" : 3
  },
  {
    "id" : 2961,
    "value" : 5,
    "artist_id" : 385,
    "metric_id" : 10
  },
  {
    "id" : 2962,
    "value" : 4,
    "artist_id" : 385,
    "metric_id" : 11
  },
  {
    "id" : 2963,
    "value" : 2,
    "artist_id" : 385,
    "metric_id" : 13
  },
  {
    "id" : 2964,
    "value" : 1,
    "artist_id" : 385,
    "metric_id" : 19
  },
  {
    "id" : 2965,
    "value" : 3,
    "artist_id" : 385,
    "metric_id" : 35
  },
  {
    "id" : 2966,
    "value" : 3,
    "artist_id" : 385,
    "metric_id" : 26
  },
  {
    "id" : 2967,
    "value" : 4,
    "artist_id" : 386,
    "metric_id" : 2
  },
  {
    "id" : 2968,
    "value" : 4,
    "artist_id" : 386,
    "metric_id" : 5
  },
  {
    "id" : 2969,
    "value" : 3,
    "artist_id" : 386,
    "metric_id" : 9
  },
  {
    "id" : 2970,
    "value" : 2,
    "artist_id" : 386,
    "metric_id" : 14
  },
  {
    "id" : 2971,
    "value" : 2,
    "artist_id" : 386,
    "metric_id" : 13
  },
  {
    "id" : 2972,
    "value" : 1,
    "artist_id" : 386,
    "metric_id" : 38
  },
  {
    "id" : 2973,
    "value" : 2,
    "artist_id" : 386,
    "metric_id" : 55
  },
  {
    "id" : 2974,
    "value" : 1,
    "artist_id" : 386,
    "metric_id" : 17
  },
  {
    "id" : 2975,
    "value" : 1,
    "artist_id" : 386,
    "metric_id" : 56
  },
  {
    "id" : 2976,
    "value" : 3,
    "artist_id" : 387,
    "metric_id" : 2
  },
  {
    "id" : 2977,
    "value" : 3,
    "artist_id" : 387,
    "metric_id" : 5
  },
  {
    "id" : 2978,
    "value" : 3,
    "artist_id" : 387,
    "metric_id" : 10
  },
  {
    "id" : 2979,
    "value" : 3,
    "artist_id" : 387,
    "metric_id" : 13
  },
  {
    "id" : 2980,
    "value" : 1,
    "artist_id" : 387,
    "metric_id" : 17
  },
  {
    "id" : 2981,
    "value" : 1,
    "artist_id" : 387,
    "metric_id" : 18
  },
  {
    "id" : 2982,
    "value" : 2,
    "artist_id" : 387,
    "metric_id" : 43
  },
  {
    "id" : 2983,
    "value" : 1,
    "artist_id" : 387,
    "metric_id" : 57
  },
  {
    "id" : 2984,
    "value" : 2,
    "artist_id" : 387,
    "metric_id" : 11
  },
  {
    "id" : 2985,
    "value" : 1,
    "artist_id" : 387,
    "metric_id" : 50
  },
  {
    "id" : 2986,
    "value" : 4,
    "artist_id" : 387,
    "metric_id" : 58
  },
  {
    "id" : 2989,
    "value" : 4,
    "artist_id" : 388,
    "metric_id" : 2
  },
  {
    "id" : 2990,
    "value" : 3,
    "artist_id" : 388,
    "metric_id" : 5
  },
  {
    "id" : 2991,
    "value" : 1,
    "artist_id" : 388,
    "metric_id" : 8
  },
  {
    "id" : 2992,
    "value" : 1,
    "artist_id" : 388,
    "metric_id" : 12
  },
  {
    "id" : 2993,
    "value" : 3,
    "artist_id" : 388,
    "metric_id" : 13
  },
  {
    "id" : 2994,
    "value" : 1,
    "artist_id" : 388,
    "metric_id" : 11
  },
  {
    "id" : 2995,
    "value" : 1,
    "artist_id" : 388,
    "metric_id" : 17
  },
  {
    "id" : 2996,
    "value" : 4,
    "artist_id" : 388,
    "metric_id" : 58
  },
  {
    "id" : 2997,
    "value" : 2,
    "artist_id" : 388,
    "metric_id" : 57
  },
  {
    "id" : 2998,
    "value" : 1,
    "artist_id" : 388,
    "metric_id" : 43
  },
  {
    "id" : 2999,
    "value" : 3,
    "artist_id" : 389,
    "metric_id" : 2
  },
  {
    "id" : 3000,
    "value" : 2,
    "artist_id" : 389,
    "metric_id" : 6
  },
  {
    "id" : 3001,
    "value" : 1,
    "artist_id" : 389,
    "metric_id" : 7
  },
  {
    "id" : 3002,
    "value" : 3,
    "artist_id" : 389,
    "metric_id" : 11
  },
  {
    "id" : 3003,
    "value" : 1,
    "artist_id" : 389,
    "metric_id" : 13
  },
  {
    "id" : 3004,
    "value" : 4,
    "artist_id" : 389,
    "metric_id" : 14
  },
  {
    "id" : 3005,
    "value" : 1,
    "artist_id" : 389,
    "metric_id" : 18
  },
  {
    "id" : 3006,
    "value" : 4,
    "artist_id" : 389,
    "metric_id" : 57
  },
  {
    "id" : 3007,
    "value" : 3,
    "artist_id" : 389,
    "metric_id" : 5
  },
  {
    "id" : 3008,
    "value" : 1,
    "artist_id" : 389,
    "metric_id" : 17
  },
  {
    "id" : 3009,
    "value" : 1,
    "artist_id" : 389,
    "metric_id" : 9
  },
  {
    "id" : 3010,
    "value" : 5,
    "artist_id" : 390,
    "metric_id" : 2
  },
  {
    "id" : 3011,
    "value" : 2,
    "artist_id" : 390,
    "metric_id" : 8
  },
  {
    "id" : 3012,
    "value" : 4,
    "artist_id" : 390,
    "metric_id" : 12
  },
  {
    "id" : 3013,
    "value" : 2,
    "artist_id" : 390,
    "metric_id" : 13
  },
  {
    "id" : 3014,
    "value" : 1,
    "artist_id" : 390,
    "metric_id" : 17
  },
  {
    "id" : 3015,
    "value" : 3,
    "artist_id" : 390,
    "metric_id" : 57
  },
  {
    "id" : 3016,
    "value" : 4,
    "artist_id" : 390,
    "metric_id" : 38
  },
  {
    "id" : 3017,
    "value" : 5,
    "artist_id" : 391,
    "metric_id" : 2
  },
  {
    "id" : 3018,
    "value" : 5,
    "artist_id" : 391,
    "metric_id" : 5
  },
  {
    "id" : 3019,
    "value" : 2,
    "artist_id" : 391,
    "metric_id" : 11
  },
  {
    "id" : 3020,
    "value" : 4,
    "artist_id" : 391,
    "metric_id" : 14
  },
  {
    "id" : 3021,
    "value" : 1,
    "artist_id" : 391,
    "metric_id" : 17
  },
  {
    "id" : 3022,
    "value" : 1,
    "artist_id" : 391,
    "metric_id" : 18
  },
  {
    "id" : 3023,
    "value" : 4,
    "artist_id" : 391,
    "metric_id" : 44
  },
  {
    "id" : 3024,
    "value" : 2,
    "artist_id" : 391,
    "metric_id" : 57
  },
  {
    "id" : 3025,
    "value" : 5,
    "artist_id" : 392,
    "metric_id" : 2
  },
  {
    "id" : 3026,
    "value" : 3,
    "artist_id" : 392,
    "metric_id" : 5
  },
  {
    "id" : 3027,
    "value" : 2,
    "artist_id" : 392,
    "metric_id" : 6
  },
  {
    "id" : 3028,
    "value" : 3,
    "artist_id" : 392,
    "metric_id" : 11
  },
  {
    "id" : 3029,
    "value" : 2,
    "artist_id" : 392,
    "metric_id" : 13
  },
  {
    "id" : 3030,
    "value" : 4,
    "artist_id" : 392,
    "metric_id" : 14
  },
  {
    "id" : 3031,
    "value" : 1,
    "artist_id" : 392,
    "metric_id" : 18
  },
  {
    "id" : 3032,
    "value" : 3,
    "artist_id" : 392,
    "metric_id" : 38
  },
  {
    "id" : 3033,
    "value" : 3,
    "artist_id" : 392,
    "metric_id" : 44
  },
  {
    "id" : 3034,
    "value" : 4,
    "artist_id" : 392,
    "metric_id" : 57
  },
  {
    "id" : 3035,
    "value" : 1,
    "artist_id" : 393,
    "metric_id" : 2
  },
  {
    "id" : 3036,
    "value" : 1,
    "artist_id" : 393,
    "metric_id" : 3
  },
  {
    "id" : 3037,
    "value" : 5,
    "artist_id" : 393,
    "metric_id" : 10
  },
  {
    "id" : 3038,
    "value" : 2,
    "artist_id" : 393,
    "metric_id" : 11
  },
  {
    "id" : 3039,
    "value" : 2,
    "artist_id" : 393,
    "metric_id" : 13
  },
  {
    "id" : 3040,
    "value" : 1,
    "artist_id" : 393,
    "metric_id" : 18
  },
  {
    "id" : 3041,
    "value" : 2,
    "artist_id" : 393,
    "metric_id" : 37
  },
  {
    "id" : 3042,
    "value" : 3,
    "artist_id" : 393,
    "metric_id" : 43
  },
  {
    "id" : 3043,
    "value" : 1,
    "artist_id" : 393,
    "metric_id" : 47
  },
  {
    "id" : 3044,
    "value" : 4,
    "artist_id" : 394,
    "metric_id" : 3
  },
  {
    "id" : 3045,
    "value" : 3,
    "artist_id" : 394,
    "metric_id" : 10
  },
  {
    "id" : 3046,
    "value" : 2,
    "artist_id" : 394,
    "metric_id" : 13
  },
  {
    "id" : 3047,
    "value" : 1,
    "artist_id" : 394,
    "metric_id" : 11
  },
  {
    "id" : 3048,
    "value" : 3,
    "artist_id" : 394,
    "metric_id" : 14
  },
  {
    "id" : 3049,
    "value" : 3,
    "artist_id" : 394,
    "metric_id" : 15
  },
  {
    "id" : 3050,
    "value" : 1,
    "artist_id" : 394,
    "metric_id" : 19
  },
  {
    "id" : 3051,
    "value" : 2,
    "artist_id" : 394,
    "metric_id" : 37
  },
  {
    "id" : 3052,
    "value" : 4,
    "artist_id" : 394,
    "metric_id" : 26
  },
  {
    "id" : 3053,
    "value" : 1,
    "artist_id" : 394,
    "metric_id" : 46
  },
  {
    "id" : 3054,
    "value" : 1,
    "artist_id" : 394,
    "metric_id" : 47
  },
  {
    "id" : 3055,
    "value" : 1,
    "artist_id" : 394,
    "metric_id" : 31
  },
  {
    "id" : 3056,
    "value" : 4,
    "artist_id" : 395,
    "metric_id" : 10
  },
  {
    "id" : 3057,
    "value" : 2,
    "artist_id" : 395,
    "metric_id" : 11
  },
  {
    "id" : 3058,
    "value" : 2,
    "artist_id" : 395,
    "metric_id" : 13
  },
  {
    "id" : 3059,
    "value" : 1,
    "artist_id" : 395,
    "metric_id" : 17
  },
  {
    "id" : 3060,
    "value" : 1,
    "artist_id" : 395,
    "metric_id" : 15
  },
  {
    "id" : 3061,
    "value" : 1,
    "artist_id" : 395,
    "metric_id" : 24
  },
  {
    "id" : 3062,
    "value" : 3,
    "artist_id" : 395,
    "metric_id" : 35
  },
  {
    "id" : 3063,
    "value" : 1,
    "artist_id" : 395,
    "metric_id" : 32
  },
  {
    "id" : 3064,
    "value" : 2,
    "artist_id" : 395,
    "metric_id" : 47
  },
  {
    "id" : 3065,
    "value" : 3,
    "artist_id" : 395,
    "metric_id" : 51
  },
  {
    "id" : 3066,
    "value" : 3,
    "artist_id" : 395,
    "metric_id" : 50
  },
  {
    "id" : 3067,
    "value" : 5,
    "artist_id" : 396,
    "metric_id" : 2
  },
  {
    "id" : 3068,
    "value" : 3,
    "artist_id" : 396,
    "metric_id" : 5
  },
  {
    "id" : 3069,
    "value" : 4,
    "artist_id" : 396,
    "metric_id" : 7
  },
  {
    "id" : 3070,
    "value" : 2,
    "artist_id" : 396,
    "metric_id" : 11
  },
  {
    "id" : 3071,
    "value" : 2,
    "artist_id" : 396,
    "metric_id" : 12
  },
  {
    "id" : 3072,
    "value" : 3,
    "artist_id" : 396,
    "metric_id" : 13
  },
  {
    "id" : 3073,
    "value" : 3,
    "artist_id" : 396,
    "metric_id" : 14
  },
  {
    "id" : 3074,
    "value" : 1,
    "artist_id" : 396,
    "metric_id" : 17
  },
  {
    "id" : 3075,
    "value" : 3,
    "artist_id" : 396,
    "metric_id" : 44
  },
  {
    "id" : 3076,
    "value" : 1,
    "artist_id" : 396,
    "metric_id" : 57
  },
  {
    "id" : 3077,
    "value" : 2,
    "artist_id" : 396,
    "metric_id" : 9
  },
  {
    "id" : 3078,
    "value" : 3,
    "artist_id" : 397,
    "metric_id" : 2
  },
  {
    "id" : 3079,
    "value" : 4,
    "artist_id" : 397,
    "metric_id" : 5
  },
  {
    "id" : 3080,
    "value" : 1,
    "artist_id" : 397,
    "metric_id" : 7
  },
  {
    "id" : 3081,
    "value" : 3,
    "artist_id" : 397,
    "metric_id" : 10
  },
  {
    "id" : 3082,
    "value" : 4,
    "artist_id" : 397,
    "metric_id" : 11
  },
  {
    "id" : 3083,
    "value" : 2,
    "artist_id" : 397,
    "metric_id" : 13
  },
  {
    "id" : 3084,
    "value" : 1,
    "artist_id" : 397,
    "metric_id" : 17
  },
  {
    "id" : 3085,
    "value" : 1,
    "artist_id" : 397,
    "metric_id" : 18
  },
  {
    "id" : 3086,
    "value" : 5,
    "artist_id" : 398,
    "metric_id" : 2
  },
  {
    "id" : 3087,
    "value" : 3,
    "artist_id" : 398,
    "metric_id" : 5
  },
  {
    "id" : 3088,
    "value" : 1,
    "artist_id" : 398,
    "metric_id" : 18
  },
  {
    "id" : 3089,
    "value" : 1,
    "artist_id" : 398,
    "metric_id" : 17
  },
  {
    "id" : 3090,
    "value" : 2,
    "artist_id" : 398,
    "metric_id" : 11
  },
  {
    "id" : 3091,
    "value" : 2,
    "artist_id" : 398,
    "metric_id" : 13
  },
  {
    "id" : 3092,
    "value" : 1,
    "artist_id" : 398,
    "metric_id" : 9
  },
  {
    "id" : 3093,
    "value" : 2,
    "artist_id" : 398,
    "metric_id" : 14
  },
  {
    "id" : 3094,
    "value" : 3,
    "artist_id" : 398,
    "metric_id" : 57
  },
  {
    "id" : 3095,
    "value" : 4,
    "artist_id" : 399,
    "metric_id" : 3
  },
  {
    "id" : 3096,
    "value" : 2,
    "artist_id" : 399,
    "metric_id" : 15
  },
  {
    "id" : 3097,
    "value" : 1,
    "artist_id" : 399,
    "metric_id" : 19
  },
  {
    "id" : 3098,
    "value" : 3,
    "artist_id" : 399,
    "metric_id" : 21
  },
  {
    "id" : 3099,
    "value" : 4,
    "artist_id" : 399,
    "metric_id" : 59
  },
  {
    "id" : 3100,
    "value" : 5,
    "artist_id" : 400,
    "metric_id" : 2
  },
  {
    "id" : 3101,
    "value" : 2,
    "artist_id" : 400,
    "metric_id" : 5
  },
  {
    "id" : 3102,
    "value" : 3,
    "artist_id" : 400,
    "metric_id" : 9
  },
  {
    "id" : 3103,
    "value" : 3,
    "artist_id" : 400,
    "metric_id" : 12
  },
  {
    "id" : 3104,
    "value" : 2,
    "artist_id" : 400,
    "metric_id" : 13
  },
  {
    "id" : 3105,
    "value" : 1,
    "artist_id" : 400,
    "metric_id" : 18
  },
  {
    "id" : 3106,
    "value" : 3,
    "artist_id" : 400,
    "metric_id" : 25
  },
  {
    "id" : 3107,
    "value" : 4,
    "artist_id" : 400,
    "metric_id" : 44
  },
  {
    "id" : 3108,
    "value" : 3,
    "artist_id" : 400,
    "metric_id" : 43
  },
  {
    "id" : 3109,
    "value" : 3,
    "artist_id" : 400,
    "metric_id" : 28
  },
  {
    "id" : 3110,
    "value" : 1,
    "artist_id" : 401,
    "metric_id" : 2
  },
  {
    "id" : 3111,
    "value" : 3,
    "artist_id" : 401,
    "metric_id" : 10
  },
  {
    "id" : 3112,
    "value" : 2,
    "artist_id" : 401,
    "metric_id" : 11
  },
  {
    "id" : 3113,
    "value" : 2,
    "artist_id" : 401,
    "metric_id" : 13
  },
  {
    "id" : 3114,
    "value" : 1,
    "artist_id" : 401,
    "metric_id" : 17
  },
  {
    "id" : 3115,
    "value" : 3,
    "artist_id" : 401,
    "metric_id" : 35
  },
  {
    "id" : 3116,
    "value" : 5,
    "artist_id" : 401,
    "metric_id" : 48
  },
  {
    "id" : 3117,
    "value" : 4,
    "artist_id" : 402,
    "metric_id" : 2
  },
  {
    "id" : 3118,
    "value" : 4,
    "artist_id" : 402,
    "metric_id" : 5
  },
  {
    "id" : 3119,
    "value" : 2,
    "artist_id" : 402,
    "metric_id" : 9
  },
  {
    "id" : 3120,
    "value" : 3,
    "artist_id" : 402,
    "metric_id" : 11
  },
  {
    "id" : 3121,
    "value" : 1,
    "artist_id" : 402,
    "metric_id" : 13
  },
  {
    "id" : 3122,
    "value" : 3,
    "artist_id" : 402,
    "metric_id" : 14
  },
  {
    "id" : 3123,
    "value" : 1,
    "artist_id" : 402,
    "metric_id" : 17
  },
  {
    "id" : 3124,
    "value" : 2,
    "artist_id" : 402,
    "metric_id" : 32
  },
  {
    "id" : 3125,
    "value" : 4,
    "artist_id" : 402,
    "metric_id" : 33
  },
  {
    "id" : 3126,
    "value" : 2,
    "artist_id" : 402,
    "metric_id" : 51
  },
  {
    "id" : 3127,
    "value" : 1,
    "artist_id" : 380,
    "metric_id" : 50
  },
  {
    "id" : 3128,
    "value" : 3,
    "artist_id" : 380,
    "metric_id" : 44
  },
  {
    "id" : 3131,
    "value" : 1,
    "artist_id" : 380,
    "metric_id" : 18
  },
  {
    "id" : 3132,
    "value" : 2,
    "artist_id" : 380,
    "metric_id" : 12
  },
  {
    "id" : 3133,
    "value" : 2,
    "artist_id" : 157,
    "metric_id" : 55
  },
  {
    "id" : 3134,
    "value" : 1,
    "artist_id" : 403,
    "metric_id" : 2
  },
  {
    "id" : 3135,
    "value" : 3,
    "artist_id" : 403,
    "metric_id" : 10
  },
  {
    "id" : 3136,
    "value" : 4,
    "artist_id" : 403,
    "metric_id" : 13
  },
  {
    "id" : 3137,
    "value" : 3,
    "artist_id" : 403,
    "metric_id" : 11
  },
  {
    "id" : 3138,
    "value" : 1,
    "artist_id" : 403,
    "metric_id" : 18
  },
  {
    "id" : 3139,
    "value" : 4,
    "artist_id" : 403,
    "metric_id" : 35
  },
  {
    "id" : 3140,
    "value" : 3,
    "artist_id" : 403,
    "metric_id" : 48
  },
  {
    "id" : 3141,
    "value" : 2,
    "artist_id" : 404,
    "metric_id" : 2
  },
  {
    "id" : 3142,
    "value" : 3,
    "artist_id" : 404,
    "metric_id" : 5
  },
  {
    "id" : 3143,
    "value" : 2,
    "artist_id" : 404,
    "metric_id" : 10
  },
  {
    "id" : 3144,
    "value" : 3,
    "artist_id" : 404,
    "metric_id" : 11
  },
  {
    "id" : 3145,
    "value" : 2,
    "artist_id" : 404,
    "metric_id" : 13
  },
  {
    "id" : 3146,
    "value" : 1,
    "artist_id" : 404,
    "metric_id" : 17
  },
  {
    "id" : 3147,
    "value" : 4,
    "artist_id" : 404,
    "metric_id" : 33
  },
  {
    "id" : 3148,
    "value" : 3,
    "artist_id" : 404,
    "metric_id" : 32
  },
  {
    "id" : 3149,
    "value" : 2,
    "artist_id" : 404,
    "metric_id" : 51
  },
  {
    "id" : 3150,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 2
  },
  {
    "id" : 3151,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 5
  },
  {
    "id" : 3152,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 10
  },
  {
    "id" : 3153,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 11
  },
  {
    "id" : 3154,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 13
  },
  {
    "id" : 3155,
    "value" : 1,
    "artist_id" : 405,
    "metric_id" : 17
  },
  {
    "id" : 3156,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 35
  },
  {
    "id" : 3157,
    "value" : 4,
    "artist_id" : 405,
    "metric_id" : 43
  },
  {
    "id" : 3158,
    "value" : 3,
    "artist_id" : 405,
    "metric_id" : 48
  },
  {
    "id" : 3159,
    "value" : 1,
    "artist_id" : 405,
    "metric_id" : 15
  },
  {
    "id" : 3160,
    "value" : 4,
    "artist_id" : 408,
    "metric_id" : 3
  },
  {
    "id" : 3161,
    "value" : 3,
    "artist_id" : 408,
    "metric_id" : 10
  },
  {
    "id" : 3162,
    "value" : 1,
    "artist_id" : 408,
    "metric_id" : 15
  },
  {
    "id" : 3163,
    "value" : 1,
    "artist_id" : 408,
    "metric_id" : 19
  },
  {
    "id" : 3164,
    "value" : 3,
    "artist_id" : 408,
    "metric_id" : 21
  },
  {
    "id" : 3165,
    "value" : 2,
    "artist_id" : 408,
    "metric_id" : 49
  },
  {
    "id" : 3166,
    "value" : 4,
    "artist_id" : 408,
    "metric_id" : 60
  },
  {
    "id" : 3167,
    "value" : 4,
    "artist_id" : 409,
    "metric_id" : 49
  },
  {
    "id" : 3168,
    "value" : 3,
    "artist_id" : 409,
    "metric_id" : 31
  },
  {
    "id" : 3169,
    "value" : 2,
    "artist_id" : 409,
    "metric_id" : 11
  },
  {
    "id" : 3170,
    "value" : 4,
    "artist_id" : 409,
    "metric_id" : 14
  },
  {
    "id" : 3171,
    "value" : 1,
    "artist_id" : 409,
    "metric_id" : 18
  },
  {
    "id" : 3172,
    "value" : 1,
    "artist_id" : 409,
    "metric_id" : 3
  },
  {
    "id" : 3173,
    "value" : 2,
    "artist_id" : 409,
    "metric_id" : 60
  },
  {
    "id" : 3174,
    "value" : 2,
    "artist_id" : 410,
    "metric_id" : 4
  },
  {
    "id" : 3175,
    "value" : 1,
    "artist_id" : 410,
    "metric_id" : 19
  },
  {
    "id" : 3176,
    "value" : 2,
    "artist_id" : 410,
    "metric_id" : 24
  },
  {
    "id" : 3177,
    "value" : 3,
    "artist_id" : 410,
    "metric_id" : 10
  },
  {
    "id" : 3178,
    "value" : 4,
    "artist_id" : 410,
    "metric_id" : 11
  },
  {
    "id" : 3179,
    "value" : 2,
    "artist_id" : 410,
    "metric_id" : 13
  },
  {
    "id" : 3180,
    "value" : 1,
    "artist_id" : 410,
    "metric_id" : 34
  },
  {
    "id" : 3181,
    "value" : 3,
    "artist_id" : 410,
    "metric_id" : 57
  },
  {
    "id" : 3182,
    "value" : 5,
    "artist_id" : 411,
    "metric_id" : 2
  },
  {
    "id" : 3183,
    "value" : 3,
    "artist_id" : 411,
    "metric_id" : 5
  },
  {
    "id" : 3184,
    "value" : 4,
    "artist_id" : 411,
    "metric_id" : 6
  },
  {
    "id" : 3185,
    "value" : 1,
    "artist_id" : 411,
    "metric_id" : 7
  },
  {
    "id" : 3186,
    "value" : 2,
    "artist_id" : 411,
    "metric_id" : 11
  },
  {
    "id" : 3187,
    "value" : 3,
    "artist_id" : 411,
    "metric_id" : 12
  },
  {
    "id" : 3188,
    "value" : 3,
    "artist_id" : 411,
    "metric_id" : 14
  },
  {
    "id" : 3189,
    "value" : 1,
    "artist_id" : 411,
    "metric_id" : 17
  },
  {
    "id" : 3190,
    "value" : 2,
    "artist_id" : 411,
    "metric_id" : 44
  },
  {
    "id" : 3191,
    "value" : 2,
    "artist_id" : 411,
    "metric_id" : 9
  },
  {
    "id" : 3192,
    "value" : 1,
    "artist_id" : 411,
    "metric_id" : 18
  },
  {
    "id" : 3193,
    "value" : 5,
    "artist_id" : 412,
    "metric_id" : 3
  },
  {
    "id" : 3194,
    "value" : 4,
    "artist_id" : 412,
    "metric_id" : 10
  },
  {
    "id" : 3195,
    "value" : 3,
    "artist_id" : 412,
    "metric_id" : 11
  },
  {
    "id" : 3196,
    "value" : 1,
    "artist_id" : 412,
    "metric_id" : 19
  },
  {
    "id" : 3197,
    "value" : 5,
    "artist_id" : 412,
    "metric_id" : 21
  },
  {
    "id" : 3198,
    "value" : 4,
    "artist_id" : 412,
    "metric_id" : 60
  },
  {
    "id" : 3199,
    "value" : 1,
    "artist_id" : 412,
    "metric_id" : 61
  },
  {
    "id" : 3200,
    "value" : 5,
    "artist_id" : 413,
    "metric_id" : 3
  },
  {
    "id" : 3201,
    "value" : 3,
    "artist_id" : 413,
    "metric_id" : 10
  },
  {
    "id" : 3202,
    "value" : 4,
    "artist_id" : 413,
    "metric_id" : 11
  },
  {
    "id" : 3203,
    "value" : 3,
    "artist_id" : 413,
    "metric_id" : 14
  },
  {
    "id" : 3204,
    "value" : 1,
    "artist_id" : 413,
    "metric_id" : 13
  },
  {
    "id" : 3205,
    "value" : 1,
    "artist_id" : 413,
    "metric_id" : 15
  },
  {
    "id" : 3206,
    "value" : 1,
    "artist_id" : 413,
    "metric_id" : 19
  },
  {
    "id" : 3207,
    "value" : 3,
    "artist_id" : 413,
    "metric_id" : 21
  },
  {
    "id" : 3208,
    "value" : 1,
    "artist_id" : 413,
    "metric_id" : 30
  },
  {
    "id" : 3209,
    "value" : 4,
    "artist_id" : 414,
    "metric_id" : 2
  },
  {
    "id" : 3210,
    "value" : 2,
    "artist_id" : 414,
    "metric_id" : 5
  },
  {
    "id" : 3211,
    "value" : 3,
    "artist_id" : 414,
    "metric_id" : 11
  },
  {
    "id" : 3212,
    "value" : 2,
    "artist_id" : 414,
    "metric_id" : 13
  },
  {
    "id" : 3213,
    "value" : 3,
    "artist_id" : 414,
    "metric_id" : 14
  },
  {
    "id" : 3214,
    "value" : 1,
    "artist_id" : 414,
    "metric_id" : 18
  },
  {
    "id" : 3215,
    "value" : 1,
    "artist_id" : 414,
    "metric_id" : 34
  },
  {
    "id" : 3216,
    "value" : 4,
    "artist_id" : 414,
    "metric_id" : 57
  },
  {
    "id" : 3217,
    "value" : 1,
    "artist_id" : 414,
    "metric_id" : 38
  },
  {
    "id" : 3218,
    "value" : 3,
    "artist_id" : 415,
    "metric_id" : 2
  },
  {
    "id" : 3219,
    "value" : 4,
    "artist_id" : 415,
    "metric_id" : 5
  },
  {
    "id" : 3220,
    "value" : 1,
    "artist_id" : 415,
    "metric_id" : 9
  },
  {
    "id" : 3221,
    "value" : 1,
    "artist_id" : 415,
    "metric_id" : 10
  },
  {
    "id" : 3222,
    "value" : 2,
    "artist_id" : 415,
    "metric_id" : 11
  },
  {
    "id" : 3223,
    "value" : 2,
    "artist_id" : 415,
    "metric_id" : 13
  },
  {
    "id" : 3224,
    "value" : 1,
    "artist_id" : 415,
    "metric_id" : 17
  },
  {
    "id" : 3225,
    "value" : 3,
    "artist_id" : 415,
    "metric_id" : 33
  },
  {
    "id" : 3226,
    "value" : 2,
    "artist_id" : 415,
    "metric_id" : 51
  },
  {
    "id" : 3227,
    "value" : 4,
    "artist_id" : 416,
    "metric_id" : 2
  },
  {
    "id" : 3228,
    "value" : 2,
    "artist_id" : 416,
    "metric_id" : 10
  },
  {
    "id" : 3229,
    "value" : 2,
    "artist_id" : 416,
    "metric_id" : 11
  },
  {
    "id" : 3230,
    "value" : 1,
    "artist_id" : 416,
    "metric_id" : 17
  },
  {
    "id" : 3231,
    "value" : 1,
    "artist_id" : 416,
    "metric_id" : 18
  },
  {
    "id" : 3232,
    "value" : 3,
    "artist_id" : 416,
    "metric_id" : 35
  },
  {
    "id" : 3233,
    "value" : 3,
    "artist_id" : 416,
    "metric_id" : 43
  },
  {
    "id" : 3234,
    "value" : 4,
    "artist_id" : 416,
    "metric_id" : 45
  },
  {
    "id" : 3235,
    "value" : 3,
    "artist_id" : 416,
    "metric_id" : 48
  },
  {
    "id" : 3236,
    "value" : 1,
    "artist_id" : 416,
    "metric_id" : 25
  },
  {
    "id" : 3237,
    "value" : 4,
    "artist_id" : 417,
    "metric_id" : 2
  },
  {
    "id" : 3238,
    "value" : 4,
    "artist_id" : 417,
    "metric_id" : 5
  },
  {
    "id" : 3239,
    "value" : 1,
    "artist_id" : 417,
    "metric_id" : 6
  },
  {
    "id" : 3240,
    "value" : 3,
    "artist_id" : 417,
    "metric_id" : 11
  },
  {
    "id" : 3241,
    "value" : 2,
    "artist_id" : 417,
    "metric_id" : 13
  },
  {
    "id" : 3242,
    "value" : 4,
    "artist_id" : 417,
    "metric_id" : 14
  },
  {
    "id" : 3243,
    "value" : 1,
    "artist_id" : 417,
    "metric_id" : 17
  },
  {
    "id" : 3244,
    "value" : 1,
    "artist_id" : 417,
    "metric_id" : 18
  },
  {
    "id" : 3245,
    "value" : 4,
    "artist_id" : 417,
    "metric_id" : 57
  },
  {
    "id" : 3246,
    "value" : 5,
    "artist_id" : 418,
    "metric_id" : 2
  },
  {
    "id" : 3247,
    "value" : 3,
    "artist_id" : 418,
    "metric_id" : 5
  },
  {
    "id" : 3248,
    "value" : 3,
    "artist_id" : 418,
    "metric_id" : 12
  },
  {
    "id" : 3249,
    "value" : 2,
    "artist_id" : 418,
    "metric_id" : 13
  },
  {
    "id" : 3250,
    "value" : 3,
    "artist_id" : 418,
    "metric_id" : 9
  },
  {
    "id" : 3251,
    "value" : 1,
    "artist_id" : 418,
    "metric_id" : 16
  },
  {
    "id" : 3252,
    "value" : 1,
    "artist_id" : 418,
    "metric_id" : 18
  },
  {
    "id" : 3253,
    "value" : 1,
    "artist_id" : 418,
    "metric_id" : 17
  },
  {
    "id" : 3254,
    "value" : 4,
    "artist_id" : 418,
    "metric_id" : 44
  },
  {
    "id" : 3255,
    "value" : 2,
    "artist_id" : 418,
    "metric_id" : 6
  },
  {
    "id" : 3256,
    "value" : 2,
    "artist_id" : 419,
    "metric_id" : 2
  },
  {
    "id" : 3257,
    "value" : 3,
    "artist_id" : 419,
    "metric_id" : 5
  },
  {
    "id" : 3258,
    "value" : 1,
    "artist_id" : 419,
    "metric_id" : 10
  },
  {
    "id" : 3259,
    "value" : 1,
    "artist_id" : 419,
    "metric_id" : 11
  },
  {
    "id" : 3260,
    "value" : 4,
    "artist_id" : 419,
    "metric_id" : 14
  },
  {
    "id" : 3261,
    "value" : 1,
    "artist_id" : 419,
    "metric_id" : 16
  },
  {
    "id" : 3262,
    "value" : 4,
    "artist_id" : 419,
    "metric_id" : 32
  },
  {
    "id" : 3263,
    "value" : 1,
    "artist_id" : 419,
    "metric_id" : 19
  },
  {
    "id" : 3264,
    "value" : 4,
    "artist_id" : 419,
    "metric_id" : 43
  },
  {
    "id" : 3265,
    "value" : 2,
    "artist_id" : 418,
    "metric_id" : 50
  },
  {
    "id" : 3266,
    "value" : 5,
    "artist_id" : 420,
    "metric_id" : 2
  },
  {
    "id" : 3267,
    "value" : 2,
    "artist_id" : 420,
    "metric_id" : 5
  },
  {
    "id" : 3268,
    "value" : 3,
    "artist_id" : 420,
    "metric_id" : 6
  },
  {
    "id" : 3269,
    "value" : 2,
    "artist_id" : 420,
    "metric_id" : 7
  },
  {
    "id" : 3270,
    "value" : 3,
    "artist_id" : 420,
    "metric_id" : 9
  },
  {
    "id" : 3271,
    "value" : 4,
    "artist_id" : 420,
    "metric_id" : 12
  },
  {
    "id" : 3272,
    "value" : 1,
    "artist_id" : 420,
    "metric_id" : 13
  },
  {
    "id" : 3273,
    "value" : 1,
    "artist_id" : 420,
    "metric_id" : 17
  },
  {
    "id" : 3274,
    "value" : 3,
    "artist_id" : 420,
    "metric_id" : 14
  },
  {
    "id" : 3275,
    "value" : 4,
    "artist_id" : 420,
    "metric_id" : 38
  },
  {
    "id" : 3276,
    "value" : 2,
    "artist_id" : 420,
    "metric_id" : 44
  },
  {
    "id" : 3277,
    "value" : 3,
    "artist_id" : 421,
    "metric_id" : 3
  },
  {
    "id" : 3278,
    "value" : 2,
    "artist_id" : 421,
    "metric_id" : 61
  },
  {
    "id" : 3279,
    "value" : 1,
    "artist_id" : 421,
    "metric_id" : 2
  },
  {
    "id" : 3280,
    "value" : 2,
    "artist_id" : 421,
    "metric_id" : 10
  },
  {
    "id" : 3281,
    "value" : 4,
    "artist_id" : 421,
    "metric_id" : 11
  },
  {
    "id" : 3282,
    "value" : 3,
    "artist_id" : 421,
    "metric_id" : 14
  },
  {
    "id" : 3283,
    "value" : 3,
    "artist_id" : 421,
    "metric_id" : 37
  },
  {
    "id" : 3284,
    "value" : 1,
    "artist_id" : 421,
    "metric_id" : 17
  },
  {
    "id" : 3285,
    "value" : 3,
    "artist_id" : 421,
    "metric_id" : 35
  },
  {
    "id" : 3286,
    "value" : 1,
    "artist_id" : 421,
    "metric_id" : 47
  },
  {
    "id" : 3287,
    "value" : 2,
    "artist_id" : 421,
    "metric_id" : 60
  },
  {
    "id" : 3288,
    "value" : 4,
    "artist_id" : 421,
    "metric_id" : 57
  },
  {
    "id" : 3289,
    "value" : 4,
    "artist_id" : 422,
    "metric_id" : 5
  },
  {
    "id" : 3290,
    "value" : 1,
    "artist_id" : 422,
    "metric_id" : 2
  },
  {
    "id" : 3291,
    "value" : 3,
    "artist_id" : 422,
    "metric_id" : 32
  },
  {
    "id" : 3292,
    "value" : 4,
    "artist_id" : 422,
    "metric_id" : 34
  },
  {
    "id" : 3293,
    "value" : 1,
    "artist_id" : 422,
    "metric_id" : 18
  },
  {
    "id" : 3294,
    "value" : 4,
    "artist_id" : 422,
    "metric_id" : 14
  },
  {
    "id" : 3295,
    "value" : 1,
    "artist_id" : 422,
    "metric_id" : 16
  },
  {
    "id" : 3296,
    "value" : 2,
    "artist_id" : 422,
    "metric_id" : 37
  },
  {
    "id" : 3297,
    "value" : 2,
    "artist_id" : 423,
    "metric_id" : 2
  },
  {
    "id" : 3298,
    "value" : 5,
    "artist_id" : 423,
    "metric_id" : 5
  },
  {
    "id" : 3299,
    "value" : 2,
    "artist_id" : 423,
    "metric_id" : 9
  },
  {
    "id" : 3300,
    "value" : 2,
    "artist_id" : 423,
    "metric_id" : 11
  },
  {
    "id" : 3301,
    "value" : 3,
    "artist_id" : 423,
    "metric_id" : 13
  },
  {
    "id" : 3302,
    "value" : 1,
    "artist_id" : 423,
    "metric_id" : 15
  },
  {
    "id" : 3303,
    "value" : 1,
    "artist_id" : 423,
    "metric_id" : 18
  },
  {
    "id" : 3304,
    "value" : 1,
    "artist_id" : 423,
    "metric_id" : 32
  },
  {
    "id" : 3305,
    "value" : 3,
    "artist_id" : 423,
    "metric_id" : 44
  },
  {
    "id" : 3306,
    "value" : 3,
    "artist_id" : 423,
    "metric_id" : 57
  },
  {
    "id" : 3307,
    "value" : 5,
    "artist_id" : 424,
    "metric_id" : 2
  },
  {
    "id" : 3308,
    "value" : 2,
    "artist_id" : 424,
    "metric_id" : 5
  },
  {
    "id" : 3309,
    "value" : 2,
    "artist_id" : 424,
    "metric_id" : 6
  },
  {
    "id" : 3310,
    "value" : 3,
    "artist_id" : 424,
    "metric_id" : 9
  },
  {
    "id" : 3311,
    "value" : 2,
    "artist_id" : 424,
    "metric_id" : 11
  },
  {
    "id" : 3312,
    "value" : 2,
    "artist_id" : 424,
    "metric_id" : 13
  },
  {
    "id" : 3313,
    "value" : 3,
    "artist_id" : 424,
    "metric_id" : 12
  },
  {
    "id" : 3314,
    "value" : 1,
    "artist_id" : 424,
    "metric_id" : 18
  },
  {
    "id" : 3315,
    "value" : 4,
    "artist_id" : 424,
    "metric_id" : 38
  },
  {
    "id" : 3316,
    "value" : 2,
    "artist_id" : 424,
    "metric_id" : 44
  },
  {
    "id" : 3317,
    "value" : 3,
    "artist_id" : 424,
    "metric_id" : 57
  },
  {
    "id" : 3318,
    "value" : 3,
    "artist_id" : 424,
    "metric_id" : 7
  },
  {
    "id" : 3319,
    "value" : 5,
    "artist_id" : 425,
    "metric_id" : 24
  },
  {
    "id" : 3320,
    "value" : 1,
    "artist_id" : 425,
    "metric_id" : 19
  },
  {
    "id" : 3322,
    "value" : 3,
    "artist_id" : 425,
    "metric_id" : 10
  },
  {
    "id" : 3323,
    "value" : 3,
    "artist_id" : 425,
    "metric_id" : 13
  },
  {
    "id" : 3324,
    "value" : 2,
    "artist_id" : 425,
    "metric_id" : 15
  },
  {
    "id" : 3325,
    "value" : 4,
    "artist_id" : 425,
    "metric_id" : 43
  },
  {
    "id" : 3326,
    "value" : 3,
    "artist_id" : 425,
    "metric_id" : 35
  },
  {
    "id" : 3327,
    "value" : 3,
    "artist_id" : 426,
    "metric_id" : 2
  },
  {
    "id" : 3328,
    "value" : 3,
    "artist_id" : 426,
    "metric_id" : 5
  },
  {
    "id" : 3329,
    "value" : 3,
    "artist_id" : 426,
    "metric_id" : 11
  },
  {
    "id" : 3330,
    "value" : 2,
    "artist_id" : 426,
    "metric_id" : 13
  },
  {
    "id" : 3331,
    "value" : 2,
    "artist_id" : 426,
    "metric_id" : 14
  },
  {
    "id" : 3332,
    "value" : 1,
    "artist_id" : 426,
    "metric_id" : 17
  },
  {
    "id" : 3333,
    "value" : 1,
    "artist_id" : 426,
    "metric_id" : 9
  },
  {
    "id" : 3334,
    "value" : 4,
    "artist_id" : 426,
    "metric_id" : 34
  },
  {
    "id" : 3335,
    "value" : 4,
    "artist_id" : 426,
    "metric_id" : 57
  },
  {
    "id" : 3336,
    "value" : 3,
    "artist_id" : 427,
    "metric_id" : 3
  },
  {
    "id" : 3337,
    "value" : 1,
    "artist_id" : 427,
    "metric_id" : 10
  },
  {
    "id" : 3338,
    "value" : 1,
    "artist_id" : 427,
    "metric_id" : 11
  },
  {
    "id" : 3339,
    "value" : 1,
    "artist_id" : 427,
    "metric_id" : 13
  },
  {
    "id" : 3340,
    "value" : 2,
    "artist_id" : 427,
    "metric_id" : 14
  },
  {
    "id" : 3341,
    "value" : 1,
    "artist_id" : 427,
    "metric_id" : 19
  },
  {
    "id" : 3342,
    "value" : 3,
    "artist_id" : 427,
    "metric_id" : 26
  },
  {
    "id" : 3343,
    "value" : 2,
    "artist_id" : 427,
    "metric_id" : 15
  },
  {
    "id" : 3344,
    "value" : 2,
    "artist_id" : 427,
    "metric_id" : 37
  },
  {
    "id" : 3345,
    "value" : 4,
    "artist_id" : 427,
    "metric_id" : 43
  },
  {
    "id" : 3346,
    "value" : 2,
    "artist_id" : 428,
    "metric_id" : 5
  },
  {
    "id" : 3347,
    "value" : 2,
    "artist_id" : 428,
    "metric_id" : 10
  },
  {
    "id" : 3348,
    "value" : 2,
    "artist_id" : 428,
    "metric_id" : 11
  },
  {
    "id" : 3349,
    "value" : 3,
    "artist_id" : 428,
    "metric_id" : 13
  },
  {
    "id" : 3350,
    "value" : 1,
    "artist_id" : 428,
    "metric_id" : 17
  },
  {
    "id" : 3351,
    "value" : 3,
    "artist_id" : 428,
    "metric_id" : 32
  },
  {
    "id" : 3352,
    "value" : 1,
    "artist_id" : 428,
    "metric_id" : 34
  },
  {
    "id" : 3353,
    "value" : 2,
    "artist_id" : 428,
    "metric_id" : 51
  },
  {
    "id" : 3354,
    "value" : 3,
    "artist_id" : 428,
    "metric_id" : 57
  },
  {
    "id" : 3355,
    "value" : 3,
    "artist_id" : 429,
    "metric_id" : 2
  },
  {
    "id" : 3356,
    "value" : 3,
    "artist_id" : 429,
    "metric_id" : 5
  },
  {
    "id" : 3357,
    "value" : 1,
    "artist_id" : 429,
    "metric_id" : 6
  },
  {
    "id" : 3358,
    "value" : 3,
    "artist_id" : 429,
    "metric_id" : 11
  },
  {
    "id" : 3359,
    "value" : 1,
    "artist_id" : 429,
    "metric_id" : 13
  },
  {
    "id" : 3360,
    "value" : 4,
    "artist_id" : 429,
    "metric_id" : 14
  },
  {
    "id" : 3361,
    "value" : 1,
    "artist_id" : 429,
    "metric_id" : 17
  },
  {
    "id" : 3362,
    "value" : 2,
    "artist_id" : 429,
    "metric_id" : 34
  },
  {
    "id" : 3363,
    "value" : 3,
    "artist_id" : 429,
    "metric_id" : 38
  },
  {
    "id" : 3364,
    "value" : 5,
    "artist_id" : 429,
    "metric_id" : 57
  },
  {
    "id" : 3365,
    "value" : 1,
    "artist_id" : 405,
    "metric_id" : 18
  },
  {
    "id" : 3366,
    "value" : 2,
    "artist_id" : 364,
    "metric_id" : 25
  },
  {
    "id" : 3367,
    "value" : 4,
    "artist_id" : 430,
    "metric_id" : 2
  },
  {
    "id" : 3368,
    "value" : 2,
    "artist_id" : 430,
    "metric_id" : 13
  },
  {
    "id" : 3369,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 14
  },
  {
    "id" : 3370,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 17
  },
  {
    "id" : 3371,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 34
  },
  {
    "id" : 3372,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 43
  },
  {
    "id" : 3373,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 50
  },
  {
    "id" : 3374,
    "value" : 4,
    "artist_id" : 430,
    "metric_id" : 51
  },
  {
    "id" : 3375,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 6
  },
  {
    "id" : 3376,
    "value" : 1,
    "artist_id" : 430,
    "metric_id" : 15
  },
  {
    "id" : 3377,
    "value" : 5,
    "artist_id" : 431,
    "metric_id" : 2
  },
  {
    "id" : 3378,
    "value" : 4,
    "artist_id" : 431,
    "metric_id" : 14
  },
  {
    "id" : 3379,
    "value" : 1,
    "artist_id" : 431,
    "metric_id" : 18
  },
  {
    "id" : 3380,
    "value" : 1,
    "artist_id" : 431,
    "metric_id" : 25
  },
  {
    "id" : 3381,
    "value" : 5,
    "artist_id" : 431,
    "metric_id" : 45
  },
  {
    "id" : 3382,
    "value" : 1,
    "artist_id" : 431,
    "metric_id" : 47
  },
  {
    "id" : 3383,
    "value" : 3,
    "artist_id" : 432,
    "metric_id" : 3
  },
  {
    "id" : 3384,
    "value" : 1,
    "artist_id" : 432,
    "metric_id" : 13
  },
  {
    "id" : 3385,
    "value" : 2,
    "artist_id" : 432,
    "metric_id" : 14
  },
  {
    "id" : 3386,
    "value" : 3,
    "artist_id" : 432,
    "metric_id" : 15
  },
  {
    "id" : 3387,
    "value" : 5,
    "artist_id" : 432,
    "metric_id" : 16
  },
  {
    "id" : 3388,
    "value" : 1,
    "artist_id" : 432,
    "metric_id" : 17
  },
  {
    "id" : 3389,
    "value" : 1,
    "artist_id" : 432,
    "metric_id" : 18
  },
  {
    "id" : 3390,
    "value" : 1,
    "artist_id" : 432,
    "metric_id" : 23
  },
  {
    "id" : 3391,
    "value" : 3,
    "artist_id" : 432,
    "metric_id" : 37
  },
  {
    "id" : 3392,
    "value" : 2,
    "artist_id" : 432,
    "metric_id" : 55
  },
  {
    "id" : 3393,
    "value" : 3,
    "artist_id" : 433,
    "metric_id" : 3
  },
  {
    "id" : 3394,
    "value" : 1,
    "artist_id" : 433,
    "metric_id" : 13
  },
  {
    "id" : 3395,
    "value" : 4,
    "artist_id" : 433,
    "metric_id" : 15
  },
  {
    "id" : 3396,
    "value" : 1,
    "artist_id" : 433,
    "metric_id" : 19
  },
  {
    "id" : 3397,
    "value" : 4,
    "artist_id" : 433,
    "metric_id" : 26
  },
  {
    "id" : 3398,
    "value" : 1,
    "artist_id" : 433,
    "metric_id" : 37
  },
  {
    "id" : 3399,
    "value" : 1,
    "artist_id" : 433,
    "metric_id" : 50
  },
  {
    "id" : 3400,
    "value" : 1,
    "artist_id" : 433,
    "metric_id" : 57
  },
  {
    "id" : 3401,
    "value" : 3,
    "artist_id" : 434,
    "metric_id" : 10
  },
  {
    "id" : 3402,
    "value" : 1,
    "artist_id" : 434,
    "metric_id" : 11
  },
  {
    "id" : 3403,
    "value" : 1,
    "artist_id" : 434,
    "metric_id" : 13
  },
  {
    "id" : 3404,
    "value" : 2,
    "artist_id" : 434,
    "metric_id" : 15
  },
  {
    "id" : 3405,
    "value" : 2,
    "artist_id" : 434,
    "metric_id" : 16
  },
  {
    "id" : 3406,
    "value" : 1,
    "artist_id" : 434,
    "metric_id" : 19
  },
  {
    "id" : 3407,
    "value" : 5,
    "artist_id" : 434,
    "metric_id" : 24
  },
  {
    "id" : 3408,
    "value" : 1,
    "artist_id" : 435,
    "metric_id" : 2
  },
  {
    "id" : 3409,
    "value" : 1,
    "artist_id" : 435,
    "metric_id" : 3
  },
  {
    "id" : 3410,
    "value" : 5,
    "artist_id" : 435,
    "metric_id" : 14
  },
  {
    "id" : 3411,
    "value" : 1,
    "artist_id" : 435,
    "metric_id" : 18
  },
  {
    "id" : 3412,
    "value" : 3,
    "artist_id" : 435,
    "metric_id" : 31
  },
  {
    "id" : 3413,
    "value" : 4,
    "artist_id" : 435,
    "metric_id" : 37
  },
  {
    "id" : 3414,
    "value" : 2,
    "artist_id" : 435,
    "metric_id" : 47
  },
  {
    "id" : 3415,
    "value" : 3,
    "artist_id" : 436,
    "metric_id" : 14
  },
  {
    "id" : 3416,
    "value" : 1,
    "artist_id" : 436,
    "metric_id" : 18
  },
  {
    "id" : 3417,
    "value" : 5,
    "artist_id" : 436,
    "metric_id" : 29
  },
  {
    "id" : 3418,
    "value" : 1,
    "artist_id" : 437,
    "metric_id" : 2
  },
  {
    "id" : 3419,
    "value" : 5,
    "artist_id" : 437,
    "metric_id" : 10
  },
  {
    "id" : 3420,
    "value" : 3,
    "artist_id" : 437,
    "metric_id" : 11
  },
  {
    "id" : 3421,
    "value" : 2,
    "artist_id" : 437,
    "metric_id" : 13
  },
  {
    "id" : 3422,
    "value" : 1,
    "artist_id" : 437,
    "metric_id" : 19
  },
  {
    "id" : 3423,
    "value" : 2,
    "artist_id" : 437,
    "metric_id" : 24
  },
  {
    "id" : 3424,
    "value" : 3,
    "artist_id" : 437,
    "metric_id" : 35
  },
  {
    "id" : 3425,
    "value" : 4,
    "artist_id" : 437,
    "metric_id" : 43
  },
  {
    "id" : 3426,
    "value" : 1,
    "artist_id" : 437,
    "metric_id" : 47
  },
  {
    "id" : 3427,
    "value" : 3,
    "artist_id" : 437,
    "metric_id" : 57
  },
  {
    "id" : 3428,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 5
  },
  {
    "id" : 3429,
    "value" : 2,
    "artist_id" : 438,
    "metric_id" : 10
  },
  {
    "id" : 3430,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 15
  },
  {
    "id" : 3431,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 19
  },
  {
    "id" : 3432,
    "value" : 2,
    "artist_id" : 438,
    "metric_id" : 32
  },
  {
    "id" : 3433,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 37
  },
  {
    "id" : 3434,
    "value" : 5,
    "artist_id" : 438,
    "metric_id" : 53
  },
  {
    "id" : 3435,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 54
  },
  {
    "id" : 3436,
    "value" : 1,
    "artist_id" : 438,
    "metric_id" : 58
  },
  {
    "id" : 3437,
    "value" : 3,
    "artist_id" : 438,
    "metric_id" : 60
  },
  {
    "id" : 3438,
    "value" : 2,
    "artist_id" : 439,
    "metric_id" : 10
  },
  {
    "id" : 3439,
    "value" : 1,
    "artist_id" : 439,
    "metric_id" : 11
  },
  {
    "id" : 3440,
    "value" : 2,
    "artist_id" : 439,
    "metric_id" : 13
  },
  {
    "id" : 3441,
    "value" : 2,
    "artist_id" : 439,
    "metric_id" : 14
  },
  {
    "id" : 3442,
    "value" : 2,
    "artist_id" : 439,
    "metric_id" : 15
  },
  {
    "id" : 3443,
    "value" : 1,
    "artist_id" : 439,
    "metric_id" : 18
  },
  {
    "id" : 3444,
    "value" : 2,
    "artist_id" : 439,
    "metric_id" : 37
  },
  {
    "id" : 3445,
    "value" : 1,
    "artist_id" : 439,
    "metric_id" : 47
  },
  {
    "id" : 3446,
    "value" : 3,
    "artist_id" : 439,
    "metric_id" : 53
  },
  {
    "id" : 3447,
    "value" : 1,
    "artist_id" : 440,
    "metric_id" : 10
  },
  {
    "id" : 3448,
    "value" : 1,
    "artist_id" : 440,
    "metric_id" : 13
  },
  {
    "id" : 3449,
    "value" : 3,
    "artist_id" : 440,
    "metric_id" : 14
  },
  {
    "id" : 3450,
    "value" : 1,
    "artist_id" : 440,
    "metric_id" : 18
  },
  {
    "id" : 3451,
    "value" : 4,
    "artist_id" : 440,
    "metric_id" : 29
  },
  {
    "id" : 3452,
    "value" : 2,
    "artist_id" : 440,
    "metric_id" : 49
  },
  {
    "id" : 3453,
    "value" : 1,
    "artist_id" : 440,
    "metric_id" : 60
  },
  {
    "id" : 3454,
    "value" : 3,
    "artist_id" : 441,
    "metric_id" : 10
  },
  {
    "id" : 3455,
    "value" : 1,
    "artist_id" : 441,
    "metric_id" : 13
  },
  {
    "id" : 3456,
    "value" : 2,
    "artist_id" : 441,
    "metric_id" : 14
  },
  {
    "id" : 3457,
    "value" : 1,
    "artist_id" : 441,
    "metric_id" : 15
  },
  {
    "id" : 3458,
    "value" : 1,
    "artist_id" : 441,
    "metric_id" : 19
  },
  {
    "id" : 3459,
    "value" : 2,
    "artist_id" : 441,
    "metric_id" : 29
  },
  {
    "id" : 3460,
    "value" : 5,
    "artist_id" : 441,
    "metric_id" : 53
  },
  {
    "id" : 3461,
    "value" : 1,
    "artist_id" : 441,
    "metric_id" : 54
  },
  {
    "id" : 3462,
    "value" : 1,
    "artist_id" : 441,
    "metric_id" : 58
  },
  {
    "id" : 3463,
    "value" : 2,
    "artist_id" : 441,
    "metric_id" : 60
  }
]
