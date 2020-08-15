import React, { useState, useEffect } from "react";
import { RamdomMovie } from "../services/movies";
import { BASE_URL_IMAGE } from "../globals/keywords";
import "./banner.css";

const useCurrentMovie = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    RamdomMovie().then((mov) => {
      setMovie(mov);
    });
  }, []);

  return movie;
};

function Banner() {
  const movie = useCurrentMovie();
  const headerStyle = {
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundImage: `
    linear-gradient(
        180deg,
        rgba(37, 37, 37, 0.4),
        #111
      ),
    url(${BASE_URL_IMAGE}${movie?.poster_path}) `,
    backgroundPosition: "center top",
  };
  const truncateText = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  console.log("loaf movie");
  console.log(movie);
  return (
    <header className="banner" style={headerStyle}>
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner_button">play </button>
          <button className="banner_button">My List</button>
        </div>
        <h3 className="banner_description">
          {truncateText(movie?.overview || "", 150)}
        </h3>
      </div>
      {/* <div className="banner-fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
