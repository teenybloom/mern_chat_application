import React, { Component } from 'react';

class RoundAvatar extends Component {
    state = {  }
    render() { 
        return (
            <figure class="image is-128x128 userimage">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="avatar"/>
            </figure>
          );
    }
}
 
export default RoundAvatar;