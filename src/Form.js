import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

import "./Form.css";

export default function Form(props) {
  const [word, setWord] = useState(props.defaultSearch);
  const [searchResults, setSearchResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function showTheWordMeaning(response) {
    setSearchResults(response.data[0]);
  }

  function handleImageUrl(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(showTheWordMeaning);

    const api_key = `SKCts1DL1fHg8mgGeiFvA4wtWxjg7bbOnZHA1siD4lzJgdjOKMjTcTGw`;
    const header = { headers: { Authorization: `Bearer ${api_key}` } };
    const api_Url = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios.get(api_Url, header).then(handleImageUrl);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <div> ("Loading...")</div>;
  }
}
