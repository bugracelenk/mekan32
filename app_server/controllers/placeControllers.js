const places = [
  {
    name: "Starbucks",
    address: "IYAŞ AVM",
    point: 4,
    facilities: ["Kahve", "Pasta", "Kek"],
    distance: 10,
    coordinates: {
      longitude: "37.783229696696935",
      altitude: "30.54527501415712",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
  {
    name: "Gloria Jeans",
    address: "IYAŞ Park AVM",
    point: 4,
    facilities: ["Kahve", "Pasta", "Kek"],
    distance: 10,
    coordinates: {
      longitude: "37.783229696696935",
      altitude: "30.54527501415712",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
  {
    name: "Sir Winston Pub",
    address: "Özkanlar Caddesi, Ramada Otel altı",
    point: 3,
    facilities: ["Alkol", "Yemek", "Tatlı"],
    distance: 15,
    coordinates: {
      longitude: "37.783229696696935",
      altitude: "30.54527501415712",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
  {
    name: "Sote",
    address: "Kutlubey mahallesi.",
    point: 5,
    facilities: ["Yemek"],
    distance: 20,
    coordinates: {
      longitude: "37.76606825921947",
      altitude: "30.555592095138355",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
  {
    name: "Alaçatı Muhallebicisi",
    address: "Iyaş AVM Yanı, Ertokuş Caddesi",
    point: 3,
    facilities: ["Kahve", "Pasta", "Kek", "Yemek"],
    distance: 10,
    coordinates: {
      longitude: "37.783229696696935",
      altitude: "30.54527501415712",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
  {
    name: "Dipnot",
    address: "Bayhanlar Sitesi Altı",
    point: 4,
    facilities: ["Kahve", "Kütüphane"],
    distance: 17,
    coordinates: {
      longitude: "37.78675588192699",
      altitude: "30.5460623177181",
    },
    openTimes: [
      {
        days: "Pazartesi-Cuma",
        opens: "08:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Cumartesi",
        opens: "10:00",
        closes: "22:00",
        closed: false,
      },
      {
        days: "Pazar",
        closed: true,
      },
    ],
    comments: [
      {
        author: "Altuğ Buğra Çelenk",
        point: 4,
        date: "2 Aralık 2020",
        comment: "Kahveleri çok güzel.",
      },
    ],
  },
];

const mainPage = (req, res, next) => {
  res.render("place-list", {
    title: "Ana Sayfa",
    appTitle: "Mekan32",
    appDesc: "Isparta civarındaki mekanları keşfedin",
    places,
  });
};

const placeInfo = (req, res, next) => {
  const placeInfo = places.filter((place) => place.name === req.query.place);
  res.render("place-info", { title: "Mekan Bilgisi", appTitle: "Mekan32", appDesc: "Isparta civarındaki mekanları keşfedin", ...placeInfo[0] });
};

const addComment = (req, res, next) => {
  const placeInfo = places.filter((place) => place.name === req.query.place);
  res.render("place-comment", { title: "Yorum Ekle", appTitle: "Mekan32", appDesc: "Isparta civarındaki mekanları keşfedin", ...placeInfo[0] });
};

module.exports = {
  mainPage,
  placeInfo,
  addComment,
};
