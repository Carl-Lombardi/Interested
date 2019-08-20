// import React, { Component } from "react";
// import Toolbar from "./components/toolbar/toolbar.js";
// import SideToggle from "./components/sideToggle/sideToggle.js";
// import Backdrop from "./components/backdrop/backdrop.js";
// import "./App.css";
// import "./components/toolbar/toolbar.css";
// import Profile from "./components/profile/profile";


// class App extends Component {
//   state ={
//     SideToggleOpen: false
// };

//   SideToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {SideToggleOpen: !prevState.SideToggleOpen};
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({SideToggleOpen: false});
//   };

//   render() {
//     let backdrop;

//     if (this.state.SideToggleOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />
//     }
//    return (
//       <div style= {{height: "100%"}}>
//         <Toolbar sideClickHandler={this.SideToggleClickHandler} />
//         <SideToggle show={this.state.SideToggleOpen} />
//         {backdrop}
//         <p>This is the page content!</p>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <Profile />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
//add 3 imports
import fire from './config/Fire';
import Home from './pages/Home/home';
import Login from './Login';

class App extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }


    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
                    //get user info
        // var user = fire.auth().currentUser;

        if (user != null) {
          user.providerData.forEach(function (profile) {
            // dont need this code but leaving it as a safety measure   console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            //need to define the following
            console.log("  Age: " + profile.age);
            console.log("  Gender: " + profile.gender);
            console.log("  Hobbies: " + profile.hobbies);
            console.log("  State: " + profile.state);

          });
        }
        });

    }

    render() {
        return (
            <div className="App">
                {this.state.user ? (
                    <Home />
                ) :
                    (
                        <Login />
                    )}
            </div>
        );
    }
}

export default App;