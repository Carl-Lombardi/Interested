import React, { Component } from "react";
import  ControlledOpenSelect from "../../components/gen/gen";



class results extends Component {
    render() {
        return (
            <div className="results">
                <div className="results-header">

                    <h2>INTERESTED!?</h2>

                    <ControlledOpenSelect></ControlledOpenSelect>
                </div>

               

              
            </div>

        );
    }
}

export default results;