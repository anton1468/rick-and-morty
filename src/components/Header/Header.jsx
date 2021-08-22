import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-links">
      <Link to="/episodes">
        <Button size="medium" variant="outlined" color="primary">
          Episodes
        </Button>
      </Link>
      <Link to="/characters">
        <Button size="medium" variant="outlined" color="primary">
          Characters
        </Button>
      </Link>
      <Link to="/locations">
        <Button size="medium" variant="outlined" color="primary">
          Locations
        </Button>
      </Link>
      <Link to="/mywatchlist">
        <Button size="medium" variant="outlined" color="primary">
          My Watch List
        </Button>
      </Link>
    </div>
  );
};

export default Header;
