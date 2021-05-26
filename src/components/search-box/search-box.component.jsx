import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import "./search-box.component.scss";

const SearchBox = ({ searchField, searchHandler }) => {
  const getSearchField = (e) => {
    //console.log(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        //value={searchField}
        onChange={getSearchField}
        placeholder="Search the notes"
      />
    </div>
  );
};

export default SearchBox;
