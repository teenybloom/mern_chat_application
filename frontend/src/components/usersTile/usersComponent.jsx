import React, { Component } from 'react';

class Users extends Component {
    state = { 
        usersTitle: 'Users',
    }
    render() { 
        return ( 
            <section className="hero is-medium tile-border">
                <div className="hero-head">
                    <p className="title">{this.state.usersTitle}</p>
                </div>

                <div className="hero-body">
                </div>

                <div className="hero-foot">
                    <footer className="section is-small">
                        <h1>current User</h1>
                    </footer>
                </div>
            </section>
         );
    }
}
 
export default Users;
