import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";

import "./Search.css";

const Search = ({ history }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    /*e = event*/
    e.preventDefault(); /* this will prevent reload after form submit*/
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  };
  return (
    <Fragment>
      <MetaData title="Search - Jus Dogs" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        {/*<input type="submit" value="Search" />*/}
        <button type="submit" id="submitButton" color="primary">
          Search
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
