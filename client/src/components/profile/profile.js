import React from 'react';

class Profile extends React.Component {
    constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeHobbies =  this.onChangeHobbies.bind(this);
    this.onChangeEmail =  this.onChangeEmail.bind(this);

    this.state = {
        Name: "",
        Gender: "",
        Age: "",
        State: "",
        Hobbies: "",
        Email: ""
    }
}

onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }
onChangeGender(e) {
    this.setState({
      Gender: e.target.value
    });
  }
onChangeAge(e) {
    this.setState({
      Age: e.target.value
    });
  }
onChangeState(e) {
    this.setState({
      State: e.target.value
    });
  }
onChangeHobbies(e) {
    this.setState({
      Hobbies: e.target.value
    });
  }
onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
        Name: "",
        Gender: "",
        Age: "",
        State: "",
        Hobbies: "",
        Email: ""
    })
  }

  
render() {
    return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Gender:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Gender}
                      onChange={this.onChangeGender}
                      />
                </div>
                <div className="form-group">
                    <label>Age:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Age}
                      onChange={this.onChangeAge}
                      />
                </div>
                <div className="form-group">
                    <label>State:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.State}
                      onChange={this.onChangeState}
                      />
                </div>
                <div className="form-group">
                    <label>Hobbies:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Hobbies}
                      onChange={this.onChangeHobbies}
                      />
                </div>
                <div className="form-group">
                    <label>Email:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                    <button><input type="submit" value="Submit!" className="btn btn-primary"/></button>
            </form>
    )}
}
export default Profile;