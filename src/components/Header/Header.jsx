import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
        <Link to="/characters">
          <li>Characters</li>
        </Link>
        <Link to="/mywatchlist">
          <li>My watch list</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
