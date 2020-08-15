import React, { useState, useEffect } from "react";
import axios from "../axios";
import { BASE_URL_IMAGE } from "../globals/keywords";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fecthData();
  }, [fetchUrl]);
  //   console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${BASE_URL_IMAGE}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
