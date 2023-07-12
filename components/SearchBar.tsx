"use client";
import React, { useState } from "react";
import SearchMenufacturer from "./SearchMenufacturer";

function SearchBar() {
  const handleSearch = () => {};
  const [manuFacturer, setManuFacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
