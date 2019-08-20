import React, { Component } from 'react';
import logo from "./images/logo.png";
import "./home.css";
import ContainedButtons from "../../components/button/button.js";
import fire from '../../config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="Home">
                <div className="Home-header">

                    <h2>INTERESTED!?</h2>
                    <button onClick={this.logout}>Logout</button>
                </div>

                <img src={logo} className="Home-logo" alt="logo" />

              <ContainedButtons></ContainedButtons>

            </div>

        );
    }
}

export default Home;
