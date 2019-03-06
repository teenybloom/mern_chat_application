import React, { Component } from 'react';

class loginNameForm extends Component {
    state = {  }
    render() { 
        return ( 
        <form>
            <div className="field">
                <div className="control">
                    <input className="input is-large" type="text" placeholder="User Name" autofocus=""/>
                </div>
                <div className="control">
                    <button className="button is-primary is-fullwidth is-outlined">
                        Enter
                    </button>
                </div>
            </div>
        </form>
         );
    }
}
 
export default loginNameForm;