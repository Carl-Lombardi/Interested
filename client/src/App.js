import React, { Component } from "react";
import toolbar from "./components/toolbar/toolbar.js";
import SideToggle from "./components/sideToggle/sideToggle.js";
import Backdrop from "./components/backdrop/backdrop.js";
import "./App.css";
import "./components/toolbar/toolbar.css";


class App extends Component {
  state ={
    SideToggleOpen: false
};

  SideToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideToggleOpen: !prevState.SideToggleOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideToggleOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.SideToggleOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
   return (
      <div style= {{height: "100%"}}>
        <Toolbar sideClickHandler={this.SideToggleClickHandler} />
        <SideToggle show={this.state.SideToggleOpen} />
        {backdrop}
        <p>This is the page content!</p>
      </div>
    );
  }
}

export default App;
