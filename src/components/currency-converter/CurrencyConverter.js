import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import CurrencySelect from "../currency-select/CurrencySelect";
import "./CurrencyConverter.css";
import CurrencyService from "../../services/CurrencyService";

function CurrencyConverter() {
  const [amount, setAmount] = useState("0.00");
  const [convertedAmount, setConvertedAmount] = useState("0.00");
  const [fromSymbol, setFromSymbol] = useState("USD");
  const [toSymbol, setToSymbol] = useState("BRL");

  const convert = (from, to, amount) => {
    (async () => {
      const { amount: _convertedAmount } =
        (await CurrencyService.getConvertedAmount(from, to, amount)) || {};
      setConvertedAmount(parseFloat(_convertedAmount).toFixed(2));
    })();
  };

  useEffect(() => {}, [convertedAmount]);

  const formattedDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleChange = (event) => {
    convert(fromSymbol, toSymbol, event.target.value);
    setAmount(event.target.value);
  };

  const handleSelectFrom = (symbol) => {
    convert(symbol, toSymbol, amount);
    setFromSymbol(symbol);
  };

  const handleSelectTo = (symbol) => {
    convert(fromSymbol, symbol, amount);
    setToSymbol(symbol);
  };

  return (
    <>
      <div className="custom-select-wrap">
        <CurrencySelect
          orientation="from"
          symbol={fromSymbol}
          onSelectChange={handleSelectFrom}
        />
        <input id="amount-from" onChange={handleChange} value={amount} />
      </div>
      <div className="custom-select-wrap">
        <CurrencySelect
          orientation="to"
          symbol={toSymbol}
          onSelectChange={handleSelectTo}
        />
        <input id="amount-to" value={convertedAmount} readOnly />
      </div>
      <div className="display-currency">
        {amount} {fromSymbol} = {convertedAmount} {toSymbol} as of{" "}
        {formattedDate}
      </div>
      <button
        id="btn"
        onClick={() => {
          convert(toSymbol, fromSymbol, amount);
          setFromSymbol(toSymbol);
          setToSymbol(fromSymbol);
        }}
      >
        <FontAwesomeIcon icon={faSync} />
        <span>Reverse Currencies</span>
      </button>
    </>
  );
}

export default CurrencyConverter;
