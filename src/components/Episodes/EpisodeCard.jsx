import React from "react";
import "./Episodes.scss";
const EpisodeCard = (episode) => {
  const card = episode.episode;

  return (
    <div className="episode-card">
      <p>{card.name}</p>
      <p>Value of characters:{card.characters.length}</p>
      <a href={card.url}>Link to episode </a>
    </div>
  );
};

export default EpisodeCard;
