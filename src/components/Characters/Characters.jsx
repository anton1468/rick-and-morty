import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import CharacterCard from "./CharacterCard";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import "./Characters.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Characters = () => {
  const [page, setPage] = useState([1]);
  const classes = useStyles();
  const [character, setCharacter] = useState([]);
  const [allPages, setAllPages] = useState();
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=&status=${status}&species=${species}&gender=${gender}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacter(data.results);
        setAllPages(data.info);
      });
  }, [gender, page, status, species]);
  const changePage = (count) => {
    setPage(count.target.innerText);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleShowAll = () => {
    setGender(" ");
    setSpecies(" ");
    setStatus(" ");
  };
  return (
    <div className="character-container">
      <div className={"character-filter"}>
        <Button
          onClick={handleShowAll}
          size="small"
          variant="contained"
          color="secondary"
          disabled={
            status === " " && species === " " && gender === " " ? true : false
          }
        >
          Show all
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            onChange={handleChangeGender}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Unknown"}>Unknown</MenuItem>
            <MenuItem value={"Genderless"}>Genderless</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Species</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={species}
            onChange={handleChangeSpecies}
          >
            <MenuItem value={"Robot"}>Robot</MenuItem>
            <MenuItem value={"Human"}>Human</MenuItem>
            <MenuItem value={"Alien"}>Alien</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            onChange={handleChangeStatus}
          >
            <MenuItem value="Alive">Alive</MenuItem>
            <MenuItem value="Dead">Dead</MenuItem>
            <MenuItem value="Unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </div>

      {character === undefined ? (
        <div>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        character.map((characterList) => (
          <div>
            <CharacterCard characterId={characterList} />
          </div>
        ))
      )}
      {allPages === undefined ? (
        <p>Try something else</p>
      ) : (
        <div className={classes.root}>
          <Pagination count={allPages.pages} onClick={changePage} />
        </div>
      )}
    </div>
  );
};

export default Characters;
