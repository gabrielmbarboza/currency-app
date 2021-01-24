import logo from './logo.png';
import './App.css';
import { SyncIcon } from '@material-ui/icons';

function App() {
  return (
    <div className="container">
    <div className="currency-box">
      <img src={ logo } classNameName="currency-logo"/> 
      <h2>Currency Converter</h2>
      <div className="custom-select-wrap">
        <select id="currency-from"> 
          <option selected >USD</option> 
          <option>BRL</option> 
          <option>EUR</option> 
          <option>BTC</option> 
          <option>ETH</option> 
        </select>
        <input id="amount-from" type="text" value="123.45"/>
      </div>
      <div className="custom-select-wrap">
        <select id="currency-to"> 
          <option>USD</option> 
          <option selected>BRL</option> 
          <option>EUR</option> 
          <option>BTC</option> 
          <option>ETH</option> 
        </select>
        <input id="amount-to" type="text" disabled />
      </div>
      
     <div className="display-currency">1 USD = 0,18 BRL em 12 Jan de 2021</div>
     <button id="btn"><SyncIcon />Reverse Currencies</button>
    </div>
    </div>
  );
}

export default App;
