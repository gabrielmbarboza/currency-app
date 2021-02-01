import React from "react";
import logo from "./logo.png";
import "./App.css";
import CurrencyConverter from "./components/currency-converter/CurrencyConverter";

function App() {
  return (
    <div className="container">
      <div className="currency-box">
        <img src={logo} className="currency-logo" alt="Logo" />
        <h2>Currency Converter</h2>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
