import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Firebase1 from './components/firebase/firebase';
import PostForm from "./components/profile/Test";
import Results from "./pages/results/results";



function App() {
    return (
        <div >
            <Router>
                <div>

                    <Firebase1></Firebase1>

                    <Route exact path="/profile" component={PostForm} />
                    <Route exact path="/results" component={Results} />

                </div>
            </Router>
        </div>
    );
}


export default App;