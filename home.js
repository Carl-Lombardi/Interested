import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Home.css";
import ContainedButtons from "../../Components/Button/button"


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-header">

                    <h2>INTERESTED!?</h2>

                </div>

                <img src={logo} className="Home-logo" alt="logo" />

              <ContainedButtons></ContainedButtons>

            </div>

        );
    }
}

export default Home;
