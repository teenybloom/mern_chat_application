import React, { Component } from 'react';
import Rooms from './roomsTile/roomsComponent';
import ChatBox from './chatboxTile/chatBoxComponent';
import Users from './usersTile/usersComponent';
class ChatBody extends Component {
    state = {  }
    styles = {
        height: 200,
    }
    render() { 
        return ( 
            <div className="container is-fluid section" style = {this.state.height}>
                <div className = "columns">
                    <div class="column is-2"><Rooms /></div>
                    <div class="column is-2"><Users /></div>
                    <div class="column"><ChatBox /></div>
                </div>
            </div>
        );
    }
}
 
export default ChatBody;