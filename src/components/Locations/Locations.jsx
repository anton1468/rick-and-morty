import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import "./Locations.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * %": {
      marginTop: theme.spacing(2),
      textAlign: "center",
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
const Locations = () => {
  const classes = useStyles();
  const [page, setPage] = useState([1]);
  const [location, setLocation] = useState([]);
  const [allPages, setAllPages] = useState();
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("");
  const [dimension, setInputDimension] = useState("");
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/location/?page=${page}&name=${inputValue}&type=${type}&dimension=${dimension}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLocation(data.results);
        setAllPages(data.info);
      });
  }, [page, inputValue, type, dimension]);
  const changePage = (count) => {
    setPage(count.target.innerText);
  };
  console.log(location);
  const handleChangeType = (event) => {
    setType(event.target.value);
    setPage([1]);
  };

  return (
    <div>
      <div className="search">
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="Search by name"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="Search by dimension"
            onChange={(e) => setInputDimension(e.target.value)}
          />
        </form>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Type of planet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleChangeType}
          >
            <MenuItem value={"Planet"}>Planet</MenuItem>
            <MenuItem value={"TV"}>TV</MenuItem>
            <MenuItem value={"Resort"}>Resort</MenuItem>
            <MenuItem value={"Microverse"}>Microverse</MenuItem>
            <MenuItem value={"Dream"}>Dream</MenuItem>
            <MenuItem value={"Cluster"}>Cluster</MenuItem>
            <MenuItem value={"Space station"}>Space station</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="locations">
        {location === undefined ? (
          <div>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          location.map((locationList, id) => (
            <div key={id}>
              <LocationCard locationList={locationList} />
            </div>
          ))
        )}
      </div>

      {allPages === undefined ? null : (
        <div className={classes.root}>
          <Pagination count={allPages.pages} onClick={changePage} />
        </div>
      )}
    </div>
  );
};

export default Locations;
