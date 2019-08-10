import React from 'react';
// import  ControlledOpenSelect from "../../components/form/form";

class Profile extends React.Component {
    prof = {
        Name: "",
        Gender: "",
        Age: "",
        State: "",
        Hobbies: "",
        Email: "",
    };

change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

onSubmit = e => {
    e.preventDefault();
    console.log(this.prof);
};

render() {
    return (
        <form>
            <input
            name="Name"
            placeholder="Name"
            value= {this.prof.Name} 
            onChange={e => this.change(e)}
            />
           <br />
            <input
            name="Gender"
            placeholder="Gender"
            value= {this.prof.Gender} 
            onChange={e => this.change(e)}
            />
            <br />
            <input
            name="Age"
            placeholder="Age"
            value= {this.prof.Age} 
            onChange={e => this.change(e)}
            />
            <br />
            <input
            name="State"
            placeholder="State"
            value= {this.prof.State} 
            onChange={e => this.change(e)}
            />
            <br />
            <input
            name="Hobbies"
            placeholder="Hobbies"
            value= {this.prof.Hobbies} 
            onChange={e => this.change(e)}
            />
            <br />
            <input
            name="Email"
            placeholder="Email"
            value= {this.prof.Email} 
            onChange={e => this.change(e)}
            />
            <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
    </form>
    );
}
}
// <ControlledOpenSelect></ControlledOpenSelect>

export default Profile;
