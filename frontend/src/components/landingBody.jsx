import React, { Component } from 'react';
import LoginNameForm from './forms/loginNameForm';

class LandingBody extends Component {
    state = {  }
    render() { 
        return (  
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-grey">Login</h3>
                        <p className="subtitle has-text-grey">Please login to proceed.</p>
                        <div className="box">
                            <LoginNameForm />
                        </div>
                        <p className="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            <a href="../">Need Help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section> );
    }
}
 
export default LandingBody;