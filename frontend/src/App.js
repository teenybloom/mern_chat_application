import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import Header from './components/header';
//import ChatBody from './components/chatBody';
import LandingBody from './components/landingBody';
import Footer from './components/footer';
import 'bulma';


class App extends Component {

  constructor(props){
    super(props);

    const socket = io('http://localhost:3030');
    socket.emit('connection');
    socket.emit('disconnect');
  }

  render() {
    return (
      <div className="App">
          <Header />
          <LandingBody />
          <Footer />
      </div>
    );
  }
}

export default App;
