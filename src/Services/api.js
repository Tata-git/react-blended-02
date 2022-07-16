import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
// https://image.tmdb.org/t/p/{file_size}/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
// const IMAGE_URL = "https://image.tmdb.org/t/p/";
const API_KEY = "5ce599886a4c0703a030654068991e03";

axios.defaults.baseURL = BASE_URL;
// https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY}

export const getMovies = (page) =>
  axios.get(`trending/movie/week?api_key=${API_KEY}&p=${page}`);
