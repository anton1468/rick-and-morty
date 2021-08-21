import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const EpisodeCard = (episode) => {
  const episodeItem = episode.episode;
  const classes = useStyles();
  return (
    <div className="episode-card">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="body2" component="p">
            {episodeItem.name}
          </Typography>
          <Typography variant="h6" component="h6">
            Episode num: {episodeItem.episode}
          </Typography>
          <Typography variant="h7" component="h7">
            Number of characters: {episodeItem.characters.length}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default EpisodeCard;
