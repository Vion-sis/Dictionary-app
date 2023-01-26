import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Form.css";

export default function Form(props) {
  const [word, setWord] = useState(props.defaultSearch);
  const [searchResults, setSearchResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function showTheWordMeaning(response) {
    setSearchResults(response.data[0]);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTheWordMeaning);
  }
  function load() {
    setLoaded(true);
    searchWord();
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function updateWordUpdate(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <div className="Form">
          <section>
            <div className="header">What word do you want to look up?</div>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={updateWordUpdate}
                defaultValue={props.defaultSearch}
                className="me-2 btn btn-light w-100"
              />
            </form>
            <p className="example">search word e.x sunset, hello, wine etc..</p>
          </section>
        </div>
        <Results results={searchResults} />
      </div>
    );
  } else {
    load();
    return <div> ("Loading...")</div>;
  }
}
