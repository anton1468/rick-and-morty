import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { RiAddCircleLine, RiDeleteBin3Line } from "react-icons/ri";
import "./WatchList.scss";

const getLocalItems = () => {
  let list = localStorage.getItem("watchAddList");
  if (list) {
    return JSON.parse(localStorage.getItem("watchAddList"));
  } else {
    return [];
  }
};
const WatchList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [completed, setCompleted] = useState(false);
  const addItem = () => {
    setItems([...items, { completed: completed, input: inputData }]);
    setInputData("");
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  useEffect(() => {
    localStorage.setItem("watchAddList", JSON.stringify(items));
  }, [items, completed]);
  const handleComplete = (item) => {
    setCompleted(!completed);
    item.completed = !completed;
  };
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
      {items.map((item, id) => (
        <div key={id} onClick={() => handleComplete(item)}>
          <p>{item.input}</p>
          <button onClick={() => deleteItem(id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
