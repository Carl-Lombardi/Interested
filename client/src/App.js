import React, { Component } from "react";
import Toolbar from "./Components/toolbar/toolbar.js";
import SideToggle from "./Components/sideToggle/sideToggle.js";
import Backdrop from "./Components/backdrop/backdrop.js";
import "./App.css";
import "./Components/toolbar/toolbar.css";
//changed caps

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
