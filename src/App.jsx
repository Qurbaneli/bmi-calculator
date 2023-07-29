import React, { useState } from "react";
import "./App.css";

function App() {
  //States
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  let [status, setStatus] = useState("");
  let [result, setResult] = useState("");

  function calculate() {
    if (weight > 0 && height > 0) {
      result = (weight / (((height / 100) * height) / 100)).toFixed(2);
      setResult(result);
      if (result < 18.5) {
        setStatus("Underweight");
      } else if (result > 18.5 && result < 24.9) {
        setStatus("Normal weight");
      } else if (result > 25 && result < 29.9) {
        setStatus("Overweight");
      } else if (result > 30 && result < 34.9) {
        setStatus("Obesity class 1");
      } else if (result > 35 && result < 39.9) {
        setStatus("Obesity class 2");
      } else if (result > 40) {
        setStatus("Obesity class 3");
      }
    } else {
      alert("Please enter values");
    }
  }

  function reset() {
    window.location.reload();
  }
  return (
    <div className="container">
      <div id="bmi">
        <div className="bmi-header">BMI Healthy Weight Calculator</div>
        <div className="bmi-box">
          <div className="status">
            Body Mass Index (BMI) = {result}
            <span className="weight-status">{status}</span>
          </div>

          <div className="inputs-box">
            <div className="input-item">
              <label htmlFor="height">Height(cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                id="height"
              />
            </div>

            <div className="input-item">
              <label htmlFor="weight">Weight(kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                id="weight"
              />
            </div>
          </div>

          <div className="buttons-box">
            <button onClick={calculate} className="submit-btn">
              Calculate
            </button>
            <button onClick={reset} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
