import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";

const WatchList = () => {
  return (
    <div>
      <form className="search" noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
          variant="outlined"
          color="secondary"
          label="Search by name"
        />
      </form>
    </div>
  );
};

export default WatchList;
