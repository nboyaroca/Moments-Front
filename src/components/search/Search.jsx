import React from "react";
//import { useState } from "react";
import { FormSearch, InputSearch, BtSearch } from "./Search.styled";

function Search( {search, setSearch, getBySearch} ) { //entre curly brakets perquè estem deconstruint
  

  const onInputChange = (e) => {
    //està atent al què introduïm a l'input
    // if(e.target.value.length>=3) {
    //   console.log(e.target.value.length)
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBySearch(search);
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <InputSearch
        onChange={onInputChange}
        type="search"
        name="search"
        minlength="3"
        placeholder="Search..."
        // autocomplete="on"
        value={search || ''}/>
      <BtSearch type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </BtSearch>
    </FormSearch>
  );
}

export default Search;
