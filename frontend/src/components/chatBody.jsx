import React, { Component } from 'react';
import Rooms from './roomsTile/roomsComponent';
import ChatBox from './chatboxTile/chatBoxComponent';
import Users from './usersTile/usersComponent';
class ChatBody extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="container is-fluid section">
                <div className="tile is-ancestor">
                    <div className="tile is-2 is-vertical is-parent">
                        <div className="tile is-child box">
                            <Rooms />
                        </div>
                    </div>
                    <div className="tile is-2 is-vertical is-parent">
                        <div className="tile is-child box">
                            <Users />
                        </div>
                    </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <ChatBox />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ChatBody;