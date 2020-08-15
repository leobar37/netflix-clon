import requests from "../request";
import axios from "../axios";

export const RamdomMovie = async () => {
  const movies = await axios.get(requests.fetchTrending);
  let movie =
    movies.data.results[
      Math.floor(Math.random() * movies.data.results.length - 2)
    ];

  while ((movie == undefined) | (movie == null)) {
    movie =
      movies.data.results[
        Math.floor(Math.random() * movies.data.results.length - 2)
      ];
  }
  return movie;
};
