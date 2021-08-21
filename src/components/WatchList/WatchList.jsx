import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { RiAddCircleLine, RiDeleteBin3Line } from "react-icons/ri";
import "./WatchList.scss";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const WatchList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const addItem = () => {
    setItems([...items, inputData]);
    setInputData("");
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <form className="search" noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
          variant="outlined"
          color="secondary"
          label="Add something"
          value={inputData}
          className="search-input"
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <RiAddCircleLine className="add-btn" onClick={addItem} />
      </form>
      <div className="item-list">
        {items.map((elem, ind) => (
          <div className="item" key={ind}>
            <p>{elem}</p>
            <RiDeleteBin3Line
              className="delete-btn"
              onClick={() => deleteItem(ind)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
