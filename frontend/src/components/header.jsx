import React, { Component } from 'react';

class Header extends Component {
    state = {
        title: 'Aqua Chat',
        subtitle: 'Converstations under water'
    }

    render() { 
        return (    
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.state.title}
                        </h1>
                        <h2 className="subtitle">
                            {this.state.subtitle}
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Header;