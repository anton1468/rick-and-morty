import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import EpisodeCard from "./EpisodeCard";
import TextField from "@material-ui/core/TextField";
import "./Episodes.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * %": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Episodes = () => {
  const classes = useStyles();
  const [page, setPage] = useState([1]);
  const [episodes, setEpisode] = useState([]);
  const [allPages, setAllPages] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${inputValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEpisode(data.results);
        setAllPages(data.info);
      });
  }, [page, inputValue]);
  const changePage = (count) => {
    setPage(count.target.innerText);
  };

  return (
    <div>
      <form className="search" noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
          variant="outlined"
          color="secondary"
          label="Search by name"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className="episode-container">
        {episodes === undefined
          ? null
          : episodes.map((episode) => <EpisodeCard episode={episode} />)}
        {allPages === undefined ? (
          <p>Try something else</p>
        ) : (
          <div className={classes.root}>
            <Pagination count={allPages.pages} onClick={changePage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;
