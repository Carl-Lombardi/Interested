import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Interested!?</h1>
        </div>
          <img className="App-intro" src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
