import React, { Component } from "react";
// import Results1 from '../../components/results/results';
import ControlledOpenSelect from "../../components/gen/gen";


class Results extends Component {
 constructor() {
   super();
    this.state = {
        users: []
      }
    }
      componentDidMount() {
        fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}, () => console.log("Matches Fetched", users)))
        .catch(console.log)
      }


    render() {
        return (
         
            <div className="results">
                <div className="results-header">
                    <ControlledOpenSelect></ControlledOpenSelect>
                </div>

<ul>
  {this.state.users.map(users =>
    <li key={users.id}>{ users.name } {users.age} { users.email } {users.hobbies} {users.state} {users.gender}</li>
    )}
</ul>
            </div>
        );
    }
 }
 export default Results;