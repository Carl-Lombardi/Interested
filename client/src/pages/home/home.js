import React, { Component } from 'react';
import logo from "./images/logo.png";
import "./home.css";
import fire from '../../config/Fire';
import  Toolbar from "../../components/toolbar/toolbar"



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

                    <Toolbar></Toolbar>
                   
                </div>


                <img src={logo} className="Home-logo" alt="logo" />

                
                <button onClick={this.logout}>Logout</button>

            </div>

        );
    }
}

export default Home;
