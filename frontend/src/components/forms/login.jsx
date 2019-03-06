import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="email" placeholder="Your Email" autoFocus=""/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="password" placeholder="Your Password"/>
                    </div>
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input type="checkbox"/> Remember me
                    </label>
                </div>
            </form>
         );
    }
}
 
export default LoginForm;