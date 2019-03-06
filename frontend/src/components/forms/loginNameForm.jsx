import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const socket  = require('../../services/socket-client');

class loginNameForm extends Component {
    
    constructor(props){
        super(props)
        this.state = { userName: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({ [name]: event.target.value })
    }

    handleSubmit = (event) => {
        console.log('Submit');
        if (this.state.userName !== null && this.state.userName !== ""){
            socket.registerUser(this.state.userName);
            console.log('Successfully Registered')
        }
        
    }

    render() { 
        return ( 
        <form>
            <div className="field">
                <div className="control">
                    <input 
                        name='userName' 
                        className="input is-large" 
                        type="text" placeholder="User Name" 
                        autoFocus=""
                        onChange={this.handleChange} />
                </div>
                <br/>
                <div className="control">
                <Link to="/chatrooms">
                    <button 
                        type="button"
                        className="button is-primary is-fullwidth is-outlined"
                        onClick={this.handleSubmit}    
                    >
                        Enter
                    </button>
                </Link>
                </div>
            </div>
        </form>
         );
    }
}
 
export default loginNameForm;