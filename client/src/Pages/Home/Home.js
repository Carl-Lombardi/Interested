import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-header">

                    <h2>INTRESTED!?</h2>

                </div>

                <img src={logo} className="Home-logo" alt="logo" />

            </div>
        );
    }
}

export default Home;
