import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
   console.log(props.results.phonetics) 
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
       
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <p key={index}>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  Listen
                </a>
                <br />
                {phonetic.text}
              </p>
            );
          })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
