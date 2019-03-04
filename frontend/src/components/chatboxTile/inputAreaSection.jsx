import React, { Component } from 'react';

class InputArea extends Component {
    state = {  }
    render() { 
        return (
          <form>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input" name="userInput" type="text" placeholder="Type your message" />
              </div>
            <div className="control">
              <button className="button is-info">
                Send
              </button>
            </div>
          </div>
        </form>
        );
    }
}
 
export default InputArea;