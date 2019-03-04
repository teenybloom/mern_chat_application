/**
 * chatbox Tile
 *      -->Message Area- where all the converstaions are 
 *      -->Input Area- where user input the message
 */




import React, { Component } from 'react';
import InputArea from './inputAreaSection';
import MessageArea from './messageAreaSection';

class ChatBox extends Component {
    state = {
        chatBoxTitle: 'Current Chat Room',
    }
    styles = {
        height: '100%',
    }
    render() { 
        return ( 
                <React.Fragment>
                    <section className="hero is-medium tile-border">
                        <div className="hero-head">
                            <p className="title">{this.state.chatBoxTitle}</p>
                        </div>

                        <div className="hero-body">
                            <MessageArea />
                        </div>

                        <div className="hero-foot">
                            <footer className="section is-small">
                                <InputArea />
                            </footer>
                        </div>
                    </section>
                </React.Fragment>
        );
    }
}
 
export default ChatBox;