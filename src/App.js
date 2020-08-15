import React from "react";

import "./App.css";
import Row from "./components/Row";
// import request from './request'
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="trendig Now" fetchUrl={requests.fetchTrending} />
      <Row title="top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
