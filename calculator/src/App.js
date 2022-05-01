import "./App.css";
import React, { useEffect, useState } from "react";
import { allButton } from "./constant/button";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const clear = () => {
    setNumber("");
    setResult("");
  };

  const handlePress = (e) => {
    setNumber(number.concat(e.target.name));
  };

  const handleCalculate = () => {
    setResult(eval(number).toString());
  };

  return (
    <div className="App">
      <div className="calc">
        <div className="input">
          <form>
            <input type="text" value={number} />
          </form>
        </div>
        <div className="display">
          <p>=</p>
          <p>{result}</p>
        </div>
        <button className="clear" onClick={clear}>
          <p
            style={{
              margin: 0,
              padding: 20,
              borderRadius: 50,
            }}
          >
            CLEAR
          </p>
        </button>
        {allButton.map((el) => {
          return (
            <button
              onClick={handlePress}
              name={el.name}
              className={`btn ${el.class}`}
            >
              {el.button}
            </button>
          );
        })}
        <button onClick={handleCalculate} name="" className="btn symbol">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
