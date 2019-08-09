import React, { Component } from "react";
import  ControlledOpenSelect from "../../components/form/form";



class results extends Component {
    render() {
        return (
            <div className="result">
                <div className="result-header">

                    <h2>INTERESTED!?</h2>

                    <ControlledOpenSelect></ControlledOpenSelect>
                </div>

               

              
            </div>

        );
    }
}

export default results;