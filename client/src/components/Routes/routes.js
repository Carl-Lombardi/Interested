import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Toolbar from "../toolbar/toolbar"
import Home from "../../pages/Home/home";
import Profile from "../profile/profile";



function Nav() {
  return (
    <Router>
      <div>
        <Toolbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        
       </div>
    </Router>
  );
}

export default Nav;