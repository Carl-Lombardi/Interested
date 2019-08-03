import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar.js";
import SideToggle from "./Components/SideToggle/SideToggle.js";
import Backdrop from "./Components/Backdrop/Backdrop.js";
import "./App.css";
import "./Components/Toolbar/Toolbar.css";

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
