import React from "react";
import { MdSearch } from "react-icons/md";

import "./search-box.component.scss";

const SearchBox = () => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        //onChange={searchNotes}
        placeholder="Search the notes"
      />
    </div>
  );
};

export default SearchBox;
