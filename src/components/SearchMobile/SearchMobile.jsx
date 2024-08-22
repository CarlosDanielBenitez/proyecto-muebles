import React from "react";
import "./searchMobile.css";

const SearchMobile = ({ children }) => {
  return (
    <div className="mobile-search-container">
      <div className="mobile-search-content">{children}</div>
      <img src="/images/lupa.svg" alt="Search" className="search-image" />
    </div>
  );
};

export default SearchMobile;
