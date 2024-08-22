import React from "react";
import "./Search.css";

const Search = ({ children }) => {
  return (
    <div className="search-container">
      <div className="search-content">{children}</div>
      <img src="/images/lupa.svg" alt="Search" className="search-image" />
    </div>
  );
};

export default Search;
