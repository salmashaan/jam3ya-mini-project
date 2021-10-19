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
        onChange={(event) => checkLength(event.target.value)}
        placeholder="Search for a Jam3ya Title"
      />
    </div>
  );
};

export default SearchBar;
