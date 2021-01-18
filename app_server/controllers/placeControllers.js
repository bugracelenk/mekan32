const _places = [
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

const fixed = require("./fixed");
const axios = require("axios");
const { apiUrl } = require("./api");

const formatDistance = (distance) => {
  if (distance > 1000) {
    return parseFloat(distance / 1000).toFixed(1) + " km";
  } else {
    return parseFloat(distance).toFixed(1) + " m";
  }
};

const mainPage = async (req, res, next) => {
  try {
    const query =
      "?" +
      Object.keys(req.query)
        .map(function (key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(req.query[key]);
        })
        .join("&");

    const placesRaw = await axios.get(query !== "" ? `${apiUrl}/place/${query}` : `${apiUrl}/place`);

    const places = placesRaw.data.places.map((place) => {
      return {
        ...place,
        distance: formatDistance(place.distance),
      };
    });

    return res.render("place-list", {
      title: "Ana Sayfa",
      places,
      ...fixed,
    });
  } catch (err) {
    console.log(err);
  }
};

const placeInfo = async (req, res, next) => {
  const placeInfo = await axios.get(`${apiUrl}/place/${req.query.id}`);

  return res.render("place-info", {
    title: "Mekan Bilgisi",
    ...placeInfo.data.place,
    ...fixed,
  });
};

const addComment = async (req, res, next) => {
  const placeInfo = await axios.get(`${apiUrl}/place/${req.query.placeId}`);
  return res.render("place-comment", {
    title: "Yorum Ekle",
    ...placeInfo.data.place,
    ...fixed,
    error: req.query.error,
    placeId: req.query.placeId,
  });
};

const addCommentPost = async (req, res, next) => {
  try {
    const { point, name, comment } = req.body;
    if (!point || !name || !comment) {
      return res.redirect(`/place/comment/?placeId=${req.query.placeId}&error=yes`);
    }

    const createdComment = await axios.post(`${apiUrl}/comment`, { point: parseInt(point), author: name, comment, placeId: req.query.placeId });
    return res.redirect(`/place/details/?id=${req.query.placeId}&error=no`);
  } catch (err) {
    return res.redirect(`/place/comment/?placeId=${req.query.placeId}&error=yes&errorText=${err.message}`);
  }
};

module.exports = {
  mainPage,
  placeInfo,
  addComment,
  addCommentPost,
};
