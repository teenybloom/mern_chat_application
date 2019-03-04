import React, { Component } from 'react';

class Footer extends Component {
    state = {  
        license: 'copyright @ Fishees swimming here and there',
    }
    render() { 
        return ( 
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <i>{this.state.license}</i>
                    </p>
                </div>
            </footer>

         );
    }
}
 
export default Footer;