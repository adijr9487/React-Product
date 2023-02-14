import React from "react";
import "./Search.css";

const Search = (props) => {

  const updateSearch = (e) => {
    props.setSearch(e.target.value);
  }


  return (
    <div className="search">
      <input
        type="text"
        onChange={updateSearch}
        placeholder="Search for item with 'title'"
      />
    </div>
  );
};

export default Search;
