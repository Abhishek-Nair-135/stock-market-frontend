import React, { Component } from "react";
import "./App.css";
import One from "./components/cryptoOne";
import Two from "./components/cryptoTwo";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

const adjustArrays = (array, data) => {
  const tempArr = [...array, data];
  if (tempArr.length > 20) tempArr.shift();

  return tempArr;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-intro">React Market Watch</h1>
          <NavLink className="nav-link" to="/Binance_BNBBTC">
          Binance BNBBTC
          </NavLink>
          <NavLink className="nav-link" to="/Binance_BTCUSDT">
          Binance BTCUSDT
          </NavLink>
        </header>
        <Switch>
          <Route
            path="/Binance_BNBBTC"
            component={() => <One adjustArrays={adjustArrays} />}
          />
          <Route
            path="/Binance_BTCUSDT"
            component={() => <Two adjustArrays={adjustArrays} />}
          />
          <Redirect to="/Binance_BNBBTC" />
        </Switch>
      </div>
    );
  }
}

export default App;
