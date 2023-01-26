import React from "react";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className = "meaningResults"> 
                <strong>
                  {index + 1}.
                </strong>{" "}
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
        <ul className="synonym">
          {props.meaning.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
