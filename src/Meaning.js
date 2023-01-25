import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition {}{index +1}:</strong> {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <ul>
        {props.meaning.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
}
