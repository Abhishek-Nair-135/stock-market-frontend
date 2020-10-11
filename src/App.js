import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  state = {
    stocks: []
  }
  componentDidMount(){
   const socket = openSocket('http://localhost:4000');
   socket.on('stock', data => {
     let newStocks = [...this.state.stocks];
     newStocks.push(data);
     this.setState({
      stocks: newStocks
     })
   })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h4>{this.state.stocks}</h4>
      </div>
    );
  }
}

export default App;
