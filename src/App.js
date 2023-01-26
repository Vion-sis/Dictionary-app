import React from "react";
import Form from "./Form";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Dictionary</h1>
        <Form defaultSearch="Sunrise" />
      </div>
      <footer>
        <em>
          This project is{" "}
          <a
            href="https://github.com/Vion-sis/Dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            opensource{" "}
          </a>
          and coded by{" "}
          <a
            href="https://github.com/Vion-sis"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Viona
          </a>
        </em>
      </footer>
    </div>
  );
}

export default App;
