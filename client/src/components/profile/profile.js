import React, { Component } from 'react'
import axios from 'axios'
import Toolbar from '../toolbar/toolbar';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            gender: '',
            state: '',
            hobbies: '',
            email: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            // .post('https://jsonplaceholder.typicode.com/posts', this.state)
            // .post('https://jsonplaceholder.typicode.com/api/users', this.state)
            // .post('mongodb://heroku_zmvwk6f9:l0bbp63puskr1vblm7q18qriom@ds259787.mlab.com:59787/heroku_zmvwk6f9', this.state)
            // .post('/api/users')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { name, age, gender, state, hobbies, email } = this.state
        return (
            <div>
                <Toolbar></Toolbar>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name:  </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Age:  </label>
                        <input
                            type="text"
                            name="age"
                            value={age}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Gender:  </label>
                        <input
                            type="text"
                            name="gender"
                            value={gender}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>State:  </label>
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Hobbies:  </label>
                        <input
                            type="text"
                            name="hobbies"
                            value={hobbies}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Email:  </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm