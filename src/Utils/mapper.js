export const mapperFilms = (movies) => {
  return movies.map(
    ({ id, poster_path: poster, title, vote_average: votes }) => ({
      id,
      poster,
      title,
      votes,
      watched: false,
    })
  );
};

// 2. Перейменовуємо poster_path: poster, vote_average: votes
// 1. вводимо адресу + підставляємо ключ https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY}

// https://api.themoviedb.org/3/trending/all/week?api_key=5ce599886a4c0703a030654068991e03

// {
//   "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg",
//         "id": 507086,
//         "title": "Jurassic World Dominion",
//         "original_language": "en",
//         "original_title": "Jurassic World Dominion",
//         "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
//         "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
//         "media_type": "movie",
//         "genre_ids": [
//           12,
//           28,
//           878
//         ],
//         "popularity": 6252.796,
//         "release_date": "2022-06-01",
//         "video": false,
//         "vote_average": 6.876,
//         "vote_count": 1418
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/8H64YmIYxpRJgSTuLUGRUSyi2kN.jpg",
//         "id": 92830,
//         "name": "Obi-Wan Kenobi",
//         "original_language": "en",
//         "original_name": "Obi-Wan Kenobi",
//         "overview": "During the reign of the Galactic Empire, former Jedi Master, Obi-Wan Kenobi, embarks on a crucial mission to confront allies turned enemies and face the wrath of the Empire.",
//         "poster_path": "/qJRB789ceLryrLvOKrZqLKr2CGf.jpg",
//         "media_type": "tv",
//         "genre_ids": [
//           10765,
//           10759,
//           18
//         ],
//         "popularity": 561.805,
//         "first_air_date": "2022-05-26",
//         "vote_average": 7.666,
//         "vote_count": 590,
//         "origin_country": [
//           "US"
//         ]
//       }
//   ]
//   "total_pages": 1000,
// "total_results": 20000
// }
