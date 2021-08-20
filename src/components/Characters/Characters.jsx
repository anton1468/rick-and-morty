import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import CharacterCard from "./CharacterCard";
import "./Characters.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const Characters = () => {
  const [page, setPage] = useState([1]);
  const classes = useStyles();
  const [character, setCharacter] = useState([]);
  const [allPages, setAllPages] = useState();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacter(data.results);
        setAllPages(data.info.pages);
      });
  });
  const changePage = (count) => {
    setPage(count.target.innerText);
  };
  return (
    <div className="character-container">
      {character.map((characterList) => (
        <div>
          <CharacterCard characterId={characterList} />
        </div>
      ))}
      <div className={classes.root}>
        <Pagination count={allPages} onClick={changePage} />
      </div>
    </div>
  );
};

export default Characters;
