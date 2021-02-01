import React, { useState, useEffect } from "react";
import "./CurrencySelect.css";
import CurrencyService from "../../services/CurrencyService";

const CurrencySelect = (props) => {
  const [currencies, setCurrencies] = useState([]);
  const selectId = `currency-${props.orientation}`;

  useEffect(() => {
    (async () => {
      const data = await CurrencyService.getCurrencies();
      setCurrencies(data);
    })();
  }, []);

  const handleChange = (event) => {
    props.onSelectChange(event.target.value);
  };

  return (
    <div>
      <select id={selectId} onChange={handleChange} value={props.symbol}>
        {currencies.map((currency) => (
          <option key={currency.symbol} value={currency.symbol}>
            {currency.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
