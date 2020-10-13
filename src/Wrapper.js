import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

class Wrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <App />
        </div>
      </BrowserRouter>
    );
  }
}

export default Wrapper;
