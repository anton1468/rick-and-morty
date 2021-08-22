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

const getLocalItems = () => {
  let list = localStorage.getItem("watchAddList");
  if (list) {
    return JSON.parse(localStorage.getItem("watchAddList"));
  } else {
    return [];
  }
};
const Episodes = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState([1]);
  const [episodes, setEpisode] = useState([]);
  const [allPages, setAllPages] = useState();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(getLocalItems());

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

  const addItem = (episode) => {
    if (items.some((e) => e.input === episode)) {
      alert("You already have it");
    } else {
      setItems([...items, { completed: false, input: episode }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("watchAddList", JSON.stringify(items));
  }, [items]);
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
      <div>
        <div className="episode-container">
          {episodes === undefined
            ? null
            : episodes.map((episode, id) => (
                <EpisodeCard key={id} episode={episode} addItem={addItem} />
              ))}
        </div>

        {allPages === undefined ? null : (
          <div className={classes.root}>
            <Pagination count={allPages.pages} onClick={changePage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;
