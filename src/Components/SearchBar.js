import React from "react";
// Styling

const SearchBar = (props) => {
  const checkLength = (string) => {
    if (string.length >= 2) props.setQuery(string);
    else props.setQuery("");
  };

  return (
    <div className="search">
      <input
        className="searchbar"
        onChange={(event) => checkLength(event.target.value)}
        placeholder="Search "
      />
    </div>
  );
};

export default SearchBar;
