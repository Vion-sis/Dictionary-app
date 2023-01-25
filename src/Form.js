import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Form.css";

export default function Form() {
  const [word, setWord] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function showTheWordMeaning(response) {
    setSearchResults(response.data[0]);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(showTheWordMeaning);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function updateWordUpdate(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <div className="Form">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateWordUpdate}
              className="me-2 btn btn-light"
            />
            <input type="submit" value={"search"} className="btn btn-info" />
          </form>
        </div>
      </div>
      <Results results={searchResults} />
    </div>
  );
}
