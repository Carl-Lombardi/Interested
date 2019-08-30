import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostForm from "../components/profile/Test";
import Results from "../pages/results/results";
import Home from "../pages/Home/home"
import Users from "../pages/userid/Uidp";



function Pages() {
    return (
        <div >
            <Router>
                <div>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/profile" component={PostForm} />
                    <Route exact path="/results" component={Results} />
                    <Route exact path="/users" component={Users} />
                </div>
            </Router>
        </div>
    );
}


export default Pages;