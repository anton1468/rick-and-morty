import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import "./Episodes.scss";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEpisodes(data.results);
      });
  });
  const goToNextPage = () => {
    if (3 <= currentPage) {
      console.log("no more pages");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (1 >= currentPage) {
      console.log("no more pages");
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="episode-container">
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} />
      ))}
      <button onClick={goToPrevPage}>Prev page</button>
      <button onClick={goToNextPage}>Next page</button>
    </div>
  );
};

export default Episodes;
