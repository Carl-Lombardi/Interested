import React, { Component } from 'react';
import './App.css';
import Firebase1 from './components/firebase/firebase';


    class App extends Component{
    render() {
        return (
            <div >
                {
                    <Firebase1></Firebase1>
               }
            </div>
        );
    }
}

export default App;

